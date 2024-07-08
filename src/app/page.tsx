import Image from "next/image";
import { Navbar } from "./_components/Navbar";
import LandingCards from "./_components/LandingCards";
import FilmsRow from "./_components/FilmsRow";

export default function Home() {
  return (
    <main className="flex h-max flex-col items-center justify-between px-24 py-16">
      <div className=" mb-4">
        <h1 className="lg:text-3xl mt-2 sm:text-xl font-extrabold text-yellow-500 text-center">
          A long time ago in a galaxy far, far away...
        </h1>
        <p>
          Welcome to the Star Wars restful API. Here you can find information
          about the films, planets, people, starships and more.
        </p>
      </div>
      <FilmsRow />
      <LandingCards />
    </main>
  );
}
