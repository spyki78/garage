import { prisma } from "@/../libs/prismadb";
import { NextResponse } from "next/server";

export async function DELETE(
   
    request: Request,
    { params }: { params: { carId: any } }
  
  ) {
    try {
      const annonce = await prisma.annonce.delete({
        where: {
          id: Number(params.carId),
        },
      
      });
  
      return NextResponse.json(annonce, { status: 200 });
    } catch (error: any) {
      console.log(error);
      return new NextResponse(error, { status: 500 });
    }
  }
  
  