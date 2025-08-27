import useFetchMovies from "../hooks/useFetchMovies";
import useFetchVideoTrailer from "../hooks/usefetchVideoTrailer";

const MainMovieSection = () => {
  const { movieData } = useFetchMovies(
    "https://api.themoviedb.org/3/discover/movie"
  );
  const movieId = movieData?.[2]?.id;

  const { data } = useFetchVideoTrailer(movieId);
  const trailerTitle = movieData?.[2].title;
  const trailerDescription = movieData?.[2].overview;
  const releaseDate = movieData?.[2].release_date;

  return (
    <div className=" w-full h-screen overflow-hidden bg-black">
      <iframe
        className="absolute inset-0 w-full h-full object-cover"
        src={
          "https://www.youtube.com/embed/" +
          data?.key +
          "?autoplay=1&mute=1&controls=0"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>

      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>

      <div className="absolute inset-0 flex flex-col justify-center items-start p-12 max-w-2xl mt-32">
        <h1 className="text-white font-bold text-5xl mb-6 leading-tight tracking-tight">
          {trailerTitle}
        </h1>
        <p className="text-white font-normal text-lg mb-6 max-w-lg leading-relaxed">
          {trailerDescription}
        </p>

        <div className="flex gap-4 mb-8">
          <button className="flex items-center gap-2 bg-white text-black font-semibold px-8 py-3 rounded-4xl hover:bg-gray-200 transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
            Play
          </button>
          <button className="flex items-center gap-2 bg-gray-600/70 text-white font-semibold px-8 py-3 rounded-4xl hover:bg-gray-600/90 transition-colors">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="16" x2="12" y2="12" />
              <line x1="12" y1="8" x2="12.01" y2="8" />
            </svg>
            More Info
          </button>
        </div>

        <div className="flex items-center gap-3 text-white">
          <span className="bg-red-600 text-xs font-bold px-2 py-1 rounded">
            NEW
          </span>
          <span className="border border-gray-400 text-xs px-2 py-1 rounded">
            16+
          </span>
          <span className="text-sm">{releaseDate}</span>
          <span className="text-gray-400">•</span>
          <span className="border border-gray-400 text-xs px-2 py-1 rounded">
            HD
          </span>
        </div>
      </div>
    </div>
  );
};

export default MainMovieSection;
