import MovieCard from "./movieCard";
import useFetchMovies from "../hooks/useFetchMovies";
import useFetchTrendingMovie from "../hooks/useFetchTrendingMovie";

const SecondaryContainer = () => {
  const { movieData } = useFetchMovies();
  const { trendingMovies } = useFetchTrendingMovie();
  return (
    <div className="bg-gradient-to-t from-black via-black to-transparent relative -mt-32 z-10  pb-8">
      <h1 className="text-white font-bold mb-9 text-2xl mx-12">
        Newly Released
      </h1>
      <MovieCard movieData={movieData} />
      <h1 className="text-white font-bold mb-9 text-2xl mx-12">Trending Now</h1>
      <MovieCard movieData={trendingMovies} />
    </div>
  );
};

export default SecondaryContainer;
