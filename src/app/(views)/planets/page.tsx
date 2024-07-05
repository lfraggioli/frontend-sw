import React from "react";
async function fetchPlanets() {
  const res = await fetch("http://localhost:3001/planets");

  return res.json();
}
async function PlanetsPage() {
  const planets = await fetchPlanets();
  return (
    <div className="mt-16 grid grid-cols-4 gap-4">
      {planets.map((planet: any) => (
        <div
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">{planet.name}</h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Climate: {planet.climate}
          </p>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Terrain: {planet.terrain}
          </p>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Population: {planet.population}
          </p>
        </div>
      ))}
    </div>
  );
}

export default PlanetsPage;
