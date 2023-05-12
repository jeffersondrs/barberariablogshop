"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    console.log(name, email, subject, message);
  }, [name, email, subject, message]);

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
          <span className="text-4xl uppercase">Contate nos</span>
          <div className="flex flex-row items-center justify-between gap-1">
            <span className="text-default text-lg uppercase">Home</span>/
            <span className="text-lg uppercase">Contate nos</span>
          </div>
        </div>
      </div>
      <section className="py-10 flex px-20 sm:px-3 flex-row sm:flex-col-reverse items-start justify-start w-full">
        <div className="w-1/3 sm:w-full flex flex-col py-5">
          <div className="h-72 bg-base  rounded-t-lg"></div>
          <div className="h-32 bg-base/30  rounded-b-md"></div>
        </div>
        <div className="flex flex-col justify-center items-start gap-5 py-3 w-full px-10 sm:px-3">
          <form className="flex flex-col justify-center items-start gap-5">
            <header className="gap-5 flex flex-col">
              <h1 className="text-4xl tracking-wide font-light uppercase">
                Formulário de contato{" "}
              </h1>
              <p className="tracking-wider uppercase text-sm">
                Por favor, preencha o formulário abaixo. Faremos tudo o que
                pudermos para responder a você o mais rápido possível.{" "}
              </p>
            </header>
            <div className="flex w-full flex-row sm:flex-col gap-10">
              <label
                htmlFor="name"
                className="flex flex-col w-full font-semibold gap-5 uppercase"
              >
                Nome
                <input
                  type="text"
                  className="h-14 px-5 border border-gray-300 rounded-xl focus:outline-none focus:border-default font-light"
                  onChange={(e) => setName(e.target.value)}
                />
              </label>
              <label
                htmlFor="email"
                className="flex flex-col w-full font-semibold gap-5 uppercase"
              >
                Telefone
                <input
                  type="Telefone"
                  className="h-14 px-5 border border-gray-300 rounded-xl focus:outline-none focus:border-default font-light"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
            </div>
            <div className="flex w-full flex-row gap-10 sm:flex-col">
              <label
                htmlFor="subject"
                className="flex flex-col w-full font-semibold gap-5 uppercase"
              >
                E-mail
                <input
                  type="email"
                  className="sm:w-full h-14 px-5 border border-gray-300 rounded-xl focus:outline-none focus:border-default font-light"
                  onChange={(e) => setSubject(e.target.value)}
                />
              </label>

              <label
                htmlFor="subject"
                className="flex flex-col w-full font-semibold gap-5 uppercase"
              >
                Assunto
                <input
                  type="text"
                  className="sm:w-full h-14 px-5 border border-gray-300 rounded-xl focus:outline-none focus:border-default font-light"
                  onChange={(e) => setSubject(e.target.value)}
                />
              </label>
            </div>
            <label
              htmlFor="message"
              className="flex flex-col w-full font-semibold gap-5 uppercase"
            >
              Mensagem
              <textarea
                className="w-full h-40 p-5 border border-gray-300 rounded-xl focus:outline-none focus:border-default max-h-60 font-light"
                onChange={(e) => setMessage(e.target.value)}
              />
            </label>
            <button className="bg-default hover:bg-golden tracking-wider font-bold uppercase transition-all delay-75 ease-in-out text-white px-5 py-4 rounded-full">
              {" "}
              Enviar mensagem
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
