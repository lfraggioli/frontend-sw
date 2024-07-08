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
    <div className="mt-16">
      <h1>{planet.name}</h1>
      <p>Rotation Period: {planet.rotation_period}</p>
      <p>Orbital Period: {planet.orbital_period}</p>
      <p>Diameter: {planet.diameter}</p>
      <p>Climate: {planet.climate}</p>
      <p>Gravity: {planet.gravity}</p>
      <p>Terrain: {planet.terrain}</p>
      <div className="flex flex-col">
        <p>Notable Residents: </p>
        {planet.residents.map((resident, index) => (
          <a
            className="cursor-pointer text-slate-300 hover:underline hover:text-slate-200 "
            onClick={async () => {
              const url = await selectPerson(resident);
              if (url) window.open(url, "_blank");
            }}
          >
            {resident}
          </a>
        ))}
      </div>

      <div className="flex flex-col">
        <p>Films: </p>
        {planet.films.map((film, index) => (
          <a
            className="cursor-pointer text-slate-300 hover:underline hover:text-slate-200 "
            onClick={async () => {
              const url = await selectFilm(film);
              if (url) window.open(url, "_blank");
            }}
          >
            {film}
          </a>
        ))}
      </div>
    </div>
  );
};

export default PlanetDetail;
