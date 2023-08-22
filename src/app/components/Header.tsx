import Image from "next/image";
import logo from "../../../public/images/logo.png";
import account from "../../../public/images/account.png";
import Link from "next/link";
import AuthForm from "../../app/components/../connexion/components/AuthForm";
export const Header = () => {
  return (
    <header
      className="
    mb-8
    z-20
    flex flex-col 
    justify-between 
    items-center 
    lg:h-[200px] 
    md:h-[200px]
    sm:h-[100px]
    w-full 
    lg:flex-row 
    md:flex-row 
    sm:flex-row 
    lg:mr-5
    md:mr-5
    "
    >
      <div>
        <Link
          href="/"
          className="flex flex-col justify-between items-center lg:pl-8 lg:pt-0 md:pl-8 mt-14"
        >
          <Image
            className="logo
            h-[200px] 
            w-[175px] 
            sm:pt-20"
            src={logo}
            width={626}
            height={432}
            alt="logo garage"
          />

          <p className="mt-10 lg:text-lg border-2 border-secondaryColor rounded-xl pl-8 pr-8 pt-3 pb-3">
            Accueil
          </p>
        </Link>
        <p className="gerant mt-5 ml-10 lg:text-2xl md:text-xl">
          V Parrot la passion auto
        </p>
      </div>
      <nav>
        <ul className="flex flex-col lg:flex-row md:flex-row lg:pr-10 md:pr-8">
          <li className="flex justify-center items-center text-center mt-20 md:flex flex-col md:pr-8">
            <Link
              className="
              flex flex-col text-center border-2 border-secondaryColor rounded-xl p-3 lg:text-lg mr- md:mt-4 lg:mr-32 lg:mt-40 md:pr-4"
              href="/les-occcasions"
            >
              Les occasions
            </Link>
          </li>
          <li className="pl-4 flex items-center flex-col lg:flex-row sm:mt-32 lg:-mt-10">
            <Image
              className="pr-4 md: flex justify-center items-center mt-32"
              src={account}
              width={50}
              height={50}
              alt="logo account"
            />
            <div className="flex flex-col mt-5 lg:mt-0 lg:ml-4">
              <p className="border-2 border-secondaryColor rounded-xl p-1 pl-4 lg:text-lg text-center lg:mt-48">
                Connexion
              </p>
              <AuthForm />
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};
