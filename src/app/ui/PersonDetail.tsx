import React, { useEffect, useState } from "react";
import { Person } from "@/app/lib/types/Person";
import { selectFilm } from "@/app/lib/films";
import { selectPlanet } from "../lib/planets";
import { selectStarship } from "../lib/starships";
interface PersonDetailProps {
  id: string;
}

const PersonDetail: React.FC<PersonDetailProps> = ({ id }) => {
  const [person, setPerson] = useState<Person | null>(null);

  useEffect(() => {
    console.log("_id", id);
    const fetchPerson = async () => {
      try {
        const response = await fetch(`http://localhost:3001/people/${id}`);
        const data = await response.json();
        setPerson(data[0]);
      } catch (error) {
        console.error("Error fetching person details:", error);
      }
    };

    if (id) {
      fetchPerson();
    }
  }, [id]);

  if (!person) {
    return (
      <div className="mt-16">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className="mt-16">
      <h1>{person.name}</h1>
      <p>Birth Year: {person.birth_year}</p>
      <p>Gender: {person.gender}</p>
      <p>Height: {person.height}</p>
      <div className="flex flex-col">
        <p>Homeworld: </p>
        <a
          className="cursor-pointer text-slate-300 hover:underline hover:text-slate-200 "
          onClick={async () => {
            const url = await selectPlanet(person.homeworld);
            if (url) window.open(url, "_blank");
          }}
        >
          {person.homeworld}
        </a>
      </div>
      <div>
        <h2>Films</h2>
        {person.films.map((film, index) => (
          <a
            className="cursor-pointer text-slate-300 hover:underline hover:text-slate-200 "
            key={index}
            onClick={async () => {
              const url = await selectFilm(film);
              if (url) window.open(url, "_blank");
            }}
          >
            {film}
          </a>
        ))}
      </div>
      <div className="flex flex-col">
        <p>Starships:</p>
        {person.starships.map((starship, index) => (
          <a
            className="cursor-pointer text-slate-300 hover:underline hover:text-slate-200 "
            key={index}
            onClick={async () => {
              const url = await selectStarship(starship);
              if (url) window.open(url, "_blank");
            }}
          >
            {starship}
          </a>
        ))}
      </div>
    </div>
  );
};

export default PersonDetail;
