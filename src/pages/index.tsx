import { FormLogin } from "@/components/FormLogin";
import { Particles } from "@/components/Particles";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Rodap - Intranet</title>
      </Head>
      <Particles />
      <FormLogin />
    </>
  );
}
