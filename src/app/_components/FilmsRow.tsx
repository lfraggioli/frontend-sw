import Image from "next/image";
import React from "react";
async function fetchFilms() {
  const res = await fetch("http://localhost:3001/films");

  return res.json();
}

async function FilmsRow() {
  const films = await fetchFilms();
  return (
    <div className="grid gap-4  sm:grid-cols-3 md:grid-cols-6">
      {films.map((film: any) => (
        <div className="hover:scale-110 transition-transform duration-200 ease-linear cursor-pointer">
          <Image
            src={film.imageUrl}
            alt={film.title}
            width={200}
            height={200}
          />
        </div>
      ))}
    </div>
  );
}

export default FilmsRow;
