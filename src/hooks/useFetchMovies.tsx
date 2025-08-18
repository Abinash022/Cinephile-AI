import { useEffect, useState } from "react";
import { OPTIONS } from "../utils/constant/constant";
import type { Movie } from "../utils/interface";

const useFetchMovies = () => {
  const [movieData, setMovieData] = useState<Movie[] | null>(null);
  useEffect(() => {
    async function getAllMovies() {
      const url = "https://api.themoviedb.org/3/discover/movie";
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
  }, []);
  return { movieData };
};

export default useFetchMovies;
