import { NextResponse } from "next/server";
import { z } from "zod";
import bcrypt from "bcrypt";
import { prisma } from "@/../libs/prismadb";

/* pour configurer un shéma de user souhaitez pour la validation du formulaire*/
const UserBodyScheme = z.object({
  email: z
    .string({
      required_error: "Le champs email est requis !",
      invalid_type_error: "Le champs email est requis !",
    })
    .email("Le champs email n'est pas valide !")
    /* supprime les espaces auto*/
    .trim(),
  password: z
    .string({
      required_error: "Le champs mot de passe est requis !",
      invalid_type_error: "Le champs mot de passe est requis !",
    })
    .min(8, { message: "Must be 8 or more characters long" })
    .max(20, { message: "Mot de passe 20 carac" })
    .regex(/[A-Z]/, {
      message: "Le champ mot de passe doit contenir au moins une majuscule !",
    })
    .regex(/[0-9]/, {
      message: "Le champ mot de passe doit contenir au moins un chiffre !",
    })
    .regex(/[@#$%^&+=!:/?~]/, {
      message:
        "Le champ mot de passe doit contenir au moins un caractère spécial !",
    })
    .trim(),
});



export async function POST(request: Request) {
  try {
    /*recupere les données du body*/
    const body = await request.json();
    /*Body doit etre identique aux configurations sinon retour error*/
    const userBody = UserBodyScheme.parse(body);
    /*securisation du mot de passe*/
    const hashed_password = await bcrypt.hash(userBody.password, 12);
    const user = await prisma.user.create({
      data: {
        email: userBody.email,
        hashed_password: hashed_password,
      },
    });

    return NextResponse.json(user, { status: 201 });
  } catch (error: any) {
    console.log(error);
    return new NextResponse(error, { status: 500 });
  }
}
