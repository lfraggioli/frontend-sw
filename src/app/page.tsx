import Image from "next/image";
import { Navbar } from "./_components/Navbar";
import LandingCards from "./_components/LandingCards";
import FilmsRow from "./_components/FilmsRow";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <FilmsRow />
      <LandingCards />
    </main>
  );
}
