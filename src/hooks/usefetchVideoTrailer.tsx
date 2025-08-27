import { useEffect, useState } from "react";
import { OPTIONS } from "../utils/constant";

interface VideoData {
  key? : string,
}

const useFetchVideoTrailer = (movieId: string | number | undefined) => {
  const [data, setData] = useState<VideoData | null>(null);
  useEffect(() => {
    async function getMovieTrailer() {
      const url = `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`;
      try {
        const response = await fetch(url, OPTIONS);
        const json = await response.json();
        const filteredData = json.results?.filter(
          (video: { type: string }) => video.type === "Trailer"
        );
        const finalData = filteredData.length
          ? filteredData[0]
          : json.results[0];
        setData(finalData);
      } catch (error) {
        console.log(error);
      }
    }
    getMovieTrailer();
  }, [movieId]);
  return { data };
};

export default useFetchVideoTrailer;
