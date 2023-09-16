import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/../libs/prismadb";


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



       