"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";


export const Form = () => {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [year, setYear] = useState("");
  const [mileage, setMileage] = useState("");
  const [features, setFeatures] = useState("");
  const [equipments, setEquipments] = useState("");

  const [files, setFiles] = useState<any>([]);

  const handleChange = (e: any) => {
    const selectedImages: File[] = Array.from(e.target.files);
    console.log(selectedImages);

    setFiles((currentFiles: File[]) => [...currentFiles, ...selectedImages]);
  };
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = new FormData();
    data.set("title", title);
    data.set("price", price);
    data.set("year", year);
    data.set("mileage", mileage);
    data.set("features", features);
    data.set("equipments", equipments);

    for (const file of files) {
      data.append("file", file);
    }

    await fetch("/api/car", {
      method: "POST",
      body: data,
    }).then((res: Response) => {
      console.log(res);
      console.log(res.ok);

      if (!res.ok) {
        res.json().then((errors: any) => {
          errors.map((error: any) => {
            console.log(error.message);
          });
        });
      } else {
        router.refresh();
        router.push("/dashboard");
      }
    });
  };
  return (
    <div>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="flex flex-col justify-center items-center"
        method="post"
      >
        <p>Titre</p>
        <input
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          id="title"
          name="title"
          className="
          border border-secondaryColor my-5 pt-5 pb-5 rounded-xl text-center 
          "
        />
        <p>Prix</p>
        <input
          onChange={(e) => setPrice(e.target.value)}
          type="number"
          id="price"
          name="price"
          style={{textAlign: 'center'}}
          className="
          border border-secondaryColor my-5 mx-5 rounded-xl pt-5 pb-5
          "
        />
        <p>Année</p>
        <input
          onChange={(e) => setYear(e.target.value)}
          type="date"
          id="year"
          name="year"
          className="
          border border-secondaryColor my-5 px-8 rounded-xl pt-5 pb-5
          "
        />
         <p>kilométrage</p>
        <input
          onChange={(e) => setMileage(e.target.value)}
          type="text"
          id="mileage"
          name="mileage"
          style={{textAlign: 'center'}}
          className="
          border border-secondaryColor my-5 rounded-xl pt-5 pb-5
          "
        />
        <p>Caractéristiques</p>
        <input
          onChange={(e) => setFeatures(e.target.value)}
          type="text"
          id="features"
          name="Features"
          style={{textAlign: 'center'}}
          className="
          border border-secondaryColor my-5 rounded-xl pt-5 pb-5
          "
        />
        <p>Equipements & Options</p>
        <input
          onChange={(e) => setEquipments(e.target.value)}
          type="text"
          id="equipements"
          name="equipements"
          style={{textAlign: 'center'}}
          className="
          border border-secondaryColor my-5 rounded-xl pt-5 pb-5
          "
        />

        <input
          onChange={(e) => handleChange(e)}
          id="files"
          name="files"
          type="file"
          multiple
          className="
          border border-secondaryColor my-5 pl-5 pr-5 py-5 rounded-xl
          "
        />

        <div className="border border-secondaryColor px-8 rounded-xl">
          <button type="submit">Créer une voiture</button>
        </div>
      </form>
    </div>
  );
};
