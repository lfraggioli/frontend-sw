"use client";
import { fetchPeople, filterPeopleByGender } from "@/app/lib/people";
import GenderFilter from "@/app/ui/GenderFilter";
import PersonCard from "@/app/ui/people/PersonCard";
import React, { useState, useEffect } from "react";
import Pagination from "@/app/ui/Pagination";
import { Person } from "@/app/lib/types/Person";

function PeoplePage() {
  const [people, setPeople] = useState<Person[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPeople, setFilteredPeople] = useState<Person[]>([]);
  const [selectedGender, setSelectedGender] = useState("");

  const filterPeople = (people: Person[], searchTerm: string) => {
    return people.filter((person) =>
      person.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  useEffect(() => {
    const fetchData = async () => {
      const fetchedPeople = await fetchPeople();
      setPeople(fetchedPeople);
      setFilteredPeople(filterPeople(fetchedPeople, searchTerm));
    };
    fetchData();
  }, [searchTerm]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    setFilteredPeople(filterPeople(people, event.target.value));
  };

  const handleFilter = async (gender: string) => {
    setSelectedGender(gender);
    if (gender === "all") {
      setFilteredPeople(people);
    } else {
      const filteredData = await filterPeopleByGender(gender);
      setFilteredPeople(filteredData);
    }
    setCurrentPage(1);
  };

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };

  const indexOfLastPerson = currentPage * itemsPerPage;
  const indexOfFirstPerson = indexOfLastPerson - itemsPerPage;
  const currentPeople = filteredPeople.slice(
    indexOfFirstPerson,
    indexOfLastPerson
  );

  return (
    <div className="my-16 h-full">
      <h1 className="mb-4 text-center text-3xl font-bold">Star Wars people </h1>
      <div className="flex flex-row items-center justify-center sm:gap-6 sm:justify-center sm:mx-auto  sm:flex-col gap-2 py-1">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search by name..."
          className="text-zinc-600 border-gray-300 rounded px-7 py-1"
        />

        <GenderFilter handleFilter={handleFilter} />
      </div>

      <div className="grid px-10 md:grid-cols-4 sm:grid-cols-3 sm:gap-2 md:gap-4">
        {currentPeople.map((person: any) => (
          <PersonCard key={person._id} person={person} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        totalItems={filteredPeople.length}
        onPageChange={handlePageClick}
      />
    </div>
  );
}

export default PeoplePage;
