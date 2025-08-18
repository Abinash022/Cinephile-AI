const MovieCard = ({ movieData }) => {
  if (!movieData) return;

  return (
    <div className="px-12">
      <div className="flex gap-4 overflow-x-scroll overflow-y-hidden [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] ">
        {movieData.map((movie) => (
          <div
            key={movie.id}
            className="min-w-[200px] group cursor-pointer transition-transform duration-300 hover:scale-105"
          >
            <div className="relative overflow-hidden rounded-lg mb-2">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <button className="bg-white/90 text-black rounded-full p-3 hover:bg-white transition-colors">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="text-white">
              <h3 className="font-semibold text-md mb-1 line-clamp-2 group-hover:text-gray-300 transition-colors">
                {movie.title}
              </h3>

              <div className="flex items-center gap-2 text-xs text-gray-400 mb-1">
                <span className="bg-gray-600 px-1 py-0.5 rounded text-xs">
                  {movie.release_date?.split("-")[0]}
                </span>
                <span className="flex items-center gap-1">
                  <svg
                    className="w-3 h-3 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  {movie.vote_average?.toFixed(1)}
                </span>
              </div>

              <p className="text-xs text-gray-300 line-clamp-2">
                {movie.overview}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieCard;
