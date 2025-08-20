// import { useParams } from "react-router-dom";
// import { OPTIONS } from "../utils/constant";
// import { useEffect, useState } from "react";

// const useFetchActorDetails = () => {
//   const [actorDetails, setActorDetails] = useState<MovieDetail | null>(null);
//   const movieId = useParams();
//   useEffect(() => {
//     async function getActorDetails() {
//       const url = `https://api.themoviedb.org/3/movie/${movieId}`;
//       try {
//         const response = await fetch(url, OPTIONS);
//         const json = await response.json();
//         setActorDetails(json);
//       } catch (error) {
//         console.log(error);
//       }
//     }
//     getActorDetails();
//   }, [movieId]);
//   return { actorDetails };
// };

// export default useFetchActorDetails;
