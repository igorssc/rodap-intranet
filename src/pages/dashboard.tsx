import { Box } from "@/components/Box";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Main } from "@/components/Main";
import { Navbar } from "@/components/Navbar";
import { NotificationItem } from "@/components/NotificationItem";
import { Post } from "@/components/Post";
import { Sidebar } from "@/components/Sidebar";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [searchUserValue, setSearchUserValue] = useState("");

  return (
    <>
      <Head>
        <title>Rodap - Dashboard</title>
      </Head>
      <Navbar />
      <Sidebar />
      <Main>
        <div className="grid grid-cols-2 gap-6">
          <Box className="grid grid-cols-2 py-20">
            <Image
              src="https://avatars.githubusercontent.com/u/26682297?v=4"
              width={100}
              height={100}
              alt="profile photo"
              className="rounded-full w-44 h-44 justify-self-center"
            />
            <div className="dark:text-white flex flex-col justify-center gap-8">
              <div className="flex flex-col gap-2">
                <p className="text-xl">
                  Olá, <span className="font-extrabold">Igor Santos</span>
                </p>
                <p>Analista Pleno</p>
                <p>Último login: 15 min atrás</p>
              </div>
              <Button small>Editar perfil</Button>
            </div>
          </Box>
          <div className="grid grid-rows-3 gap-6">
            <NotificationItem />
            <NotificationItem />
            <NotificationItem />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="flex flex-col gap-4">
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
          </div>
          <Box className="flex flex-col gap-4 h-fit sticky top-24">
            <h1>Usuários</h1>
            <Input
              value={searchUserValue}
              setValue={setSearchUserValue}
              placeholder="Pesquisar"
            />
            <ul className="flex flex-col gap-4">
              {Array.from({ length: 10 }).map((item, index) => (
                <li key={index} className="flex items-center gap-4">
                  <Image
                    src="https://avatars.githubusercontent.com/u/26682297?v=4"
                    width={100}
                    height={100}
                    alt="profile photo"
                    className="rounded-full w-10 h-10 justify-self-center"
                  />
                  Igor Santos{" "}
                  <small className="text-gray-400 dark:text-gray-500">
                    Analista pleno
                  </small>
                  <Button small className="ml-auto">
                    Mensagem
                  </Button>
                </li>
              ))}
            </ul>
          </Box>
        </div>
      </Main>
    </>
  );
}
