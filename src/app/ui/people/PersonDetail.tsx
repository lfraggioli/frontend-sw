import React, { useEffect, useState } from "react";
import { Person } from "@/app/lib/types/Person";
import { selectFilm } from "@/app/lib/films";
import { selectPlanet } from "@/app/lib/planets";
import { selectStarship } from "@/app/lib/starships";
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
    <div className="flex justify-center my-16">
      <div
        className="flex flex-col gap-2 bg-zinc-600/30 rounded-xl border-slate-300/30 border p-8 sm:mx-4 
      md:w-1/2 sm:w-3/5"
      >
        <div className="flex flex-row justify-between">
          <h1 className="text-3xl font-bold text-yellow-500">{person.name}</h1>
          <a href="/people">
            <h1 className="mb-4 text-left text-base hover:underline font-bold">
              Back to People
            </h1>
          </a>
        </div>
        <p>Birth Year: {person.birth_year}</p>
        <p>Gender: {person.gender}</p>
        <p>Height: {person.height} cms</p>
        <div className="flex flex-col">
          <p className="font-semibold text-lg underline">Homeworld: </p>
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
        <div className="flex max-w-1/2 flex-col">
          <h2 className="font-semibold text-lg underline">Films</h2>
          <div className="flex flex-wrap gap-x-0.5 gap-y-0">
            {person.films.map((film, index) => (
              <a
                className="cursor-pointer text-slate-300 hover:underline hover:text-slate-200 "
                key={index}
                onClick={async () => {
                  const url = await selectFilm(film);
                  if (url) window.open(url, "_blank");
                }}
              >
                {film} |
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-col">
          <p className="font-semibold text-lg underline">Starships:</p>
          <div className="flex flex-wrap gap-x-0.5">
            {person.starships.map((starship, index) => (
              <a
                className="cursor-pointer text-slate-300 hover:underline hover:text-slate-200 "
                key={index}
                onClick={async () => {
                  const url = await selectStarship(starship);
                  if (url) window.open(url, "_blank");
                }}
              >
                {starship} |
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-col">
          <p>Vehicles:</p>
          <div className="flex flex-wrap gap-x-0.5">
            {person.vehicles.map((vehicle, index) => (
              <p className=" text-slate-200 " key={index}>
                {vehicle} |
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonDetail;
