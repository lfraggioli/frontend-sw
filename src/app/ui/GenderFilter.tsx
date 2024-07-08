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
    <div>
      <button onClick={() => handleButtonClick("all")}>All</button>
      <button onClick={() => handleButtonClick("male")}>Male</button>
      <button onClick={() => handleButtonClick("female")}>Female</button>
    </div>
  );
};

export default GenderFilter;
