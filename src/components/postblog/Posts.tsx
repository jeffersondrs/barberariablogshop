"use client";

import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";

interface Props {
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

export default function Posts({ title, subtitle, description, image }: Props) {
  const router = useRouter();
  const pathname = usePathname();

  const handlePathname = () => {
    router.push(pathname.toString() + "/" + title);
  };

  return (
    <div className="bg-yellow-900/10 gap-10 flex flex-row md:flex-col sm:flex-col md:px-2 sm:px-2 md:gap-5 sm:gap-5 md:py-5 sm:py-5 py-10 px-20 rounded-xl">
      <Image
        src={image}
        alt="Picture of the author"
        width={500}
        height={500}
        className="rounded-lg"
      />
      <div className="flex flex-col gap-5 h-full justify-evenly items-end sm:h-full sm:flex-wrap py-10 sm:py-5 px-5">
        <h1 className="text-2xl tracking-wide font-light uppercase">{title}</h1>
        <p className="tracking-wider uppercase text-sm sm:w-full">{subtitle}</p>
        <p className="tracking-wider text-sm">
          {description.substring(0, 100)}...
        </p>

        <button
          onClick={handlePathname}
          className="bg-default hover:bg-golden tracking-wider font-bold uppercase transition-all delay-75 ease-in-out text-white px-5 py-4 rounded-full"
        >
          Leia mais...
        </button>
      </div>
    </div>
  );
}
