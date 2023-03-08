import clsx from "clsx";
import Image, { StaticImageData } from "next/image";
import { ChatCircleDots, PaperPlaneTilt } from "phosphor-react";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";
import { useEffect, useState } from "react";
import { Box } from "./Box";
import { Input } from "./Input";

type itemsProps = {
  thumbnail: string | StaticImageData;
  original: string | StaticImageData;
};

export const Post = () => {
  const [commentValue, setCommentValue] = useState("");

  const items: itemsProps[] = [
    {
      thumbnail: "https://source.unsplash.com/random/1080x768",
      original: "https://source.unsplash.com/random/1080x768",
    },
    {
      thumbnail: "https://source.unsplash.com/random/1080x768",
      original: "https://source.unsplash.com/random/1080x768",
    },
    {
      thumbnail: "https://source.unsplash.com/random/1080x768",
      original: "https://source.unsplash.com/random/1080x768",
    },
  ];

  useEffect(() => {
    let lightbox = new PhotoSwipeLightbox({
      gallery: "#" + "gallery",
      children: "a",
      pswpModule: () => import("photoswipe"),
    });
    lightbox.init();

    return () => {
      lightbox.destroy();
      // @ts-ignore:next-line
      lightbox = null;
    };
  }, []);

  return (
    <>
      <Box className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <Image
            src="https://avatars.githubusercontent.com/u/26682297?v=4"
            width={100}
            height={100}
            alt="profile photo"
            className="rounded-full w-10 h-10 justify-self-center"
          />
          <div>
            <span className="font-extrabold">Igor Santos</span> compartilhou uma
            publicação
            <br />
            <small>
              {new Date().toLocaleDateString("pt-BR", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </small>
          </div>
          <ChatCircleDots
            weight="light"
            className="ml-auto text-3xl text-primary dark:text-gray-400"
          />
        </div>
        <p>Pessoal, estou vendendo esses produtos</p>
        <div
          id="gallery"
          className={clsx("grid", items.length > 1 && "grid-cols-2 gap-4")}
        >
          {items.map((item, index) => (
            <a
              key={"gallery" + "-" + index}
              href={
                typeof item.original === "string"
                  ? item.original
                  : item.original.src
              }
              data-pswp-width={1080}
              data-pswp-height={768}
              target="_blank"
              rel="noreferrer"
              className={clsx(
                "flex relative rounded cursor-pointer m-auto w-full hover:scale-[1.02] transition-all",
                items.length === 3 && index === 1 && "row-span-2 h-full"
              )}
            >
              <Image
                src={
                  typeof item.thumbnail === "string"
                    ? item.thumbnail
                    : item.thumbnail.src
                }
                alt="gallery item"
                loading="lazy"
                width={1000}
                height={1000}
                className={clsx(
                  "object-cover",
                  items.length === 3 && index === 1 && "h-full w-auto"
                )}
              />
            </a>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <div className="w-full">
            <Input
              value={commentValue}
              setValue={setCommentValue}
              placeholder="Escreva sobre"
              className=""
            ></Input>
          </div>
          <PaperPlaneTilt
            weight="light"
            className="text-3xl ml-3 text-primary dark:text-gray-400"
          />
        </div>
      </Box>
    </>
  );
};
