import React, { useEffect, useState } from "react";
import { Planet } from "@/app/lib/types/Planet";
import { selectFilm } from "@/app/lib/films";
import { selectPerson } from "@/app/lib/people";
interface PlanetDetailProps {
  id: string;
}

const PlanetDetail: React.FC<PlanetDetailProps> = ({ id }) => {
  const [planet, setPlanet] = useState<Planet | null>(null);

  useEffect(() => {
    const fetchPlanet = async () => {
      if (id) {
        try {
          const response = await fetch(`http://localhost:3001/planets/${id}`);
          const data = await response.json();
          setPlanet(data[0]);
          console.log(planet);
        } catch (error) {
          console.error("Error fetching planet details:", error);
        }
      }
    };

    fetchPlanet();
  }, [id]);

  if (!planet) {
    return (
      <div className="mt-16">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className="flex justify-center my-16">
      <div
        className="flex flex-col gap-2 bg-zinc-600/30 rounded-xl border-slate-300/30 border p-8 sm:mx-4 
      md:w-1/2 sm:w-3/5"
      >
        <div className="flex flex-row justify-between">
          {" "}
          <h1 className="text-3xl font-bold text-yellow-500">
            {planet.name}
          </h1>{" "}
          <a href="/planets">
            <h1 className="mb-4 text-left text-base hover:underline font-bold">
              Back to Planets
            </h1>
          </a>
        </div>
        <p>Rotation Period: {planet.rotation_period} hours</p>
        <p>Orbital Period: {planet.orbital_period} days</p>
        <p>Diameter: {planet.diameter} km</p>
        <p>Climate: {planet.climate} </p>
        <p>Gravity: {planet.gravity} </p>
        <p>Terrain: {planet.terrain}</p>
        <div className="flex flex-col">
          <p className="font-semibold text-lg underline">Notable Residents: </p>
          <div className="flex flex-wrap gap-x-0.5 gap-y-0">
            {planet.residents.map((resident, index) => (
              <a
                className="cursor-pointer text-slate-300 hover:underline hover:text-slate-200 "
                onClick={async () => {
                  const url = await selectPerson(resident);
                  if (url) window.open(url, "_blank");
                }}
              >
                {resident} |
              </a>
            ))}
          </div>
        </div>

        <div className="flex max-w-1/2 flex-col">
          <h2 className="font-semibold text-lg underline">Films</h2>
          <div className="flex flex-wrap gap-x-0.5 gap-y-0">
            {planet.films.map((film, index) => (
              <a
                className="cursor-pointer text-slate-300 hover:underline hover:text-slate-200 "
                onClick={async () => {
                  const url = await selectFilm(film);
                  if (url) window.open(url, "_blank");
                }}
              >
                {film} |
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanetDetail;
