import { prisma } from "@/../libs/prismadb"; // Importation du module prisma depuis le fichier de configuration prismadb
import { NextResponse } from "next/server";// Importation du module NextResponse pour la gestion des réponses dans Next.js

// Fonction pour mettre à jour un avis (HTTP PUT)
export async function PUT(
  request: Request,
  { params }: { params: { reviewId: any } }
) {
  try {
    // Mise à jour de l'avis dans la base de données via Prisma
    const review = await prisma.review.update({
      where: {
        id: Number(params.reviewId),
      },
      data: {
        isValid: true,
      },
    });
// Renvoi d'une réponse JSON avec l'avis mis à jour et le statut 200 (OK)
    return NextResponse.json(review, { status: 200 });
  } catch (error: any) {
    console.log(error);
    return new NextResponse(error, { status: 500 });
  }
}

// Fonction pour supprimer un avis (HTTP DELETE)
export async function DELETE(
    request: Request,
    { params }: { params: { reviewId: any } }
  ) {
    try {
       // Suppression de l'avis dans la base de données via Prisma
      const review = await prisma.review.delete({
        where: {
          id: Number(params.reviewId),
        },
      
      });
  
      return NextResponse.json(review, { status: 200 });
    } catch (error: any) {
      console.log(error);
      return new NextResponse(error, { status: 500 });
    }
  }
  
  