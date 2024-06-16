import Image from "next/image";
import logo from "../../../public/images/logo.png";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { LogoutButton } from "./LogoutButton";

export const Header = async () => {
  const session = await getServerSession(authOptions);
  console.log(session);

  return (
    <div>
      <header className="flex flex-col lg:flex-row justify-center items-center lg:h-[200px] md:h-[200px] sm:h-[100px] w-full">
        <div className="flex flex-col items-center lg:flex-row sm:flex-col md:flex-row">
          <Image
            className="logo items-center lg:pl-8 h-[200px] w-[200px] sm:pt-20"
            src={logo}
            width={626}
            height={432}
            alt="logo garage"
          />
          <div className="justify-center items-center w-full">
            <p className="gerant lg:text-3xl md:text-2xl lg:mt-72 mt-10 text-center md:mt-64 lg:text-center">
              V Parrot la passion auto
            </p>
            <nav className="top text-center lg:mt-24 flex flex-col lg:flex-row md:flex-row md:mt-24 md:items-center lg:items-center md:mr-28 ">
              <Link href="/">
                <p className="acc text-center lg:text-xl md:text-lg rounded-xl mt-20 pl-8 pr-8 pt-3 pb-3 bg-primaryColor opacity-120 transition duration-300 ease-in-out hover:opacity-50">
                  Accueil
                </p>
              </Link>
              <Link href="/les-occcasions">
                <p className="occ text-center justify-center lg:text-xl md:text-lg rounded-xl mt-20 pl-8 pr-8 pt-3 pb-3 md:ml-20 bg-primaryColor opacity-120 transition duration-300 ease-in-out hover:opacity-50">
                  Les occasions
                </p>
              </Link>
              {session !== null && (
                <div className="flex items-center ucc">
                  <Link href="/dashboard">
                    <p className="occ text-center justify-center lg:mt-20 md:mt-20  lg:text-xl md:text-lg rounded-xl pl-8 pr-8 pt-3 pb-3 md:ml-20  bg-primaryColor opacity-120 transition duration-300 ease-in-out hover:opacity-50">
                      Dashboard
                    </p>
                  </Link>
                  <LogoutButton />
                </div>
              )}
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
};
