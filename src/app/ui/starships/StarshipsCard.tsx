import React from "react";
import Starship from "@/app/lib/types/Starship";
interface StarshipProps {
  starship: Starship;
}

export const StarshipCard: React.FC<StarshipProps> = ({ starship }) => {
  return (
    <div
      key={starship._id}
      className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
      rel="noopener noreferrer"
    >
      <a href={`/starships/${starship._id}`}>
        <h2 className="mb-3 text-2xl font-semibold">{starship.name}</h2>
      </a>
      <p className="m-0 max-w-[30ch] text-sm opacity-50">
        Model: {starship.model}
      </p>
      <p className="m-0 max-w-[30ch] text-sm opacity-50">
        Manufacturer: {starship.manufacturer}
      </p>
      <p className="m-0 max-w-[30ch] text-sm opacity-50">
        Cost in credits: {starship.cost_in_credits}
      </p>
      <p className="m-0 max-w-[30ch] text-sm opacity-50">
        Length: {starship.length}
      </p>
      <p className="m-0 max-w-[30ch] text-sm opacity-50">
        Max atmosphering speed: {starship.max_atmosphering_speed}
      </p>
      <p className="m-0 max-w-[30ch] text-sm opacity-50">
        Crew: {starship.crew}
      </p>
      <p className="m-0 max-w-[30ch] text-sm opacity-50">
        Passengers: {starship.passengers}
      </p>
      <p className="m-0 max-w-[30ch] text-sm opacity-50">
        Cargo capacity: {starship.cargo_capacity}
      </p>
      <p className="m-0 max-w-[30ch] text-sm opacity-50">
        Consumables: {starship.consumables}
      </p>
      <p className="m-0 max-w-[30ch] text-sm opacity-50">
        Hyperdrive rating: {starship.hyperdrive_rating}
      </p>
      <p className="m-0 max-w-[30ch] text-sm opacity-50">
        MGLT: {starship.MGLT}
      </p>
    </div>
  );
};
