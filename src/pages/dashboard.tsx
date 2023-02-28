import { Box } from "@/components/Box";
import { Navbar } from "@/components/Navbar";
import { Sidebar } from "@/components/Sidebar";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Rodap - Dashboard</title>
      </Head>
      <Navbar />
      <Sidebar />
      <main className="p-4 sm:ml-64 bg-gray-100 dark:bg-gray-700 min-h-screen">
        <div className="p-4 mt-14">
          <div className="grid grid-cols-2 gap-6">
            <Box className="grid grid-cols-2 py-20">
              <Image
                src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                width={100}
                height={100}
                alt="profile photo"
                className="rounded-full w-44 h-44 justify-self-center"
              />
              <div className="dark:text-white flex flex-col justify-center gap-3">
                <p className="text-xl">
                  Olá, <span className="font-extrabold">Igor Santos</span>
                </p>
                <p>Analista Pleno</p>
                <p>Último login: 15 min atrás</p>
              </div>
            </Box>
            <div className="grid grid-rows-3 gap-6">
              <Box className="flex items-center gap-4">
                <Image
                  src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                  width={30}
                  height={30}
                  alt="profile photo"
                  className="rounded-full w-16 h-16 justify-self-center"
                />
                <div>
                  <p>
                    <span className="font-extrabold">Igor Santos</span> fez
                    aniversário ontem
                  </p>
                  <small>{new Date().toISOString()}</small>
                </div>
              </Box>
              <Box className="flex items-center gap-4">
                <Image
                  src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                  width={30}
                  height={30}
                  alt="profile photo"
                  className="rounded-full w-16 h-16 justify-self-center"
                />
                <div>
                  <p>
                    <span className="font-extrabold">Igor Santos</span> fez
                    aniversário ontem
                  </p>
                  <small>{new Date().toISOString()}</small>
                </div>
              </Box>
              <Box className="flex items-center gap-4">
                <Image
                  src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                  width={30}
                  height={30}
                  alt="profile photo"
                  className="rounded-full w-16 h-16 justify-self-center"
                />
                <div>
                  <p>
                    <span className="font-extrabold">Igor Santos</span> fez
                    aniversário ontem
                  </p>
                  <small>{new Date().toISOString()}</small>
                </div>
              </Box>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
