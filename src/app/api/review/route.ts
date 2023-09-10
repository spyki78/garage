import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/../libs/prismadb";

import { PrismaAdapter } from "@auth/prisma-adapter";
import bcrypt from "bcrypt";
import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { UserBodyScheme } from "../auth/[...nextauth]/route";

/* pour configurer un shéma de user souhaitez pour la validation du formulaire*/
const ReviewBodyScheme = z.object({
  name: z
    .string({
      required_error: "Le champs name est requis !",
      invalid_type_error: "Le champs name est requis !",
    })
    .max(20)
    .trim(),

  message: z
    .string({
      required_error: "Le champs message est requis !",
      invalid_type_error: "Le champs message est requis !",
    })
    .max(80)
    .trim(),

  rating: z
    .number({
      required_error: "Le champs rating est requis !",
      invalid_type_error: "Le champs rating est requis !",
    })
    .min(1)
    .max(5),
});

/*
export async function GET() {
  try {
  } catch (error: any) {
    console.log(error);
    return new NextResponse(error, { status: 500 });
  }
}*/

export async function POST(request: Request) {
  try {
    /*recupere les données du body*/
    const body = await request.json();

    /*Body doit etre identique aux configurations sinon retour error*/
    const reviewBody = ReviewBodyScheme.parse(body);

    /*securisation du mot de passe*/

    const review = await prisma.review.create({
      data: {
        name: reviewBody.name,
        message: reviewBody.message,
        rating: reviewBody.rating,
      },
    });

    return NextResponse.json(review, { status: 201 });
  } catch (error: any) {
    console.log(error);
    return new NextResponse(error, { status: 500 });
  }
}

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma) as any,
  providers: [
    // utilisation d'un non provider / general avec mail et mot de passe
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "email", type: "email" },
        password: { label: "password", type: "password" },
      },

      async authorize(credentials: any) {
        const userBody = UserBodyScheme.parse(credentials);
        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        if (!user || !user?.hashed_password) {
          throw new Error("Invalide Credential");
        }

        const isCorrectPassword = await bcrypt.compare(
          credentials.password,
          user.hashed_password
        );

        if (!isCorrectPassword) {
          throw new Error("Invalide Credential");
        }

        return {
          email: user.email,
        } as any;
      },
    }),
  ],
  debug: process.env.NODE_ENV == "development",
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
};
