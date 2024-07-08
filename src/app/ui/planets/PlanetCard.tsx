import React from "react";
import { Planet } from "@/app/lib/types/Planet";
interface PlanetProps {
  planet: Planet;
}

const PlanetCard: React.FC<PlanetProps> = ({ planet }) => {
  return (
    <div
      key={planet._id}
      className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
      rel="noopener noreferrer"
    >
      <a href={`/planets/${planet._id}`}>
        <h2 className="mb-3 text-2xl font-semibold">{planet.name}</h2>
      </a>
      <p className="m-0 max-w-[30ch] text-sm opacity-50">
        Rotation Period: {planet.rotation_period}
      </p>
      <p className="m-0 max-w-[30ch] text-sm opacity-50">
        Orbital Period: {planet.orbital_period}
      </p>
      <p className="m-0 max-w-[30ch] text-sm opacity-50">
        Diameter: {planet.diameter}
      </p>
      <p className="m-0 max-w-[30ch] text-sm opacity-50">
        Climate: {planet.climate}
      </p>
    </div>
  );
};

export default PlanetCard;
