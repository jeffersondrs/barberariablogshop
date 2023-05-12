import Image from "next/image";

export default function News() {
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
          <span className="text-4xl uppercase">Novidades</span>
          <div className="flex flex-row items-center justify-between gap-1">
            <span className="text-default text-lg uppercase">Home</span>/
            <span className="text-lg uppercase">Novidades</span>
          </div>
        </div>
      </div>
      <section className="py-10 flex px-20 sm:px-3 flex-col  items-center justify-start w-full gap-10">
        <div className="bg-yellow-900/10 gap-10 flex flex-row py-10 px-20 rounded-xl">
          <Image
            src="/images/post-img.jpg"
            alt="Picture of the author"
            width={500}
            height={500}
            className="rounded-lg"
          />
          <div className="flex flex-col gap-5 h-full justify-evenly items-start sm:h-full sm:flex-wrap py-10 px-5">
            <h1 className="text-2xl tracking-wide font-light uppercase">
              Estilos novos e tradicionais
            </h1>
            <p className="tracking-wider uppercase text-sm">
              A melhor experiência
            </p>
            <p className="tracking-wider text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            </p>
            <button className="bg-default hover:bg-golden tracking-wider font-bold uppercase transition-all delay-75 ease-in-out text-white px-5 py-4 rounded-full">
              Leia mais...
            </button>
          </div>
        </div>
        <div className="bg-yellow-900/10 gap-10 flex flex-row py-10 px-20 rounded-xl">
          <Image
            src="/images/post-img-1.jpg"
            alt="Picture of the author"
            width={500}
            height={500}
            className="rounded-lg"
          />
          <div className="flex flex-col gap-5 h-full justify-evenly items-start sm:h-full sm:flex-wrap py-10 px-5">
            <h1 className="text-2xl tracking-wide font-light uppercase">
              Estilos novos e tradicionais
            </h1>
            <p className="tracking-wider uppercase text-sm">
              A melhor experiência
            </p>
            <p className="tracking-wider text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            </p>
            <button className="bg-default hover:bg-golden tracking-wider font-bold uppercase transition-all delay-75 ease-in-out text-white px-5 py-4 rounded-full">
              Leia mais...
            </button>
          </div>
        </div>
        <div className="bg-yellow-900/10 gap-10 flex flex-row py-10 px-20 rounded-xl">
          <Image
            src="/images/post-img-2.jpg"
            alt="Picture of the author"
            width={500}
            height={500}
            className="rounded-lg"
          />
          <div className="flex flex-col gap-5 h-full justify-evenly items-start sm:h-full sm:flex-wrap py-10 px-5">
            <h1 className="text-2xl tracking-wide font-light uppercase">
              Estilos novos e tradicionais
            </h1>
            <p className="tracking-wider uppercase text-sm">
              A melhor experiência
            </p>
            <p className="tracking-wider text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            </p>
            <button className="bg-default hover:bg-golden tracking-wider font-bold uppercase transition-all delay-75 ease-in-out text-white px-5 py-4 rounded-full">
              Leia mais...
            </button>
          </div>
        </div>
        <div className="bg-yellow-900/10 gap-10 flex flex-row py-10 px-20 rounded-xl">
          <Image
            src="/images/post-img-1.jpg"
            alt="Picture of the author"
            width={500}
            height={500}
            className="rounded-lg"
          />
          <div className="flex flex-col gap-5 h-full justify-evenly items-start sm:h-full sm:flex-wrap py-10 px-5">
            <h1 className="text-2xl tracking-wide font-light uppercase">
              Estilos novos e tradicionais
            </h1>
            <p className="tracking-wider uppercase text-sm">
              A melhor experiência
            </p>
            <p className="tracking-wider text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            </p>
            <button className="bg-default hover:bg-golden tracking-wider font-bold uppercase transition-all delay-75 ease-in-out text-white px-5 py-4 rounded-full">
              Leia mais...
            </button>
          </div>
        </div>
        <div className="bg-yellow-900/10 gap-10 flex flex-row py-10 px-20 rounded-xl">
          <Image
            src="/images/post-img.jpg"
            alt="Picture of the author"
            width={500}
            height={500}
            className="rounded-lg"
          />
          <div className="flex flex-col gap-5 h-full justify-evenly items-start sm:h-full sm:flex-wrap py-10 px-5">
            <h1 className="text-2xl tracking-wide font-light uppercase">
              Estilos novos e tradicionais
            </h1>
            <p className="tracking-wider uppercase text-sm">
              A melhor experiência
            </p>
            <p className="tracking-wider text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            </p>
            <button className="bg-default hover:bg-golden tracking-wider font-bold uppercase transition-all delay-75 ease-in-out text-white px-5 py-4 rounded-full">
              Leia mais...
            </button>
          </div>
        </div>
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
