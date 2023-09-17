import Image from "next/image";

type ServiceProps = {
  image: any;
  title: string;
  description: string;
};

export const Service = ({ image, title, description }: ServiceProps) => {
  return (
    <article className="flex items-center">
      <div className="w-[100px] h-[75px] flex justify-center items-center border-2 border-secondaryColor rounded-lg sm:w-[50px] sm:h-[60px]">
        {/* Affichage de l'image */}
        <Image className="" src={image} alt={title} height={75} width={75} />
      </div>

      <div className="flex flex-col m-4">
        {/* Affichage du titre */}
        <h2 className="text-2xl text-start">{title}</h2>
        {/* Affichage de la description */}
        <p>{description}</p>
      </div>
    </article>
  );
};
