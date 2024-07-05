import Image from "next/image";
import React from "react";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full px-4 z-50 h-14 shadow-sm backdrop-blur-sm  border-b-2 border-slate-200/20 flex items-center">
      <div className="flex items-center gap-x-4">
        <div className="ml-2 cursor-pointer">
          <a href="/" rel="noopener noreferrer">
            <Image
              className="relative "
              src="/Star-Wars-transparent-logo.png"
              alt="Next.js Logo"
              width={52}
              height={52}
              priority
            />{" "}
          </a>
        </div>

        <button className="text-white font-semibold hover:text-slate-300 hover:scale-110 transition-transform duration-300 ease-linear ">
          Docs
        </button>
        <button className="text-white font-semibold hover:text-slate-300 hover:scale-110 transition-transform duration-300 ease-linear ">
          About
        </button>
      </div>
    </nav>
  );
};
