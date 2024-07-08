"use client";

import { fetchPlanets } from "@/app/lib/planets";
import { Planet } from "@/app/lib/types/Planet";
import Pagination from "@/app/ui/Pagination";
import PlanetCard from "@/app/ui/planets/PlanetCard";
import React, { useEffect, useState } from "react";

function PlanetsPage() {
  const [planets, setPlanets] = useState<Planet[]>([]);

  const [filteredPlanets, setFilteredPlanets] = useState<Planet[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const filterPlanets = (planets: Planet[], searchTerm: string) => {
    return planets.filter((planet) =>
      planet.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  useEffect(() => {
    const fetchData = async () => {
      const fetchedPlanets = await fetchPlanets();
      setPlanets(fetchedPlanets);
      setFilteredPlanets(filterPlanets(fetchedPlanets, searchTerm));
    };
    fetchData();
  }, [searchTerm]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    setFilteredPlanets(filterPlanets(planets, event.target.value));
  };

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };
  const indexOfLastPlanet = currentPage * itemsPerPage;
  const indexOfFirstPlanet = indexOfLastPlanet - itemsPerPage;
  const currentPlanets = filteredPlanets.slice(
    indexOfFirstPlanet,
    indexOfLastPlanet
  );
  return (
    <div className="mt-16 h-svh">
      <div className="mb-4 ml-5">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search by name..."
          className="border text-slate-600 border-gray-300 rounded px-2 py-1"
        />
      </div>
      <div className="grid gap-4  sm:grid-cols-3 md:grid-cols-6">
        {currentPlanets.map((planet: any) => (
          <PlanetCard key={planet._id} planet={planet} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        totalItems={filteredPlanets.length}
        onPageChange={handlePageClick}
      />
    </div>
  );
}

export default PlanetsPage;
