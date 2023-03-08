import Image from "next/image";
import { Box } from "./Box";

interface BlogCardProps {
  title: string;
  resume: string;
}

export const BlogCard = ({ title, resume }: BlogCardProps) => {
  return (
    <>
      <Box>
        <Image
          src="https://source.unsplash.com/random/1080x768"
          width={1080}
          height={768}
          alt="profile photo"
          className="object-cover rounded w-full h-64"
        />
        <h3 className="text-lg font-bold my-6 overflow-hidden text-ellipsis whitespace-nowrap max-w-full">
          {title}
        </h3>
        <p className="dark:text-white h-32 text-justify">
          {resume.length > 255 ? resume.substring(0, 255) + "..." : resume}
        </p>
      </Box>
    </>
  );
};
