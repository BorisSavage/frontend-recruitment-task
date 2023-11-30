import axios from "axios";

export default async function getMovies(id?: number) {
  const { data } = id
    ? await axios.get(`https://swapi.dev/api/films/${id}`)
    : await axios.get("https://swapi.dev/api/films");
  return data;
}
