import React, { useEffect, useState } from "react";
import Starship from "@/app/lib/types/Starship";
import { selectFilm } from "@/app/lib/films";
import { selectPerson } from "@/app/lib/people";

interface StarshipDetailProps {
  id: string;
}

export const StarshipDetail: React.FC<StarshipDetailProps> = ({ id }) => {
  const [starship, setStarship] = useState<Starship | null>(null);

  useEffect(() => {
    const fetchStarship = async () => {
      if (id) {
        try {
          const response = await fetch(`http://localhost:3001/starships/${id}`);
          const data = await response.json();
          setStarship(data[0]);
          console.log(starship);
        } catch (error) {
          console.error("Error fetching starship details:", error);
        }
      }
    };

    fetchStarship();
  }, [id]);

  if (!starship) {
    return (
      <div className="mt-16">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className="mt-16">
      <h1>{starship.name}</h1>
      <p>Model: {starship.model}</p>
      <p>Manufacturer: {starship.manufacturer}</p>
      <p>Cost in credits: {starship.cost_in_credits}</p>
      <p>Length: {starship.length}</p>
      <p>Max atmosphering speed: {starship.max_atmosphering_speed}</p>
      <p>Crew: {starship.crew}</p>
      <div className="flex flex-col">
        <p>Pilots: </p>
        {starship.pilots.map((pilot, index) => (
          <a
            className="cursor-pointer text-slate-300 hover:underline hover:text-slate-200 "
            onClick={async () => {
              const url = await selectPerson(pilot);
              if (url) window.open(url, "_blank");
            }}
          >
            {pilot}
          </a>
        ))}
      </div>
      <div className="flex flex-col">
        <p>Films: </p>
        {starship.films.map((film, index) => (
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
