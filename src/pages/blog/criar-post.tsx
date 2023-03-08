import { Editor } from "@/components/Editor";
import { Input } from "@/components/Input";
import { Main } from "@/components/Main";
import { Navbar } from "@/components/Navbar";
import { Sidebar } from "@/components/Sidebar";
import Head from "next/head";
import { useState } from "react";

export default function CriarPost() {
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");

  return (
    <>
      <Head>
        <title>Rodap - Blog</title>
      </Head>
      <Navbar />
      <Sidebar />
      <Main>
        <Input
          label="Título"
          value={title}
          setValue={setTitle}
          schema="secondary"
        />
        <Input
          label="Imagem de capa"
          type="file"
          value={title}
          setValue={setTitle}
          schema="secondary"
        />
        <label className="text-sm flex flex-col gap-3 dark:text-white">
          Conteúdo
          <Editor value={text} onChange={setText} />
        </label>
      </Main>
    </>
  );
}
