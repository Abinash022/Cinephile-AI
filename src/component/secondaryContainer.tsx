import MovieCard from "./movieCard";
import useFetchMovies from "../hooks/useFetchMovies";

const SecondaryContainer = () => {
  const { movieData } = useFetchMovies(
    "https://api.themoviedb.org/3/discover/movie"
  );
  const { movieData: trendingMovies } = useFetchMovies(
    "https://api.themoviedb.org/3/trending/movie/day?language=en-US"
  );
  const { movieData: topRatedMovies } = useFetchMovies(
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1"
  );
  const { movieData: upComingMovies } = useFetchMovies(
    "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1"
  );
  return (
    <div className="bg-gradient-to-t from-black via-black to-transparent relative -mt-32 z-10  pb-8">
      <h1 className="text-white font-bold mb-9 text-2xl mx-12">
        Newly Released
      </h1>
      <MovieCard movieData={movieData ?? []} />
      <h1 className="text-white font-bold mb-9 text-2xl mx-12  mt-9">
        Trending Now
      </h1>
      <MovieCard movieData={trendingMovies ?? []} />
      <h1 className="text-white font-bold mb-9 text-2xl mx-12 mt-9">
        Top Rated Movies
      </h1>
      <MovieCard movieData={topRatedMovies ?? []} />
      <h1 className="text-white font-bold mb-9 text-2xl mx-12 mt-9">
        UpComing Movies
      </h1>
      <MovieCard movieData={upComingMovies ?? []} />
    </div>
  );
};

export default SecondaryContainer;
