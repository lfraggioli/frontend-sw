import React, { useState } from "react";

interface GenderFilterProps {
  handleFilter: (gender: string) => void;
}

const GenderFilter: React.FC<GenderFilterProps> = ({ handleFilter }) => {
  const [selectedGender, setSelectedGender] = useState<string>("all");

  const handleButtonClick = (gender: string) => {
    setSelectedGender(gender);
    handleFilter(gender);
  };

  return (
    <div className="flex gap-2 items-center">
      <button
        className={` px-5 py-1 rounded-md ${
          selectedGender === "all"
            ? "bg-yellow-500 transition-colors duration-300 ease-in-out"
            : "bg-white hover:bg-yellow-400 hover:text-black   text-yellow-600 transition-colors duration-300 ease-in-out"
        }`}
        onClick={() => handleButtonClick("all")}
      >
        All
      </button>
      <button
        className={` px-5 py-1 rounded-md ${
          selectedGender === "male"
            ? "bg-yellow-500  text-black  transition-colors duration-300 ease-in-out"
            : "bg-white hover:bg-yellow-400 hover:text-black  text-yellow-600 transition-colors duration-300 ease-in-out"
        }`}
        onClick={() => handleButtonClick("male")}
      >
        Male
      </button>
      <button
        className={` px-5 py-1 rounded-md ${
          selectedGender === "female"
            ? "bg-yellow-500  text-black  transition-colors duration-300 ease-in-out"
            : "bg-white text-yellow-600 hover:bg-yellow-400 hover:text-black transition-colors duration-300 ease-in-out"
        }`}
        onClick={() => handleButtonClick("female")}
      >
        Female
      </button>
    </div>
  );
};

export default GenderFilter;
