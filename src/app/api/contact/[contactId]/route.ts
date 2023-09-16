import { prisma } from "@/../libs/prismadb";
import { NextResponse } from "next/server";

export async function PUT(
  request: Request,
  { params }: { params: { contactId: any } }
) {
  try {
    const contact = await prisma.contact.update({
      where: {
        id: Number(params.contactId),
      },
      data: {
        isValid: true,
      },
    });

    return NextResponse.json(contact, { status: 200 });
  } catch (error: any) {
    console.log(error);
    return new NextResponse(error, { status: 500 });
  }
}

export async function DELETE(
   
    request: Request,
    { params }: { params: { contactId: any } }
  
  ) {
    try {
      const contact = await prisma.contact.delete({
        where: {
          id: Number(params.contactId),
        },
      
      });
  
      return NextResponse.json(contact, { status: 200 });
    } catch (error: any) {
      console.log(error);
      return new NextResponse(error, { status: 500 });
    }
  }
  
  