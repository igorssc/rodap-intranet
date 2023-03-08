import Image from "next/image";
import { Box } from "./Box";

export const NotificationItem = () => {
  return (
    <>
      <Box className="flex items-center gap-4 flex-1">
        <Image
          src="https://avatars.githubusercontent.com/u/26682297?v=4"
          width={100}
          height={100}
          alt="profile photo"
          className="rounded-full w-14 h-14 justify-self-center"
        />
        <div className="flex flex-col gap-2">
          <span className="overflow-hidden text-ellipsis whitespace-nowrap max-w-full block">
            Hoje é aniversário de <span className="font-bold">Igor Santos</span>
            , dê os parabéns a ele!
          </span>
          <small>
            {new Date().toLocaleDateString("pt-BR", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </small>
        </div>
      </Box>
    </>
  );
};
