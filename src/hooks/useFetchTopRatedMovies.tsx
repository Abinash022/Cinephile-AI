import { useEffect, useState } from "react";
import { OPTIONS } from "../utils/constant/constant";
import type { Movie } from "../utils/interface";

const useFetchTopRatedMovies = () => {
  const [topRatedMovies, setTopRatedMovies] = useState<Movie[] | null>(null);
  useEffect(() => {
    async function fetchTopRatedMovies() {
      const url =
        "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";
      try {
        const response = await fetch(url, OPTIONS);
        const json = await response.json();
        const data = json.results;
        setTopRatedMovies(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchTopRatedMovies();
  }, []);
  return { topRatedMovies };
};

export default useFetchTopRatedMovies;
