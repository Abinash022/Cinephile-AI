import { useParams } from "react-router-dom";
import { OPTIONS } from "../utils/constant";
import { useEffect, useState } from "react";
import type { Movie } from "../utils/interface";

const useFetchSimilarMovies = () => {
  const [similarMovies, setSilimarMovies] = useState<Movie[] | null>(null);
  const { id } = useParams<{ id: string }>();
  useEffect(() => {
    async function getMovieDetails() {
      const url = `https://api.themoviedb.org/3/movie/${id}/similar`;
      try {
        const response = await fetch(url, OPTIONS);
        const json = await response.json();
        const result = json.results;
        setSilimarMovies(result);
      } catch (error) {
        console.log(error);
      }
    }
    getMovieDetails();
  }, [id]);
  return { similarMovies };
};

export default useFetchSimilarMovies;
