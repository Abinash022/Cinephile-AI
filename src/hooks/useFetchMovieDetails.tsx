import { useEffect, useState } from "react";
import { OPTIONS } from "../utils/constant";
import { useParams } from "react-router-dom";
import type { MovieDetail } from "../utils/interface";

const useFetchMovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState<MovieDetail | null>(null);
  const { id } = useParams<{ id: string }>();
  console.log("useParams:", useParams());
  console.log("movieId:", id);

  useEffect(() => {
    async function getMovieDetails() {
      if (!id) {
        return;
      }
      const url = `https://api.themoviedb.org/3/movie/${id}`;
      console.log("Fetching:", url);
      try {
        const response = await fetch(url, OPTIONS);
        const json = await response.json();
        setMovieDetails(json);
      } catch (error) {
        console.log(error);
      }
    }
    getMovieDetails();
  }, [id]);
  return { movieDetails };
};

export default useFetchMovieDetails;
