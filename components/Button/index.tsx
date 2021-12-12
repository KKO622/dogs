import { FC } from "react";

interface ButtonProps {
  buttonText: string | number;
  onClick: () => void;
  light?: boolean;
  small?: boolean;
}

export const Button: FC<ButtonProps> = ({
  buttonText,
  onClick,
  light = false,
  small = false,
}) => {
  return (
    <button
      onClick={onClick}
      className={`${
        light
          ? "bg-transparent hover:bg-zinc-700 hover:text-white  hover:border-transparent"
          : "text-white bg-zinc-700 hover:bg-zinc-500"
      }${
        small ? " py-2 px-4" : " px-8 py-2 mt-4 mx-8"
      } font-semibold uppercase rounded border border-zinc-700`}
    >
      {buttonText}
    </button>
  );
};
