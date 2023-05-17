"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Posts from "@/components/postblog/Posts";

export default function News() {
  const pathname = usePathname();

  return (
    <main className="flex flex-col items-center justify-between">
      <div className="w-full">
        <Image
          src="/images/hero-img.jpg"
          alt="Picture of the author"
          width={1500}
          height={1000}
          className="object-cover object-center bg-center w-full h-96 filter brightness-50"
        />
        <div className="flex flex-col px-20 gap-5 justify-center items-center absolute top-28 text-lg text-white w-full h-96">
          <span className="text-4xl uppercase">{pathname.split("/news/")}</span>
          <div className="flex flex-row items-center justify-between gap-1">
            <span className="text-default text-lg uppercase">Home</span>/
            <span className="text-lg uppercase">
              <Link href={pathname.toString()}>{pathname.split("/news/")}</Link>
            </span>
          </div>
        </div>
      </div>
      <section className="py-10 sm:py-5 flex px-20 sm:px-3 flex-col items-center justify-start w-full gap-10 sm:gap-5">
        <Posts
          image={"/images/post-img-1.jpg"}
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat et
          deleniti inventore magnam sunt consectetur dignissimos delectus quod rem
          commodi earum veritatis amet at laborum, ab doloremque sequi nihil
          blanditiis? Inventore dolor sunt facilis qui tempore nemo similique
          perferendis aliquid sapiente et, commodi ad dolore rem, ducimus debitis
          assumenda earum incidunt expedita animi fugiat quidem, nobis totam amet.
          Ea, tenetur! Aliquam iste nihil, eaque a dolore optio maxime, culpa
          omnis non voluptatibus ratione aliquid dolor repudiandae. Deleniti,
          doloribus harum fuga vitae reiciendis, ex et corporis aut fugiat
          voluptas odit dolore?"
          subtitle="Loren ipsum"
          title="Massagem capilar já ouviu falar?"
        />
        <Posts
          image={"/images/post-img-2.jpg"}
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat et
          deleniti inventore magnam sunt consectetur dignissimos delectus quod rem
          commodi earum veritatis amet at laborum, ab doloremque sequi nihil
          blanditiis? Inventore dolor sunt facilis qui tempore nemo similique
          perferendis aliquid sapiente et, commodi ad dolore rem, ducimus debitis
          assumenda earum incidunt expedita animi fugiat quidem, nobis totam amet.
          Ea, tenetur! Aliquam iste nihil, eaque a dolore optio maxime, culpa
          omnis non voluptatibus ratione aliquid dolor repudiandae. Deleniti,
          doloribus harum fuga vitae reiciendis, ex et corporis aut fugiat
          voluptas odit dolore?"
          subtitle="Loren ipsum"
          title="Novidades no mercado"
        />
        <Posts
          image={"/images/post-img.jpg"}
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat et 
          deleniti inventore magnam sunt consectetur dignissimos delectus quod rem
          commodi earum veritatis amet at laborum, ab doloremque sequi nihil
          blanditiis? Inventore dolor sunt facilis qui tempore nemo similique
          perferendis aliquid sapiente et, commodi ad dolore rem, ducimus debitis
          assumenda earum incidunt expedita animi fugiat quidem, nobis totam amet.
          Ea, tenetur! Aliquam iste nihil, eaque a dolore optio maxime, culpa
          omnis non voluptatibus ratione aliquid dolor repudiandae. Deleniti,
          doloribus harum fuga vitae reiciendis, ex et corporis aut fugiat
          voluptas odit dolore?"
          subtitle="Loren ipsum"
          title="Como cuidar do cabelo em casa?"
        />

        <div className="flex justify-center space-x-1 dark:text-gray-100">
          <button
            title="previous"
            type="button"
            className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md dark:bg-golden dark:border-default"
          >
            <svg
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4"
            >
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          <button
            type="button"
            title="Page 1"
            className="inline-flex items-center justify-center w-8 h-8 text-sm font-semibold border rounded shadow-md dark:bg-golden dark:border-default"
          >
            1
          </button>
          <button
            type="button"
            className="inline-flex items-center justify-center w-8 h-8 text-sm border rounded shadow-md dark:bg-golden dark:border-default"
            title="Page 2"
          >
            2
          </button>
          <button
            type="button"
            className="inline-flex items-center justify-center w-8 h-8 text-sm border rounded shadow-md dark:bg-golden dark:border-default"
            title="Page 3"
          >
            3
          </button>
          <button
            type="button"
            className="inline-flex items-center justify-center w-8 h-8 text-sm border rounded shadow-md dark:bg-golden dark:border-default"
            title="Page 4"
          >
            4
          </button>
          <button
            title="next"
            type="button"
            className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md dark:bg-golden dark:border-default"
          >
            <svg
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4"
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
      </section>
    </main>
  );
}
