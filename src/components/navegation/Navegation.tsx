"use client";

import Link from "next/link";
import { CgMenu } from "react-icons/cg";
import { useState } from "react";
import { MdOutlineClose } from "react-icons/md";

export default function Navegation() {
  const [services, setServices] = useState(false);
  const [news, setNews] = useState(false);
  const [menu, setMenu] = useState(false);

  const handleHover = () => {
    setServices(!services);
    if (news) {
      setNews(!news);
    }
  };

  const handleHoverNews = () => {
    setNews(!news);
    if (services) {
      setServices(!services);
    }
  };

  const handleHoverMenu = () => {
    setMenu(!menu);
  };
  return (
    <nav
      onMouseLeave={handleHoverMenu}
      className="flex justify-evenly  items-center py-4 border-b h-28"
    >
      <span className=" w-full font-bold text-2xl">Barbershop logo</span>
      <div className=" w-full flex flex-row tracking-widest font-extralight text-lg uppercase sm:hidden">
        <Link
          className="hover:bg-default sm:px-2 px-10 py-5 hover:text-white transition-all delay-100 ease-in-out "
          href="/"
        >
          <span className="text-grey-800">Home</span>
        </Link>
        <div className="relative z-50">
          <Link
            href="/service-list"
            onClick={handleHover}
            onMouseEnter={handleHover}
          >
            <span className="hover:bg-default px-10 sm:px-2 py-5 hover:text-white transition-all delay-100 ease-in-out relative flex flex-row items-center">
              Services
              <svg
                className="fill-current h-4 w-4 ml-2"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6 6l4 4 4-4H6z" />
              </svg>
            </span>
          </Link>

          {services && (
            <div
              onMouseLeave={handleHover}
              className="absolute bg-white text-gray-700 py-0 mt-1 shadow-lg"
            >
              <Link href="/service-list/cabelo">
                <span className="block px-4 py-2 hover:bg-default hover:text-white">
                  Cabelo
                </span>
              </Link>
              <Link href="/service-list/barba">
                <span className="block px-4 py-2 hover:bg-default hover:text-white">
                  Barba
                </span>
              </Link>

              <div className="border-t border-gray-200"></div>
              <Link href="/service-list/pigmentacao">
                <span className="block px-4 py-2 hover:bg-default hover:text-white">
                  Pigmentação
                </span>
              </Link>
              <Link href="/service-list/bigode">
                <span className="block px-4 py-2 hover:bg-default hover:text-white">
                  Bigode
                </span>
              </Link>
            </div>
          )}
        </div>

        <div className="relative z-50">
          <Link
            href="/news"
            onClick={handleHoverNews}
            onMouseEnter={handleHoverNews}
          >
            <span className="hover:bg-default px-10 sm:px-2 py-5 hover:text-white transition-all delay-100 ease-in-out relative flex flex-row items-center">
              Noticias
              <svg
                className="fill-current h-4 w-4 ml-2"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6 6l4 4 4-4H6z" />
              </svg>
            </span>
          </Link>

          {news && (
            <div
              onMouseLeave={handleHoverNews}
              className="absolute bg-white text-gray-700 py-0 mt-1 shadow-lg"
            >
              <Link href="/news/blog">
                <span className="block px-4 py-2 hover:bg-default hover:text-white">
                  Blog
                </span>
              </Link>
              <Link href="/news/novidades">
                <span className="block px-4 py-2 hover:bg-default hover:text-white">
                  Novidades
                </span>
              </Link>
            </div>
          )}
        </div>
        <Link
          className="hover:bg-default px-10 py-5 sm:px-2 hover:text-white transition-all delay-100 ease-in-out "
          href="/contact"
        >
          <span className="text-grey-800">Contact</span>
        </Link>
      </div>
      <div className="w-full sm:flex flex-row tracking-widest font-extralight text-lg uppercase justify-end px-5 hidden">
        <div className="relative">
          <div className="transition-all delay-75 ease-in-out">
            {menu ? (
              <MdOutlineClose className="text-3xl" onClick={handleHoverMenu} />
            ) : (
              <CgMenu className="text-3xl" onClick={handleHoverMenu} />
            )}
          </div>
          {menu && (
            <div
              onMouseLeave={handleHoverMenu}
              className="absolute -translate-x-32 z-50 bg-white text-gray-700 py-0 mt-1 shadow-lg"
            >
              <Link href="/">
                <span className="block px-4 py-2 hover:bg-default hover:text-white">
                  Home
                </span>
              </Link>

              <div className="relative z-50">
                <span
                  onClick={handleHover}
                  onMouseLeave={() => {
                    setServices(false);
                    handleHoverMenu();
                  }}
                  className="hover:bg-default px-10 sm:px-2 py-5 hover:text-white transition-all delay-100 ease-in-out relative flex flex-row items-center"
                >
                  Services
                  <Link href="/service-list">
                    <svg
                      className="fill-current h-4 w-4 ml-2"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M6 6l4 4 4-4H6z" />
                    </svg>
                  </Link>
                </span>

                {services && (
                  <div
                    onMouseLeave={() => {
                      setServices(false);
                      handleHoverMenu();
                    }}
                    className="absolute translate-x-3 bg-white z-50 text-gray-700 py-0 mt-1 shadow-lg"
                  >
                    <Link href="/service-list/cabelo">
                      <span className="block px-4 py-2 hover:bg-default hover:text-white">
                        Cabelo
                      </span>
                    </Link>
                    <Link href="/service-list/barba">
                      <span className="block px-4 py-2 hover:bg-default hover:text-white">
                        Barba
                      </span>
                    </Link>

                    <div className="border-t border-gray-200"></div>
                    <Link href="/service-list/pigmentacao">
                      <span className="block px-4 py-2 hover:bg-default hover:text-white">
                        Pigmentação
                      </span>
                    </Link>
                    <Link href="/service-list/bigode">
                      <span className="block px-4 py-2 hover:bg-default hover:text-white">
                        Bigode
                      </span>
                    </Link>
                  </div>
                )}
              </div>

              <div className="relative z-40">
                <span
                  onClick={handleHoverNews}
                  onMouseLeave={() => {
                    setNews(false);
                    handleHoverMenu();
                  }}
                  className="hover:bg-default px-10 sm:px-2 py-5 hover:text-white transition-all delay-100 ease-in-out relative flex flex-row items-center"
                >
                  Noticias
                  <Link href="/news">
                    <svg
                      className="fill-current h-4 w-4 ml-2"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M6 6l4 4 4-4H6z" />
                    </svg>
                  </Link>
                </span>

                {news && (
                  <div
                    onMouseLeave={() => {
                      setNews(false);
                      handleHoverMenu();
                    }}
                    className="absolute translate-x-3 bg-white text-gray-700 py-0 mt-1 shadow-lg"
                  >
                    <Link href="/news/blog">
                      <span className="block px-4 py-2 hover:bg-default hover:text-white">
                        Blog
                      </span>
                    </Link>
                    <Link href="/news/novidades">
                      <span className="block px-4 py-2 hover:bg-default hover:text-white">
                        Novidades
                      </span>
                    </Link>
                  </div>
                )}
              </div>

              <Link href="/contact">
                <span className="block px-4 py-2 hover:bg-default hover:text-white">
                  Contato
                </span>
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
