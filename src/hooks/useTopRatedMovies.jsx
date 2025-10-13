import { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../hidden";
import { addTopRatedMovies } from "../utils/moviesSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const topRatedMovies = useSelector((store) => store.movies.topRatedMovies);

  const getTopRatedMovies = useCallback(async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated",
        API_OPTIONS
      );
      const json = await response.json();
      dispatch(addTopRatedMovies(json.results));
    } catch (error) {
      console.error("Failed to fetch top rated movies:", error);
    }
  }, [dispatch]);

  useEffect(() => {
    if (!topRatedMovies) {
      getTopRatedMovies();
    }
  }, [topRatedMovies, getTopRatedMovies]);
};

export default useTopRatedMovies;
