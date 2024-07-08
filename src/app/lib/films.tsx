"use server";

export async function fetchFilms() {
  const res = await fetch("http://localhost:3001/films");
  return res.json();
}

export const selectFilm = async (filmName: string) => {
  try {
    const response = await fetch("http://localhost:3001/films");
    const films = await response.json();
    const selectedFilm = films.find(
      (film: { title: string }) => film.title === filmName
    );
    if (selectedFilm) {
      const filmId = selectedFilm.episode_id;
      return `http://localhost:3000/films/${filmId}`; // Generates detail URL
    } else {
      console.log("Film not found");
    }
  } catch (error) {
    console.error("Error fetching films:", error);
  }
};
