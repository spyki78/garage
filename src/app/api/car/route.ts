import { writeFile } from "fs/promises"; // mporte le module  writeFile  qui permet d'écrire des fichiers dans le système de fichiers. 
import { NextResponse } from "next/server"; // importe le type  NextResponse  qui permet de créer des réponses HTTP. 
import { getUniqFileName } from "../../../../libs/utiles";// importe la fonction  getUniqFileName  qui permet de générer un nom de fichier unique pour les images. 
import { prisma } from "@/../libs/prismadb"; // importe le module  prisma  qui permet d'interagir avec la base de données Prisma. 
import { join } from "path"; // importe le module  join  qui permet de combiner des chemins de fichiers. 

export async function POST(request: Request) {
  try {
    const data: FormData = await request.formData();

    console.log(data);//  affiche les données du formulaire d'annonce dans la console. 

    const title: string | null = data.get("title") as string;// crée une variable  title  qui contient le titre de l'annonce. 
    const price: number | null = data.get("price") as unknown as number;
    const year: string | null = data.get("year") as unknown as string;
    const mileage: number | null = data.get("mileage") as unknown as number;
    const features: string | null = data.get("features") as string;
    const equipments: string | null = data.get("equipments") as string;

    const files: File[] | null = data.getAll("file") as File[]; // crée une variable  files  qui contient les images de l'annonce. 
    const convertYear = new Date(year) // convertit la chaîne de caractères  year en une date. 
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
      const buffer = Buffer.from(bytes);//convertit le contenu de l'image en un buffer

      const fileExtension = file.name.split(".").pop(); // extrait l'extension du fichier. 

      if (fileExtension === undefined) { // vérifie si l'extension du fichier est définie. 
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

      const path: string = join("./public/images", "voitures", uniqFileName);// dossier du chemin fichier images voitures
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
