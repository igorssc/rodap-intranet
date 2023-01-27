import clsx from "clsx";
import { HTMLAttributes, ReactNode } from "react";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const Container = ({
  children,
  className,
  ...props
}: ContainerProps) => {
  return (
    <>
      <div
        className={clsx("container mx-auto px-4 sm:px-0", className)}
        {...props}
      >
        {children}
      </div>
    </>
  );
};
