import { useNavigate } from "react-router-dom";
import { geminiAi } from "../config/gemini";
import { useEffect, useRef, useState } from "react";
import type { Movie } from "../utils/interface";
import { OPTIONS } from "../utils/constant";

const SearchPage = () => {
  const navigate = useNavigate();
  const [isSearching, setIsSearching] = useState(false);
  const [searchQuery, setSearchQuery] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const [searchResults, setSearchResults] = useState<string[] | []>([]);
  const [movieDetails, setMovieDetails] = useState<Movie[] | null>(null)

  const handleMovieSearchWithAI = async () => {
    const userInput = inputRef.current?.value;
    if (!userInput) return;
    setIsSearching(true);
    setSearchQuery(true);
    setSearchResults([]);

    try {
      const response = await geminiAi.models.generateContent({
        model: "gemini-2.5-flash",
        contents: `
         User asked : ${userInput}
         Your Task : Act as a Movie Recommendation System and suggest some good Movies for the User Asked. Only give the 5 Movies, comma separated like the Example ahead. Example : ["Fight Club", "F1", "The Dark Knight", "Forest Gump"]
         `,
      });
      if (response.text !== undefined) {
        const cleanedText = response.text
        .replace(/```json/gi, "")
        .replace(/```/g, "")
        .trim();
        const movieTitles = JSON.parse(cleanedText);
        setSearchResults(movieTitles);
        const tmdbResults = await Promise.all(
          movieTitles.map(async (title : string) => {
            const url = `https://api.themoviedb.org/3/search/movie?query=${title}&include_adult=false&language=en-US`;
            try {
              const res = await fetch(url, OPTIONS);
              const json = await res.json();
              return json.results[0] || null; 
            } catch (err) {
              console.error("Error fetching movie:", title, err);
              return null;
            }
          })
        );
        setMovieDetails(tmdbResults);
        setIsSearching(false);
      }
    } catch (error) {
      console.log(error);
    }
  };



  useEffect(() => {
    handleMovieSearchWithAI();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Floating Particles Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="p-6">
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            <button
              className="w-12 h-12 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center hover:bg-black/70 transition-all group"
              onClick={() => navigate(-1)}
            >
              <svg
                className="w-6 h-6 text-white group-hover:scale-110 transition-transform"
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
            <div className="text-red-600 text-2xl font-bold tracking-wider">
              Cinephile
            </div>
            <div className="w-12 h-12" /> {/* Spacer */}
          </div>
        </header>

        {/* Main Search Section */}
        <div className="flex flex-col items-center justify-center min-h-[60vh] px-6">
          <div className="text-center mb-12">
            <h1 className="text-5xl lg:text-7xl font-black mb-4 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Discover Movies
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Search through thousands of movies and find your next favorite
              film
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative w-full max-w-2xl mb-8">
            <div className="relative">
              <input
                ref={inputRef}
                type="text"
                placeholder="Seach for Movies like you search on Google....."
                className="w-full h-16 bg-gray-900/80 backdrop-blur-xl border border-gray-700/50 rounded-2xl px-6 pr-16 text-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500/50 transition-all duration-300 hover:bg-gray-800/80"
              />

              <button
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors hover:scale-110"
                onClick={() => handleMovieSearchWithAI()}
              >
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>

            {/* Loading Indicator */}
            {isSearching && (
              <div className="absolute top-full left-0 right-0 mt-4 flex justify-center">
                <div className="flex items-center gap-2 bg-gray-900/90 backdrop-blur-xl px-4 py-2 rounded-full border border-gray-700/50">
                  <div className="w-4 h-4 border-2 border-red-500 border-t-transparent rounded-full animate-spin"></div>
                  <span className="text-gray-300 text-sm">Searching...</span>
                </div>
              </div>
            )}
          </div>

          {/* Quick Search Suggestions */}
          {!searchQuery && (
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl">
              {[
                "Suggest me a top rated movies to watch",
                "Suggest me a Comedy Movies to Watch",
                "Suggest me a Horror movies to watch at midnight ",
              ].map((genre) => (
                <button
                  key={genre}
                  onClick={() => {}}
                  className="px-6 py-3 bg-gray-800/60 backdrop-blur-md border border-gray-600/50 rounded-full text-gray-300 hover:bg-gray-700/80 hover:text-white hover:border-red-500/50 transition-all duration-300 hover:scale-105"
                >
                  {genre}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Search Results */}
        {searchResults.length > 0 && (
          <div className="max-w-7xl mx-auto px-6 pb-16">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-2">Search Results</h2>
              <p className="text-gray-400">
                Found {searchResults.length} movies
              </p>
            </div>

            <div className="grid gap-6">
              {movieDetails?.map((movie) => (
                <div
                  key={movie.id}
                  className="group bg-gray-900/40 backdrop-blur-xl border border-gray-700/30 rounded-2xl p-6 hover:bg-gray-800/60 hover:border-gray-600/50 transition-all duration-300 cursor-pointer hover:scale-[1.02]"
                >
                  <div className="flex gap-6">
                    {/* Movie Poster */}
                    <div className="flex-shrink-0">
                      <div className="w-24 h-36 rounded-lg overflow-hidden">
                      {movie.poster_path && (
                      <img 
                      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                       alt={movie.title} 
                          />
                      )}
                      </div>
                    </div>

                    {/* Movie Details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-xl font-bold text-white group-hover:text-red-400 transition-colors">
                          {movie.original_title}
                        </h3>
                        <div className="flex items-center gap-1 bg-yellow-600/20 px-2 py-1 rounded-full">
                          <svg
                            className="w-4 h-4 text-yellow-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <span className="text-yellow-400 text-sm font-medium">
                            {movie.vote_average}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 mb-3">
                        <span className="text-gray-300">{movie.release_date}</span>
           
               
                      </div>

                      <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-2">
                        {movie.overview}
                      </p>

                      {/* Action Buttons */}
                      <div className="flex items-center gap-3">
                        <button className="flex items-center gap-2 bg-white text-black font-medium px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
                          <svg
                            className="w-4 h-4"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                          Play
                        </button>
                        <button className="flex items-center gap-2 bg-gray-700/80 text-white font-medium px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors">
                          <svg
                            className="w-4 h-4"
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
                          Add
                        </button>
                        <button className="w-10 h-10 rounded-full bg-gray-700/80 flex items-center justify-center hover:bg-gray-600 transition-colors">
                          <svg
                            className="w-4 h-4 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* No Results State */}
        {searchQuery && searchResults.length === 0 && !isSearching && (
          <div className="text-center py-16">
            <div className="w-24 h-24 mx-auto mb-6 bg-gray-800/50 rounded-full flex items-center justify-center">
              <svg
                className="w-12 h-12 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-300 mb-2">
              No movies found
            </h3>
            <p className="text-gray-500">Try searching for something else</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
