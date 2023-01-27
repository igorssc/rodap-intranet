import logoImg from "@/assets/logo.png";
import Image from "next/image";
import { useSnackbar } from "notistack";
import { useState } from "react";
import Fade from "react-reveal/Fade";
import { Box } from "./Box";
import { Button } from "./Button";
import { Container } from "./Container";
import { Input } from "./Input";

export const FormLogin = () => {
  const { enqueueSnackbar } = useSnackbar();

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    enqueueSnackbar("Usuário ou senha incorretos", { variant: "error" });
  };

  return (
    <>
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
              <Button onClick={handleLogin}>Entrar</Button>
            </div>
          </Fade>
        </Box>
      </Container>
    </>
  );
};
