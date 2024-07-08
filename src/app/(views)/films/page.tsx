"use client";
import React, { useEffect, useState } from "react";
import Film from "@/app/lib/types/Film";
import { fetchFilms } from "@/app/lib/films";
import FilmCard from "@/app/ui/films/FilmCard";

function FilmsPage() {
  const [films, setFilms] = useState<Film[]>([]);
  const [filteredFilms, setFilteredFilms] = useState<Film[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  const filterFilms = (films: Film[], searchTerm: string) => {
    return films.filter((film) =>
      film.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  useEffect(() => {
    const fetchData = async () => {
      const fetchedFilms = await fetchFilms();
      setFilms(fetchedFilms);
      setFilteredFilms(filterFilms(fetchedFilms, searchTerm));
    };
    fetchData();
  }, [searchTerm]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    setFilteredFilms(filterFilms(films, event.target.value));
  };

  return (
    <div className="my-16 h-max flex flex-col  justify-center">
      <h1 className="mb-4 text-center text-3xl font-bold">Star Wars films</h1>
      <div className="mb-4 flex justify-center">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search by title..."
          className="border text-slate-600 border-gray-300 rounded px-8 py-1"
        />
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2 mx-auto">
        {filteredFilms.map((film: any) => (
          <FilmCard key={film._id} film={film} />
        ))}
      </div>
    </div>
  );
}

export default FilmsPage;
