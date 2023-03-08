import { BlogCard } from "@/components/BlogCard";
import { Main } from "@/components/Main";
import { Navbar } from "@/components/Navbar";
import { Sidebar } from "@/components/Sidebar";
import Head from "next/head";
import Link from "next/link";
import { Plus } from "phosphor-react";

export default function Blog() {
  const items = [
    {
      title: "Computador não liga",
      resume:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    },
    {
      title:
        "Computador não liga normal desde ontem cedo quando estava normal ainda",
      resume: "Lorem Ipsum is simply dummy text of the printing.",
    },
    {
      title: "Computador não liga",
      resume:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      title: "Computador não liga",
      resume:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    },
    {
      title:
        "Computador não liga normal desde ontem cedo quando estava normal ainda",
      resume: "Lorem Ipsum is simply dummy text of the printing.",
    },
    {
      title: "Computador não liga",
      resume:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
  ];

  return (
    <>
      <Head>
        <title>Rodap - Blog</title>
      </Head>
      <Navbar />
      <Sidebar />
      <Main>
        <Link
          href="blog/criar-post"
          className="flex gap-4 text-lg font-bold items-center cursor-pointer dark:text-white"
        >
          <Plus />
          Criar Post
        </Link>
        <div className="grid grid-cols-3 gap-6">
          {items.map((value, index) => (
            <BlogCard title={value.title} resume={value.resume} key={index} />
          ))}
        </div>
      </Main>
    </>
  );
}
