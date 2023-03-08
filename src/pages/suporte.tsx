import { Main } from "@/components/Main";
import { Navbar } from "@/components/Navbar";
import { Sidebar } from "@/components/Sidebar";
import { TicketCard } from "@/components/TicketCard";
import Head from "next/head";
import Link from "next/link";
import { Plus } from "phosphor-react";

type itemProps = {
  title: string;
  resume: string;
  status: "resolved" | "being attended" | "awaiting";
  priority: "low" | "medium" | "hight";
};

export default function Suporte() {
  const items: itemProps[] = [
    {
      title: "Computador não liga",
      resume:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      status: "being attended",
      priority: "low",
    },
    {
      title:
        "Computador não liga normal desde ontem cedo quando estava normal ainda",
      resume: "Lorem Ipsum is simply dummy text of the printing.",
      status: "awaiting",
      priority: "medium",
    },
    {
      title: "Computador não liga",
      resume:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      status: "resolved",
      priority: "hight",
    },
  ];

  return (
    <>
      <Head>
        <title>Rodap - Suporte</title>
      </Head>
      <Navbar />
      <Sidebar />
      <Main>
        <div className="flex gap-4 text-lg font-bold items-center cursor-pointer dark:text-white">
          <Plus />
          Criar Ticket
        </div>
        <div className="grid grid-cols-3 gap-6">
          {items.map((value, index) => (
            <Link href="#" key={index}>
              <TicketCard
                title={value.title}
                resume={value.resume}
                status={value.status}
                priority={value.priority}
              />
            </Link>
          ))}
        </div>
      </Main>
    </>
  );
}
