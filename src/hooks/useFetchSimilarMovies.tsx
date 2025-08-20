// const useFetchSimilarMovies = () => {
//   const [movieDetails, setMovieDetails] = useState<MovieDetail | null>(null);
//   const movieId = useParams();
//   useEffect(() => {
//     async function getMovieDetails() {
//       const url = `https://api.themoviedb.org/3/movie/${movieId}`;
//       try {
//         const response = await fetch(url, OPTIONS);
//         const json = await response.json();
//         setMovieDetails(json);
//       } catch (error) {
//         console.log(error);
//       }
//     }
//     getMovieDetails();
//   }, [movieId]);
//   return { movieDetails };
// };

// export default useFetchSimilarMovies;
