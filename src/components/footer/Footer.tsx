"use client";

import Link from "next/link";
import { useState } from "react";
export default function Footer() {
  const [sendEmail, setSendEmail] = useState("");

  return (
    <footer className="flex justify-evenly flex-col items-center px-28 sm:px-3 sm:py-5 sm:flex-wrap py-20 bg-primary text-white">
      <div className="w-full h-96 bg-heading justify-center items-center sm:h-full sm:grid-cols-1 rounded-lg grid grid-cols-3 px-10 sm:px-5 sm:py-10 gap-10">
        <div
          className="flex flex-col justify-evenly items-start h-full sm:flex-wrap"
        >
          <h1 className="text-3xl font-bold tracking-wider uppercase">
            Endereço da barbearia
          </h1>
          <p className="text-xl tracking-wider text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatibus, quibusdam, quia, quod voluptatum quos dolorum
            voluptatem quas quae quibusdam, quia, quod voluptatum quos dolorum
            voluptatem quas quae
          </p>
        </div>
        <div className="flex flex-col justify-evenly items-start h-full">
          {" "}
          <h1 className="text-3xl font-bold tracking-wider uppercase">
            Social media
          </h1>
          <ul className="flex flex-col items-start justify-start gap-3 text-xl text-base">
            <li>
              <Link href="https://www.facebook.com/">facebook</Link>
            </li>
            <li>
              <Link href="https://www.instagram.com/">instagram</Link>
            </li>
            <li>
              <Link href="https://www.twitter.com/">twitter</Link>
            </li>
            <li>
              <Link href="https://www.youtube.com/">youtube</Link>
            </li>
            <li>
              <Link href="https://www.linkedin.com/">linkedin</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col justify-evenly items-start h-full">
          <h1 className="text-3xl font-bold tracking-wider uppercase">
            Novidades
          </h1>
          <p className="text-2xl tracking-wider text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          </p>
          <form className="flex flex-row">
            <input
              type="text"
              placeholder="Digite seu email"
              className="w-72 sm:w-full px-5 py-2 text-heading rounded-l-full outline-none"
              onChange={(e) => setSendEmail(e.target.value)}
            />
            <button className="bg-default hover:bg-golden tracking-widest rounded-r-full font-bold uppercase transition-all delay-75 ease-in-out text-white px-5 py-4">
              Enviar
            </button>
          </form>
        </div>
      </div>
      <span className="text-base text-sm font-bold tracking-widest uppercase">
        &copy; 2021 Barber Shop
      </span>
    </footer>
  );
}
