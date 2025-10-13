import { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../hidden";
import { addPopularMovies } from "../utils/moviesSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector((store) => store.movies.popularMovies);

  const getPopularMovies = useCallback(async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/popular",
        API_OPTIONS
      );
      const json = await response.json();
      dispatch(addPopularMovies(json.results));
    } catch (error) {
      console.error("Failed to fetch popular movies:", error);
    }
  }, [dispatch]);

  useEffect(() => {
    if (!popularMovies) {
      getPopularMovies();
    }
  }, [popularMovies, getPopularMovies]);
};

export default usePopularMovies;
