import useFetchMovieDetails from "../hooks/useFetchMovieDetails";

const MovieDetailPage = () => {
  const { movieDetails } = useFetchMovieDetails();

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <nav className="absolute top-0 left-0 right-0 z-50 p-6">
        <div className="flex items-center justify-between">
          <button className="w-12 h-12 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center hover:bg-black/70 transition-all">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
        </div>
      </nav>

      <div className="relative h-screen overflow-hidden">
        {/* Background with Parallax Effect */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${movieDetails?.backdrop_path})`,
            backgroundPosition: "center 20%",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/30" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent" />

        <div className="absolute inset-0 flex flex-col justify-end pb-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
            <h1 className="text-7xl lg:text-8xl font-black mb-4 tracking-tighter bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              {movieDetails?.original_title}
            </h1>

            <p className="text-2xl text-gray-300 font-light mb-8 tracking-wide">
              {movieDetails?.overview}
            </p>

            <div className="flex items-center gap-4 mb-8">
              <button className="group flex items-center gap-3 bg-white text-black font-bold px-8 py-4 rounded-full hover:bg-gray-200 transition-all transform hover:scale-105 shadow-2xl">
                <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center group-hover:bg-gray-800 transition-colors">
                  <svg
                    className="w-3 h-3 text-white ml-0.5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                Play
              </button>

              <button className="w-12 h-12 rounded-full bg-gray-800/80 backdrop-blur-md flex items-center justify-center hover:bg-gray-700 transition-all hover:scale-110">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </button>

              <button className="w-12 h-12 rounded-full bg-gray-800/80 backdrop-blur-md flex items-center justify-center hover:bg-gray-700 transition-all hover:scale-110">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
                  />
                </svg>
              </button>

              <button className="px-6 py-3 border border-gray-500 rounded-full text-white hover:bg-white/10 transition-all font-medium">
                Similars
              </button>
            </div>

            <div className="flex items-center gap-4 text-sm">
              <span className="border border-gray-400 text-xs px-2 py-1 rounded">
                16+
              </span>
              <span className="text-gray-300">
                {movieDetails?.release_date}
              </span>
              <span className="text-gray-300">{movieDetails?.runtime} min</span>
              <span className="border border-gray-500 px-2 py-1 rounded text-gray-300">
                4K
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="relative bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <section className="py-16 border-b border-gray-800">
            <div className="max-w-4xl">
              <div className="grid md:grid-cols-3 gap-8 text-sm">
                <div>
                  <h3 className="text-red-400 font-semibold mb-3">
                    Release Date
                  </h3>
                  <p className="text-gray-400">{movieDetails?.release_date}</p>
                </div>
                <div>
                  <h3 className="text-red-400 font-semibold mb-3">Languages</h3>
                  <p className="text-gray-400">
                    {movieDetails?.spoken_languages[0].english_name}
                  </p>
                </div>
                <div>
                  <h3 className="text-red-400 font-semibold mb-3">Rating</h3>
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-gray-400">
                      {movieDetails?.vote_average}/10
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailPage;

// <section className="py-16 border-b border-gray-800">
//             <div className="flex items-center gap-4 mb-12">
//               <div className="w-1 h-8 bg-red-600 rounded-full"></div>
//               <h2 className="text-3xl font-bold">Actors</h2>
//             </div>

//             <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
//               {movieData.cast.map((actor, index) => (
//                 <div key={index} className="group cursor-pointer">
//                   <div className="relative overflow-hidden rounded-2xl mb-4 aspect-square">
//                     <img
//                       src={actor.image}
//                       alt={actor.name}
//                       className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                   </div>
//                   <h3 className="font-bold text-white mb-1 group-hover:text-red-400 transition-colors">
//                     {actor.name}
//                   </h3>
//                   <p className="text-gray-400 text-sm">{actor.character}</p>
//                 </div>
//               ))}
//             </div>
//           </section>

//           <section className="py-16">
//             <div className="flex items-center gap-4 mb-12">
//               <div className="w-1 h-8 bg-red-600 rounded-full"></div>
//               <h2 className="text-3xl font-bold">You may like</h2>
//             </div>

//             <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
//               {movieData.similarMovies.map((movie, index) => (
//                 <div key={index} className="group cursor-pointer">
//                   <div className="relative overflow-hidden rounded-lg mb-3 aspect-[3/4]">
//                     <img
//                       src={movie.poster}
//                       alt={movie.title}
//                       className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
//                     />
//                     <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
//                       <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
//                         <svg
//                           className="w-5 h-5 text-white ml-0.5"
//                           fill="currentColor"
//                           viewBox="0 0 24 24"
//                         >
//                           <path d="M8 5v14l11-7z" />
//                         </svg>
//                       </div>
//                     </div>

//                     <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-sm px-2 py-1 rounded-full">
//                       <div className="flex items-center gap-1">
//                         <svg
//                           className="w-3 h-3 text-yellow-400"
//                           fill="currentColor"
//                           viewBox="0 0 20 20"
//                         >
//                           <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                         </svg>
//                         <span className="text-white text-xs font-medium">
//                           {movie.rating}
//                         </span>
//                       </div>
//                     </div>
//                   </div>

//                   <h3 className="font-semibold text-sm mb-1 group-hover:text-red-400 transition-colors line-clamp-2">
//                     {movie.title}
//                   </h3>
//                   <p className="text-gray-500 text-xs">{movie.year}</p>
//                 </div>
//               ))}
//             </div>
//           </section>
