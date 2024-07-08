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
    <div className="mt-16 text-slate-200 flex justify-center mb-16">
      <div className="flex flex-col gap-4 bg-zinc-600/30 rounded-xl border-slate-300/30 border p-8 md:w-2/3 sm:w-5/6">
        <div className="lg:grid lg:grid-cols-2 md:flex  md:flex-col items-center justify-center">
          <div className="flex flex-col top-0 gap-0">
            {" "}
            <a href="/films">
              <h1 className="text-left text-base hover:underline font-bold">
                Back to Films
              </h1>
            </a>
            <h1 className="text-3xl font-bold text-yellow-500">{film.title}</h1>{" "}
            <p className="text-xl text-slate-300 font-semibold">
              Episode {film.episode_id}
            </p>
            <div className="flex flex-col gap-0">
              <p className="text-slate-300 italic text-sm font-normal">
                {film.opening_crawl}
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <Image
              className="shadow-lg rounded-lg"
              src={film.imageUrl}
              alt={film.title}
              width={220}
              height={220}
            />
          </div>
        </div>

        <hr />
        <div className="flex max-w-1/2 flex-col">
          <p>Director: {film.director}</p>
          <p>Producer(s): {film.producer}</p>
          <p className="font-bold text-lg underline">Characters: </p>
          <div className="flex flex-wrap gap-x-0.5 gap-y-0">
            {film.characters.map((character, index) => (
              <a
                className="cursor-pointer text-slate-300 hover:underline hover:text-slate-200 "
                onClick={async () => {
                  const url = await selectPerson(character);
                  if (url) window.open(url, "_blank");
                }}
              >
                {character} |
              </a>
            ))}
          </div>
        </div>
        <div className="flex max-w-1/2 flex-col">
          <p className="font-bold text-lg underline">Planets:</p>
          <div className="flex flex-wrap gap-x-0.5 gap-y-0">
            {film.planets.map((planet, index) => (
              <a
                className="cursor-pointer text-slate-300 hover:underline hover:text-slate-200 "
                key={index}
                onClick={async () => {
                  const url = await selectPlanet(planet);
                  if (url) window.open(url, "_blank");
                }}
              >
                {planet} |
              </a>
            ))}{" "}
          </div>
        </div>
        <div className="flex flex-col max-w-1/2 ">
          <p className="font-bold text-lg underline">Starships:</p>{" "}
          <div className="flex flex-wrap gap-x-0.5 gap-y-0">
            {film.starships.map((starship, index) => (
              <a
                className="cursor-pointer text-slate-300 hover:underline hover:text-slate-200 "
                key={index}
                onClick={async () => {
                  const url = await selectStarship(starship);
                  if (url) window.open(url, "_blank");
                }}
              >
                {starship} |
              </a>
            ))}{" "}
          </div>
        </div>
        <div className="flex flex-col max-w-1/2 ">
          {" "}
          <p>Vehicles:</p>
          <div className="flex flex-wrap gap-x-0.5 gap-y-0">
            {film.vehicles.map((vehicle, index) => (
              <p key={index}>{vehicle} |</p>
            ))}
          </div>{" "}
        </div>
        <div className="flex flex-col max-w-1/2 ">
          {" "}
          <p>Species:</p>
          <div className="flex flex-wrap gap-x-0.5 gap-y-0">
            {film.species.map((specie, index) => (
              <p key={index}>{specie} |</p>
            ))}{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilmDetail;
