import { useEffect, useState } from "react";
import { OPTIONS } from "../utils/constant/constant";
import type { Movie } from "../utils/interface";

const useFetchTrendingMovie = () => {
  const [trendingMovies, setTrendingMovies] = useState<Movie[] | null>(null);
  useEffect(() => {
    async function getTrendingMovies() {
      const url =
        "https://api.themoviedb.org/3/trending/movie/day?language=en-US";
      try {
        const response = await fetch(url, OPTIONS);
        const json = await response.json();
        const data = json.results;
        setTrendingMovies(data);
      } catch (error) {
        console.log(error);
      }
    }
    getTrendingMovies();
  }, []);
  return { trendingMovies };
};

export default useFetchTrendingMovie;
