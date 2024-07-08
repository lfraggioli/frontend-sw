"use server";

export async function fetchPeople() {
  const res = await fetch("http://localhost:3001/people");
  return res.json();
}
export async function filterPeopleByGender(gender: string) {
  const res = await fetch(`http://localhost:3001/people?gender=${gender}`);
  return res.json();
}

export const selectPerson = async (personName: string) => {
  try {
    const response = await fetch("http://localhost:3001/people");
    const people = await response.json();
    const selectedPerson = people.find(
      (person: { name: string }) => person.name === personName
    );
    if (selectedPerson) {
      const personId = selectedPerson._id;
      return `http://localhost:3000/people/${personId}`; // Generates detail URL
    } else {
      console.log("Person not found");
    }
  } catch (error) {
    console.error("Error fetching people:", error);
  }
};
