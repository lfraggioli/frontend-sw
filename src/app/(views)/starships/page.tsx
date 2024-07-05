import React from "react";
async function fetchStarships() {
  const res = await fetch("http://localhost:3001/starships");

  return res.json();
}
async function StarshipsPage() {
  const starships = await fetchStarships();
  return (
    <div className="mt-16 grid grid-cols-4 gap-4">
      {starships.map((starship: any) => (
        <div
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">{starship.name}</h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Model: {starship.starshipModel}
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
            Crew: {starship.crew}
          </p>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Passengers: {starship.passengers}
          </p>
        </div>
      ))}
    </div>
  );
}

export default StarshipsPage;
