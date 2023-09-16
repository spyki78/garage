import { prisma } from "@/../libs/prismadb";
import { NextResponse } from "next/server";

export async function PUT(
  request: Request,
  { params }: { params: { reviewId: any } }
) {
  try {
    const review = await prisma.review.update({
      where: {
        id: Number(params.reviewId),
      },
      data: {
        isValid: true,
      },
    });

    return NextResponse.json(review, { status: 200 });
  } catch (error: any) {
    console.log(error);
    return new NextResponse(error, { status: 500 });
  }
}

export async function DELETE(
    request: Request,
    { params }: { params: { reviewId: any } }
  ) {
    try {
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
  
  