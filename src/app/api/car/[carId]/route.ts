import { prisma } from "@/../libs/prismadb"; //  importe le module prisma, qui permet d'accéder à la base de données Prisma. 
import { NextResponse } from "next/server"; // importe le module NextResponse, qui permet de créer des réponses HTTP. 

export async function DELETE(
   
    request: Request,
    { params }: { params: { carId: any } } //  définit la fonction DELETE, qui est utilisée pour supprimer une annonce. 
  
  ) {
    try { //  commence la section de code qui exécute la requête.
      const annonce = await prisma.annonce.delete({
        where: {
          id: Number(params.carId),
        },
      
      }); //  exécute la requête de suppression d'annonce. 
  
      return NextResponse.json(annonce, { status: 200 });
    } catch (error: any) {
      console.log(error); // commence la section de code qui gère les erreurs. 
      return new NextResponse(error, { status: 500 });
    }
  }
  
  