import { Box } from "@/components/Box";
import { Input } from "@/components/Input";
import { Main } from "@/components/Main";
import { Navbar } from "@/components/Navbar";
import { Sidebar } from "@/components/Sidebar";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Plus } from "phosphor-react";
import { useState } from "react";

export default function Usuarios() {
  const [searchUserValue, setSearchUserValue] = useState("");

  return (
    <>
      <Head>
        <title>Rodap - Usuários</title>
      </Head>
      <Navbar />
      <Sidebar />
      <Main>
        <Link
          href="usuarios/criar-usuario"
          className="flex gap-4 text-lg font-bold items-center cursor-pointer dark:text-white"
        >
          <Plus />
          Criar Usuário
        </Link>
        <Input
          value={searchUserValue}
          setValue={setSearchUserValue}
          placeholder="Pesquisar"
          className="rounded-lg py-6"
          schema="secondary"
        />
        <Box className="flex items-center gap-4">
          <Image
            src="https://avatars.githubusercontent.com/u/26682297?v=4"
            width={100}
            height={100}
            alt="profile photo"
            className="rounded-full w-14 h-14 justify-self-center"
          />
          <div className="flex flex-col gap-2">
            <span className="overflow-hidden text-ellipsis whitespace-nowrap max-w-full font-bold">
              Igor Santos da Costa
            </span>
            <span>Técnico em TI</span>
            <span>
              Desde:{" "}
              {new Date().toLocaleDateString("pt-BR", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>
        </Box>
        <Box className="flex items-center gap-4">
          <Image
            src="https://avatars.githubusercontent.com/u/26682297?v=4"
            width={100}
            height={100}
            alt="profile photo"
            className="rounded-full w-14 h-14 justify-self-center"
          />
          <div className="flex flex-col gap-2">
            <span className="overflow-hidden text-ellipsis whitespace-nowrap max-w-full font-bold">
              Igor Santos da Costa
            </span>
            <span>Técnico em TI</span>
            <span>
              Desde:{" "}
              {new Date().toLocaleDateString("pt-BR", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>
        </Box>
        <Box className="flex items-center gap-4">
          <Image
            src="https://avatars.githubusercontent.com/u/26682297?v=4"
            width={100}
            height={100}
            alt="profile photo"
            className="rounded-full w-14 h-14 justify-self-center"
          />
          <div className="flex flex-col gap-2">
            <span className="overflow-hidden text-ellipsis whitespace-nowrap max-w-full font-bold">
              Igor Santos da Costa
            </span>
            <span>Técnico em TI</span>
            <span>
              Desde:{" "}
              {new Date().toLocaleDateString("pt-BR", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>
        </Box>
      </Main>
    </>
  );
}
