import clsx from "clsx";
type ButtonProps = {
  children: any;
  type?: "submit" | "button";
  primary?: boolean;
  secondary?: boolean;
  rounded?: boolean;
};
export const Button = ({
  children,
  type,
  primary,
  secondary,
  rounded,
}: ButtonProps) => {
  return (
    <button
      className={clsx(
        `
        border-0 
        text-white 
        p-4 
        rounded-2xl 
        hover:ease-in 
        duration-300 
        px-8`,
        primary && "bg-primaryColor",
        secondary && "bg-secondaryColor",
        rounded && "text-green-500"
      )}
      type={type}
    >
      {children}
    </button>
  );
};
