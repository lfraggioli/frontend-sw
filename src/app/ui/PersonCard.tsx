import React from "react";

interface PersonProps {
  person: {
    _id: string;
    name: string;
    birth_year: string;
    gender: string;
    height: string;
    homeworld: string;
  };
}

const PersonCard: React.FC<PersonProps> = ({ person }) => {
  return (
    <div
      key={person._id}
      className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
      rel="noopener noreferrer"
    >
      <a href={`/people/${person._id}`}>
        <h2 className="mb-3 text-2xl font-semibold">{person.name}</h2>
      </a>
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
  );
};

export default PersonCard;
