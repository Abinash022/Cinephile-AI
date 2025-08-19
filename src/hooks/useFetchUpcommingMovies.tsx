import { useEffect, useState } from "react";
import { OPTIONS } from "../utils/constant";
import type { Movie } from "../utils/interface";

const useFetchUpcomingMovies = () => {
  const [upComingMovies, setUpcomingMovies] = useState<Movie[] | null>(null);
  useEffect(() => {
    async function fetchUpcomingMovies() {
      const url =
        "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1";
      try {
        const response = await fetch(url, OPTIONS);
        if (!response.ok) {
          throw new Error("Failed to fetch upcoming movies");
        }
        const json = await response.json();
        const data = json.results;
        setUpcomingMovies(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchUpcomingMovies();
  }, []);
  return { upComingMovies };
};

export default useFetchUpcomingMovies;
