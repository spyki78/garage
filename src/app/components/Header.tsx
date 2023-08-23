import Image from "next/image";
import logo from "../../../public/images/logo.png";
import Link from "next/link";
export const Header = () => {
  return (
<header className="mb-8 flex flex-col lg:flex-row justify-center items-center lg:h-[200px] md:h-[200px] sm:h-[100px] w-full lg:mr-5 md:mr-5">
    <div className="flex flex-col items-center lg:flex-row sm:flex-col md:flex-row">
      <Image
        className="logo items-center lg:pl-8 h-[200px] w-[200px] sm:pt-20 lg:mt-24"
        src={logo}
        width={626}
        height={432}
        alt="logo garage"
      />
      <div className="justify-center items-center">
        <p className="gerant lg:text-5xl md:text-3xl lg:mt-72 ml-20 mt-10 text-center md:mt-64 ">V Parrot la passion auto</p>
        <nav className="top lg:mt-24 flex flex-col lg:flex-row md:flex-row md:mt-24">
          <Link href="/">
            <p className="acc text-center lg:text-xl md:text-lg rounded-xl mt-20 pl-8 pr-8 pt-3 pb-3 bg-primaryColor opacity-120 transition duration-300 ease-in-out hover:opacity-50">
              Accueil
            </p>
          </Link>
          <Link href="/les-occcasions">
            <p className="occ text-center lg:text-xl md:text-lg rounded-xl mt-20 pl-8 pr-8 pt-3 pb-3 md:ml-20 lg:mr-20 bg-primaryColor opacity-120 transition duration-300 ease-in-out hover:opacity-50">
              Les occasions
            </p>
          </Link>
        </nav>
      </div>
    </div>
  </header>
  );
};
