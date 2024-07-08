import Image from "next/image";
import React from "react";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full px-4 z-50 h-14 shadow-sm backdrop-blur-sm  border-b-2 border-slate-200/20 flex items-center">
      <div className="flex items-center gap-x-4">
        <a className="ml-2" href="/">
          <Image
            className="relative "
            src="/Star-Wars-transparent-logo.png"
            alt="star wars Logo"
            width={52}
            height={52}
            priority
          />{" "}
        </a>

        <a
          className="text-slate-300 cursor-pointer font-semibold hover:text-slate-200  transition-transform duration-300 ease-linear "
          href="/films"
        >
          Films
        </a>
        <a
          href="/people"
          className="text-slate-300 cursor-pointer font-semibold hover:text-slate-200  transition-transform duration-300 ease-linear "
        >
          People
        </a>
        <a
          href="/starships"
          className="text-slate-300 cursor-pointer font-semibold hover:text-slate-200  transition-transform duration-300 ease-linear "
        >
          Starships
        </a>
        <a
          href="/planets"
          className="text-slate-300 cursor-pointer font-semibold hover:text-slate-200  transition-transform duration-300 ease-linear "
        >
          Planets
        </a>
      </div>
    </nav>
  );
};
