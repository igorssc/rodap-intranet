import clsx from "clsx";
import { HTMLAttributes, ReactNode } from "react";

interface MainProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const Main = ({ children, className, ...props }: MainProps) => {
  return (
    <>
      <main
        className={clsx(
          "px-6 py-10 mt-14 sm:ml-64 bg-gray-100 dark:bg-gray-700 min-h-screen flex flex-col gap-6",
          className
        )}
        {...props}
      >
        {children}
      </main>
    </>
  );
};
