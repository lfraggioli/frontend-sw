import React from "react";

async function fetchPeople() {
  const res = await fetch("http://localhost:3001/people");

  return res.json();
}
async function PeoplePage() {
  const people = await fetchPeople();
  return (
    <div className="mt-16 grid grid-cols-4 gap-4">
      {people.map((person: any) => (
        <div
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">{person.name}</h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Birth year: {person.birth_year}
          </p>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Gender: {person.gender}
          </p>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Height: {person.height}
          </p>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Homeworld: {person.homeworld}
          </p>
        </div>
      ))}
    </div>
  );
}

export default PeoplePage;
