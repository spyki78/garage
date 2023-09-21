import Image from "next/image";
import logo from "../../../public/images/logo.png";
export const Footer = () => {
  return (
    <footer className="foot footer-container bg-gray-900 mt-10 mx-auto sm:my-auto">
      <section className="flex flex-col items-center justify-between md:flex md:flex-row lg:mt-64 ">
        <div className="flex items-center">
          <Image
            className="logo 
            lg:pl-8
            md:ml-8
            lg:mb-20
            sm:mb-28
            h-[200px] 
            w-[200px] 
            sm:pt-20"
            src={logo}
            width={626}
            height={432}
            alt="logo garage"
          />
        </div>
        <div className="mb-4 py-5 text-center flex flex-col ">
          <h3 className="text-center font-bold">Horaires</h3>

          <ul className="mt-2">
            <li>Lundi : 8h45 - 12h00 14h00 - 18h00 </li>
            <li>Mardi : 8h45 - 12h00 14h00 - 18h00 </li>
            <li>Mercredi : 8h45 - 12h00 14h00 - 18h00 </li>
            <li>Jeudi : 8h45 - 12h00 14h00 - 18h00 </li>
            <li>Vendredi : 8h45 - 12h00 14h00 - 18h00 </li>
            <li>Samedi : 8h45 - 12h00 14h00 - 18h00 </li>
            <li>Dimanche : Fermé</li>
          </ul>
        </div>
        <div className="sm:text-center sm:mr-5 text-right">
          <h3 className="md:mr-5 text-center text-lg font-bold p-3 pl-4 lg:text-lg">
            Contactez-nous
          </h3>
          <p className="mt-2 text-center">123 Rue du Commerce</p>
          <p>33000 Bordeaux 05 80 45 78 54</p>
        </div>
      </section>
      <div className="flex flex-col items-center">
        <p className="sign text-center lg:-mt-5">@spyki2023</p>
      </div>
    </footer>
  );
};
