"use client";

import Link from "next/link";
import { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
import {
  MdOutlineEmail,
  MdPhoneAndroid,
  MdLocationSearching,
} from "react-icons/md";

export default function Footer() {
  const [sendEmail, setSendEmail] = useState("");

  return (
    <footer className="flex justify-evenly flex-col items-center px-28 sm:px-3 sm:py-5 py-20 bg-primary text-white">
      <div className="w-full bg-heading/30 py-20 justify-center flex-wrap items-center md:grid-cols-2 sm:h-full sm:grid-cols-1 rounded-lg grid grid-cols-3 px-10 sm:px-5 sm:py-10 gap-5">
        <div className="flex flex-col items-start justify-center gap-5 h-full sm:flex-wrap">
          <h1 className="text-3xl sm:text-2xl font-bold tracking-wider uppercase">
            Endereço da barbearia
          </h1>
          <div className="flex flex-row items-center justify-start gap-3">
            <MdLocationSearching className="text-5xl" />
            <p className="text-lg sm:text-base tracking-wider text-basecolor">
              Rua Dr. Cuverlo Cavalcante, 4433 - Centro Itaguaí - RJ
            </p>
          </div>
          <div className="flex flex-row items-center  justify-start gap-3">
            <MdPhoneAndroid className="text-3xl" />
            <p className="text-lg sm:text-base tracking-wider text-basecolor">
              (21) 97315-2800
            </p>
          </div>
          <div className="flex flex-row items-center justify-start gap-3">
            <MdOutlineEmail className="text-3xl" />
            <p className="text-lg sm:text-base tracking-wider text-basecolor">
              jeffersonduarte@id.uff.br
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-evenly items-start h-full gap-5">
          {" "}
          <h1 className="text-3xl sm:text-2xl font-bold tracking-wider uppercase">
            Social media
          </h1>
          <ul className="flex flex-col items-start justify-start gap-3 text-xl tracking-wider text-basecolor sm:text-base">
            <li className="flex flex-row gap-3 items-center capitalize hover:text-default">
              <FaFacebookF />
              <Link href="https://www.facebook.com/">facebook</Link>
            </li>
            <li className="flex flex-row gap-3 items-center capitalize hover:text-default">
              <FaInstagram />
              <Link href="https://www.instagram.com/">instagram</Link>
            </li>
            <li className="flex flex-row gap-3 items-center capitalize hover:text-default">
              <FaTwitter />
              <Link href="https://www.twitter.com/">twitter</Link>
            </li>
            <li className="flex flex-row gap-3 items-center capitalize hover:text-default">
              <FaYoutube />
              <Link href="https://www.youtube.com/">youtube</Link>
            </li>
            <li className="flex flex-row gap-3 items-center capitalize hover:text-default">
              <FaLinkedinIn />
              <Link href="https://www.linkedin.com/">linkedin</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col justify-evenly items-start h-full gap-5">
          <h1 className="text-3xl sm:text-2xl font-bold tracking-wider uppercase">
            Novidades
          </h1>
          <p className="text-lg tracking-wider sm:text-lg text-basecolor">
            Fique por dentro das nossas novidades, cadastre seu e-mail para
            receber promoções em seu e-mail.
          </p>
          <form className="flex flex-row w-full">
            <input
              type="text"
              placeholder="Digite seu email"
              className="w-72 md:w-full sm:w-full px-5 py-2 text-heading rounded-l-full outline-none"
              onChange={(e) => setSendEmail(e.target.value)}
            />
            <button className="bg-default hover:bg-golden tracking-widest rounded-r-full font-bold uppercase transition-all delay-75 ease-in-out text-white px-5 py-4">
              Enviar
            </button>
          </form>
        </div>
      </div>
      <span className="text-basecolor text-sm font-bold tracking-widest uppercase">
        &copy; {new Date().getFullYear()} - Todos os direitos reservados
      </span>
    </footer>
  );
}
