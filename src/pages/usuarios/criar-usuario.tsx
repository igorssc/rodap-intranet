import { Main } from "@/components/Main";
import { Navbar } from "@/components/Navbar";
import { Sidebar } from "@/components/Sidebar";
import Head from "next/head";

export default function CriarUsuario() {
  return (
    <>
      <Head>
        <title>Rodap - Blog</title>
      </Head>
      <Navbar />
      <Sidebar />
      <Main>Criar usuário</Main>
    </>
  );
}
