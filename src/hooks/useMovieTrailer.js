import { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../store/slices/moviesSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const currentTrailer = useSelector((store) => store.movies.trailerVideo);

  const getMovieVideos = useCallback(async () => {
    if (!movieId) return;

    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
        API_OPTIONS
      );
      const json = await response.json();

      if (!json.results?.length) return;

      const trailer =
        json.results.find((video) => video.type === "Trailer") ||
        json.results[0];

      dispatch(addTrailerVideo(trailer));
    } catch (error) {
      console.error("Failed to fetch movie trailer:", error);
    }
  }, [movieId, dispatch]);

  useEffect(() => {
    if (!currentTrailer || currentTrailer.movieId !== movieId) {
      getMovieVideos();
    }
  }, [movieId, currentTrailer, getMovieVideos]);
};

export default useMovieTrailer;