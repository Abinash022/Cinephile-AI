import { useEffect, useState } from "react";
import { OPTIONS } from "../utils/constant/constant";

interface Movie {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: number[];
  id: number | string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

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
