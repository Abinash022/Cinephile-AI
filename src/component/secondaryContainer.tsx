import MovieCard from "./movieCard";
import useFetchMovies from "../hooks/useFetchMovies";

const SecondaryContainer = () => {
  const { movieData } = useFetchMovies();
  return (
    <div className="bg-gradient-to-t from-black via-black to-transparent relative -mt-32 z-10  pb-8">
      <h1 className="text-white font-bold mb-9 text-2xl mx-12">
        Newly Released
      </h1>
      <MovieCard movieData={movieData} />
    </div>
  );
};

export default SecondaryContainer;
