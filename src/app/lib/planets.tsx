export async function fetchPlanets() {
  const res = await fetch("http://localhost:3001/planets");

  return res.json();
}

export async function selectPlanet(planetName: string) {
  try {
    const response = await fetch("http://localhost:3001/planets");
    const planets = await response.json();
    const selectedPlanet = planets.find(
      (planet: { name: string }) => planet.name === planetName
    );
    if (selectedPlanet) {
      const planetId = selectedPlanet._id;
      return `http://localhost:3000/planets/${planetId}`; // Generates detail URL
    } else {
      console.log("Planet not found");
    }
  } catch (error) {
    console.error("Error fetching planets:", error);
  }
}
