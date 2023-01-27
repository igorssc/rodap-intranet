import { Slot } from "@radix-ui/react-slot";
import clsx from "clsx";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  scheme?: "primary" | "secondary";
}

export const Button = ({
  asChild,
  className,
  scheme = "primary",
  ...props
}: ButtonProps) => {
  const Component = asChild ? Slot : "button";

  return (
    <>
      <Component
        className={clsx(
          "uppercase py-4 w-72 max-w-full font-bold rounded transition-all duration-200 border-2 border-transparent",
          scheme === "primary"
            ? "bg-primary text-white hover:bg-white hover:text-primary hover:border-primary"
            : "bg-white text-primary hover:bg-primary hover:text-white hover:border-white",
          className
        )}
        {...props}
      />
    </>
  );
};
