import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/../libs/prismadb";

/* pour configurer un shéma de user souhaitez pour la validation du formulaire*/
const ContactBodyScheme = z.object({
  object: z
    .string({
      required_error: "Le champs objet est requis !",
      invalid_type_error: "Le champs objet est requis !",
    })
    .max(50)
    .trim(),

  firstName: z
    .string({
      required_error: "Le champs prenom est requis !",
      invalid_type_error: "Le champs prenom est requis !",
    })
    .max(20)
    .trim(),

  lastName: z
    .string({
      required_error: "Le champs nom est requis !",
      invalid_type_error: "Le champs nom est requis !",
    })
    .max(20)
    .trim(),

  email: z
    .string({
      required_error: "Le champs email est requis !",
      invalid_type_error: "Le champs email est requis !",
    })
    .max(20)
    .trim(),

  phone: z.string({
    required_error: "Le champs telephone est requis !",
    invalid_type_error: "Le champs telephone est requis !",
  }),

  message: z
    .string({
      required_error: "Le champs message est requis !",
      invalid_type_error: "Le champs message est requis !",
    })
    .max(120)
    .trim(),
});

export async function POST(request: Request) {
  try {
    /*recupere les données du body*/
    const body = await request.json();
    console.log(body);

    /*Body doit etre identique aux configurations sinon retour error*/
    const contactBody = ContactBodyScheme.parse(body);

    /*securisation du mot de passe*/

    const contact = await prisma.contact.create({
      data: {
        object: contactBody.object,
        firstName: contactBody.firstName,
        lastName: contactBody.lastName,
        email: contactBody.email,
        phone: contactBody.phone,
        message: contactBody.message,
      },
    
    });

    console.log(contact);
    

    return NextResponse.json(contact, { status: 201 });
  } catch (error: any) {
    console.log(error);
    return new NextResponse(error, { status: 500 });
  }
}
