import clsx from "clsx";
import { HTMLAttributes, ReactNode } from "react";

interface BoxProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const Box = ({ children, className, ...props }: BoxProps) => {
  return (
    <>
      <div className={clsx("shadow-md shadow-gray-300", className)} {...props}>
        {children}
      </div>
    </>
  );
};
