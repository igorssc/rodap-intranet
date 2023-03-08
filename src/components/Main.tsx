import { ReactNode } from "react";

interface MainProps {
  children: ReactNode;
}

export const Main = ({ children }: MainProps) => {
  return (
    <>
      <main className="px-6 py-10 mt-14 sm:ml-64 bg-gray-100 dark:bg-gray-700 min-h-screen flex flex-col gap-6">
        {children}
      </main>
    </>
  );
};
