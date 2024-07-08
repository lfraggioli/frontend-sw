import React, { useEffect, useState } from "react";
import Film from "@/app/lib/types/Film";
import Image from "next/image";
import { selectStarship } from "@/app/lib/starships";
import { selectPerson } from "@/app/lib/people";
import { selectPlanet } from "@/app/lib/planets";

interface FilmDetailProps {
  id: string;
}

const FilmDetail: React.FC<FilmDetailProps> = ({ id }) => {
  const [film, setFilm] = useState<Film | null>(null);
  const [starshipUrl, setStarshipUrl] = useState<string>("");

  useEffect(() => {
    const fetchFilm = async () => {
      if (id) {
        try {
          const response = await fetch(`http://localhost:3001/films/${id}`);
          const data = await response.json();
          setFilm(data[0]);
        } catch (error) {
          console.error("Error fetching film details:", error);
        }
      }
    };

    fetchFilm();
  }, [id]);

  if (!film) {
    return (
      <div className="mt-16">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className="mt-16">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold text-slate-200">{film.title}</h1>
        <p>Episode : {film.episode_id}</p>
        <p>Opening Crawl: {film.opening_crawl}</p>
        <p>Director: {film.director}</p>
        <p>Producer: {film.producer}</p>
        <div className="flex flex-col">
          <p>Characters: </p>
          {film.characters.map((character, index) => (
            <a
              className="cursor-pointer text-slate-300 hover:underline hover:text-slate-200 "
              onClick={async () => {
                const url = await selectPerson(character);
                if (url) window.open(url, "_blank");
              }}
            >
              {character}
            </a>
          ))}
        </div>
        <div>
          <p>Planets:</p>
          {film.planets.map((planet, index) => (
            <a
              className="cursor-pointer text-slate-300 hover:underline hover:text-slate-200 "
              key={index}
              onClick={async () => {
                const url = await selectPlanet(planet);
                if (url) window.open(url, "_blank");
              }}
            >
              {planet}
            </a>
          ))}
        </div>
        <div className="flex flex-col">
          <p>Starships:</p>
          {film.starships.map((starship, index) => (
            <a
              className="cursor-pointer text-slate-300 hover:underline hover:text-slate-200 "
              key={index}
              onClick={async () => {
                const url = await selectStarship(starship);
                if (url) window.open(url, "_blank");
              }}
            >
              {starship}
            </a>
          ))}
        </div>
        <div>
          <p>Vehicles:</p>
          {film.vehicles.map((vehicle, index) => (
            <p key={index}>{vehicle}</p>
          ))}
        </div>
        <div>
          <p>Species:</p>
          {film.species.map((specie, index) => (
            <p key={index}>{specie}</p>
          ))}
        </div>

        <Image src={film.imageUrl} alt={film.title} width={300} height={300} />
      </div>
    </div>
  );
};

export default FilmDetail;
