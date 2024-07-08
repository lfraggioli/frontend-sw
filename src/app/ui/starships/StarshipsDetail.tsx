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
    <div className="flex justify-center my-16">
      <div
        className="flex flex-col gap-2 bg-zinc-600/30 rounded-xl border-slate-300/30 border p-8 sm:mx-4 
      md:w-1/2 sm:w-3/5"
      >
        <div className="flex flex-row justify-between">
          <h1 className="text-3xl font-bold text-yellow-500">
            {starship.name}
          </h1>{" "}
          <a href="/starships">
            <h1 className="mb-4 text-left text-base hover:underline font-bold">
              Back to Starships
            </h1>
          </a>
        </div>
        <p>Model: {starship.model}</p>
        <p>Manufacturer: {starship.manufacturer}</p>
        <p>Cost in credits: {starship.cost_in_credits}</p>
        <p>Length: {starship.length} mts</p>
        <p>Max atmosphering speed: {starship.max_atmosphering_speed} km/h</p>
        <p>Crew: {starship.crew}</p>
        <p>Passengers: {starship.passengers}</p>
        <p>Cargo capacity: {starship.cargo_capacity} kg</p>
        <p>Consumables: {starship.consumables}</p>
        <p>Hyperdrive rating: {starship.hyperdrive_rating}</p>
        <p>Starship class: {starship.starship_class}</p>
        <div className="flex flex-col">
          <p className="font-semibold text-lg underline">Pilots: </p>
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
          <p className="font-semibold text-lg underline">Films: </p>
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
    </div>
  );
};
