import { Slot } from "@radix-ui/react-slot";
import clsx from "clsx";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  scheme?: "primary" | "secondary";
  small?: boolean;
}

export const Button = ({
  asChild,
  className,
  scheme = "primary",
  small = false,
  ...props
}: ButtonProps) => {
  const Component = asChild ? Slot : "button";

  return (
    <>
      <Component
        className={clsx(
          "uppercase max-w-full rounded transition-all duration-200 border-2 border-transparent",
          small ? "font-semibold py-1 w-44 text-sm" : "font-bold py-4 w-72",
          scheme === "primary"
            ? "bg-primary dark:bg-gray-700 text-white hover:bg-white hover:text-primary hover:border-primary dark:hover:text-gray-300 dark:hover:border-gray-800"
            : "bg-white text-primary hover:bg-primary hover:text-white hover:border-white",
          className
        )}
        {...props}
      />
    </>
  );
};
