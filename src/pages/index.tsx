import logoImg from "@/assets/logo.png";
import { Box } from "@/components/Box";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { Input } from "@/components/Input";
import { Particles } from "@/components/Particles";
import { Inter } from "@next/font/google";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Fade from "react-reveal/Fade";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <Head>
        <title>Rodap - Intranet</title>
      </Head>
      <Particles />
      <Container className="flex h-screen items-center justify-center">
        <Box className="bg-white relative max-w-full w-[600px] p-10 flex flex-col gap-8">
          <Fade>
            <Image src={logoImg} alt="logo" className="m-auto" />
          </Fade>
          <div className="flex flex-col gap-4">
            <Input value={user} setValue={setUser} label="Usuário" />
            <Input value={password} setValue={setPassword} label="Senha" />
          </div>
          <Fade>
            <div className="w-full flex justify-center">
              <Button>Entrar</Button>
            </div>
          </Fade>
        </Box>
      </Container>
    </>
  );
}
