import { ThemeContext } from "@/contexts/ThemeContext";
import { useSnackbar } from "notistack";
import { useContext, useState } from "react";
import Fade from "react-reveal/Fade";
import { Box } from "./Box";
import { Button } from "./Button";
import { Container } from "./Container";
import { Input } from "./Input";
import { Logo } from "./Logo";

export const FormLogin = () => {
  const { enqueueSnackbar } = useSnackbar();

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const { theme } = useContext(ThemeContext);

  const handleLogin = () => {
    enqueueSnackbar("Usuário ou senha incorretos", { variant: "error" });
  };

  return (
    <>
      <Container className="flex h-screen items-center justify-center">
        <Box className="relative max-w-full w-[600px] px-10 py-16 flex flex-col gap-8">
          <Fade>
            <Logo
              className="m-auto"
              {...(theme === "dark" && { scheme: "secondary" })}
            />
          </Fade>
          <div className="flex flex-col gap-4">
            <Input value={user} setValue={setUser} label="Usuário" />
            <Input
              value={password}
              setValue={setPassword}
              label="Senha"
              type="password"
            />
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
