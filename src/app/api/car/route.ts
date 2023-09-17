import { writeFile } from "fs/promises";
import { NextResponse } from "next/server";
import { getUniqFileName } from "../../../../libs/utiles";
import { prisma } from "@/../libs/prismadb";
import { join } from "path";

export async function POST(request: Request) {
  try {
    const data: FormData = await request.formData();

    console.log(data);

    const title: string | null = data.get("title") as string;
    const price: number | null = data.get("price") as unknown as number;
    const year: string| null = data.get("year") as unknown as string;
    const mileage: number | null = data.get("mileage") as unknown as number;
    const features: string | null = data.get("features") as string;
    const equipments: string | null = data.get("equipments") as string;

    const files: File[] | null = data.getAll("file") as File[];
    const convertYear = new Date(year)
    const annonce = await prisma.annonce.create({
      data: {
        title: title,
        price: Number(price),
        year: convertYear,
        mileage: Number(mileage),
        features: features,
        equipments: equipments,
      },
    });

    const annonceFileLinks: any = [];

    for (const file of files) {
      const bytes: ArrayBuffer = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);

      const fileExtension = file.name.split(".").pop();

      if (fileExtension === undefined) {
        return new NextResponse("Une Erreur s'est produite !", { status: 500 });
      }

      const uniqFileName = getUniqFileName({
        carId: annonce.id,
        fileExtension: fileExtension,
      });

      annonceFileLinks.push({
        annonce_id: annonce.id,
        url: uniqFileName,
      });

      const path: string = join("./public/images", "voitures", uniqFileName);
      await writeFile(path, buffer);
    }

    const annoncePhoto = await prisma.annoncePhotos.createMany({
      data: [...annonceFileLinks],
    });

    return NextResponse.json({ annonce, annoncePhoto }, { status: 201 });
  } catch (error: any) {
    console.log(error);
    return new NextResponse(error, { status: 500 });
  }
}
