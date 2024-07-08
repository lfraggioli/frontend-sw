"use client";

import { fetchStarships } from "@/app/lib/starships";
import Starship from "@/app/lib/types/Starship";
import Pagination from "@/app/ui/Pagination";
import { StarshipCard } from "@/app/ui/starships/StarshipsCard";
import React, { useEffect, useState } from "react";

function StarshipsPage() {
  const [starships, setStarships] = useState<Starship[]>([]);
  const [filteredStarships, setFilteredStarships] = useState<Starship[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const filterStarships = (starships: Starship[], searchTerm: string) => {
    return starships.filter((starship) =>
      starship.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  useEffect(() => {
    const fetchData = async () => {
      const fetchedStarships = await fetchStarships();
      setStarships(fetchedStarships);
      setFilteredStarships(filterStarships(fetchedStarships, searchTerm));
    };
    fetchData();
  }, [searchTerm]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    setFilteredStarships(filterStarships(starships, event.target.value));
  };

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };
  const indexOfLastStarship = currentPage * itemsPerPage;
  const indexOfFirstStarship = indexOfLastStarship - itemsPerPage;
  const currentStarships = filteredStarships.slice(
    indexOfFirstStarship,
    indexOfLastStarship
  );

  return (
    <div className="mt-16 h-max">
      <h1 className="mb-4 text-center text-3xl font-bold">
        Star Wars starships
      </h1>
      <div className="mb-4 flex justify-center">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search by name..."
          className="border text-slate-600 border-gray-300 rounded px-2 py-1"
        />
      </div>

      <div className="grid  sm:grid-cols-2 md:grid-cols-3 md:gap-6 sm:gap-3 px-10">
        {currentStarships.map((starship: any) => (
          <StarshipCard key={starship._id} starship={starship} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        totalItems={filteredStarships.length}
        onPageChange={handlePageClick}
      />
    </div>
  );
}

export default StarshipsPage;
