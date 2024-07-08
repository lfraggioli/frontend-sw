import Image from "next/image";
import React from "react";
import { fetchFilms } from "../lib/films";

async function FilmsRow() {
  const films = await fetchFilms();
  return (
    <div className="grid gap-4 sm:grid-cols-3 md:grid-cols-6 mb-5">
      {films.map((film: any) => (
        <a
          className="hover:scale-110 transition-transform duration-200 ease-linear cursor-pointer"
          href={`/films/${film.episode_id}`}
        >
          <Image
            src={film.imageUrl}
            alt={film.title}
            width={200}
            height={200}
          />
        </a>
      ))}
    </div>
  );
}

export default FilmsRow;
