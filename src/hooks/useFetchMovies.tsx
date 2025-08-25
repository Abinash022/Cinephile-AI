import { useEffect, useState } from "react";
import { OPTIONS } from "../utils/constant";
import { type Movie } from "../utils/interface";

const useFetchMovies = (url: string) => {
  const [movieData, setMovieData] = useState<Movie[] | null>(null);
  useEffect(() => {
    async function getAllMovies() {
      try {
        const response = await fetch(url, OPTIONS);
        const json = await response.json();
        const data = json.results;
        setMovieData(data);
      } catch (error) {
        console.log(error);
      }
    }
    getAllMovies();
  }, [url]);
  return { movieData };
};

export default useFetchMovies;
