import { ApiResponse, Character } from "@/types/types";

export const fetchCharacters = async (): Promise<Character[]> => {
  try {
    const res = await fetch('https://swapi.dev/api/people/');
    if (!res.ok) {
      throw new Error('Failed to fetch');
    }
    const data: ApiResponse = await res.json();
    return data.results;
  } catch (error) {
    console.error(error);
    throw new Error('An error occurred while fetching characters');
  }
};
