import React from "react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="w-full min-h-screen">
        <Image
          src="/images/hero-img.jpg"
          alt="Picture of the author"
          width={1500}
          height={1000}
          className="object-cover object-center bg-center w-full h-screen"
        />
        <div className="flex flex-col px-20 sm:px-2 gap-5 justify-center items-start absolute top-28 text-lg text-white font-bold bg-slate-500/10 w-full h-full">
          <span className="text-6xl md:-text-2xl sm:text-4xl uppercase">Barbearia Shop</span>
          <p className="text-2xl sm:text-xl font-bold uppercase">
            fique por dentro das novidades!
          </p>
          <button className="bg-default hover:bg-golden w-80 md:w-full sm:w-full tracking-wider font-bold uppercase transition-all delay-75 ease-in-out text-white px-5 py-4 rounded-full">
            {" "}
            Saiba mais
          </button>
        </div>
      </div>
      <section className="flex flex-col items-center justify-center gap-16 py-20">
        <div className="flex flex-col justify-center items-center gap-3">
          <h1 className="text-4xl tracking-wide text-center font-light">
            SERVIÇO DE SALÃO E BARBEARIA
          </h1>
          <p className="tracking-wider text-basecolor">
            NÓS AJUDAMOS VOCÊ A FICAR BEM
          </p>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-1 gap-10 w-full justify-center items-center">
          <div className="w-80 md:w-full sm:w-full flex flex-col gap-5 p-3">
            <Image
              src="/images/service-icon-1.png"
              alt="Picture of the author"
              width={200}
              height={200}
              className="w-20 h-20"
            />
            <h1 className="text-2xl tracking-wider uppercase">
              Corte Tradicional
            </h1>
            <p className="tracking-wide text-lg">
              Corte com tesoura, máquina e acabamento com navalha.
            </p>
            <span className="text-default text-2xl">R$ 25</span>
          </div> 
          <div className="w-80 md:w-full sm:w-full flex flex-col gap-5 p-3">
            <Image
              src="/images/service-icon-2.png"
              alt="Picture of the author"
              width={200}
              height={200}
              className="w-20 h-20"
            />
            <h1 className="text-2xl tracking-wider uppercase">
              Cabelo e bigode
            </h1>
            <p className="tracking-wide text-lg">
              Faça seu bigode e corte seu cabelo em um unico pacote.
            </p>
            <span className="text-default text-2xl">R$ 45</span>
          </div>
          <div className="w-80 md:w-full sm:w-full flex flex-col gap-5 p-3">
            <Image
              src="/images/service-icon-3.png"
              alt="Picture of the author"
              width={200}
              height={200}
              className="w-20 h-20"
            />
            <h1 className="text-2xl tracking-wider uppercase">
              Barba e cabelo
            </h1>
            <p className="tracking-wide text-lg">
              Deixe sua barba e cabelo em dia com um unico pacote.
            </p>
            <span className="text-default text-2xl">R$ 45</span>
          </div>
        </div>
        <button className="bg-default hover:bg-golden tracking-wider font-bold uppercase transition-all delay-75 ease-in-out text-white px-10 py-4 rounded-full">
          Ver todos os serviços
        </button>
      </section>
      <section className="flex flex-row items-center justify-center sm:flex-wrap sm:px-3 w-full gap-16 py-20 bg-yellow-900/10 px-20">
        <Image
          src="/images/about-img.jpg"
          alt="Picture of the author"
          width={400}
          height={400}
          className="w-[35rem] sm:w-full h-full"
        />
        <div className="flex flex-col gap-5 bg-white h-[35rem] justify-evenly items-center sm:h-full sm:flex-wrap py-10 px-5 w-[35rem] sm:w-full">
          <h1 className="text-2xl tracking-wide font-light uppercase">
            Confira dicas em nosso blog
          </h1>
          <p className="tracking-wider uppercase text-sm">
            A melhor experiência
          </p>
          <p className="tracking-wider text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          </p>
          <button className="bg-default hover:bg-golden w-80 md:w-full sm:w-full tracking-wider font-bold uppercase transition-all delay-75 ease-in-out text-white px-5 py-4 rounded-full">
            Visite nosso blog
          </button>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center gap-16 py-20">
        <header className="flex flex-col justify-center items-center">
          <h1 className="text-4xl tracking-wide font-light uppercase">
            Testemunhos
          </h1>
          <p className="tracking-wider uppercase text-sm">
            O que nossos clientes dizem
          </p>
        </header>
        <div className="grid grid-cols-3 gap-10 w-full justify-center items-center sm:grid-cols-1">
          <div className="w-80 sm:w-full md:w-full flex flex-col gap-2 p-3">
            <p className="tracking-wide text-lg italic">
              &quot;Eu estava verde de raiva, quando encontrei a barbearia,
              transformaram meu cabelo. Hoje posso ficar verde de cabelo
              bonito.&quot;
            </p>
            <span className="text-primary text-2xl">Bruce Banner</span>
            <span className="text-default text-lg">54 anos</span>
          </div>
          <div className="w-80 sm:w-full md:w-full flex flex-col gap-2 p-3">
            <p className="tracking-wide text-lg  italic">
              &quot;Quando estou no Brasil, vou sempre nessa barbearia. Irei
              abrir uma filial em Birmingham em nome dos Peaky Blinders.&quot;
            </p>
            <span className="text-primary text-2xl">Thomas Shelby</span>
            <span className="text-default text-lg">23 anos</span>
          </div>
          <div className="w-80 sm:w-full md:w-full flex flex-col gap-2 p-3">
            <p className="tracking-wide text-lg  italic">
              &quot;Mordor precisa de uma barbearia como essa, nossos Orcs estão
              precisando de um trato de qualidade.&quot;
            </p>
            <span className="text-primary text-2xl">Sauron</span>
            <span className="text-default text-lg">+1500 anos</span>
          </div>
        </div>
      </section>
      <div className="w-full sm:h-full">
        <div className="flex flex-col justify-center sm:h-full items-center">
          <Image
            src={"/images/cta-section-img.jpg"}
            alt="Picture of the author"
            width={1920}
            height={1080}
            className="w-full h-full object-cover object-center bg-center filter brightness-50"
          />
          <div className="absolute left-0 w-full h-96 sm:h-full justify-center items-start px-20 sm:px-3 flex flex-col gap-5">
            <h1 className="text-4xl sm:text-xl tracking-wide font-light uppercase text-white">
              Agende seu horário
            </h1>
            <p className="tracking-wider uppercase text-white text-lg">
              A melhor experiência em barbearia.
            </p>
            <button className="bg-default hover:bg-golden w-80 sm:w-full tracking-wider font-bold uppercase transition-all delay-75 ease-in-out text-white px-5 py-4 rounded-full">
              Agendar
            </button>
          </div>
        </div>
      </div>
      <section className="flex flex-col items-center justify-center w-full gap-16 py-20 sm:py-5 px-20 sm:px-0">
        <header className="flex flex-col justify-center items-center">
          <h1 className="text-4xl sm:text-xl tracking-wide font-light uppercase">
            ÚLTIMAS NOTÍCIAS E ARTIGO
          </h1>
        </header>
        <div className="bg-yellow-900/10 gap-10 flex flex-row sm:flex-wrap py-10 px-20 sm:px-5 rounded-xl">
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
      </section>
    </main>
  );
}
