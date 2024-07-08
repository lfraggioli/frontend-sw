export async function fetchStarships() {
  const res = await fetch("http://localhost:3001/starships");

  return res.json();
}

export const selectStarship = async (starshipName: string) => {
  try {
    const response = await fetch("http://localhost:3001/starships");
    const starships = await response.json();
    const selectedStarship = starships.find(
      (starship: { name: string }) => starship.name === starshipName
    );
    if (selectedStarship) {
      const starshipId = selectedStarship._id;
      return `http://localhost:3000/starships/${starshipId}`; // Generates detail URL
    } else {
      console.log("Starship not found");
    }
  } catch (error) {
    console.error("Error fetching starships:", error);
  }
};
