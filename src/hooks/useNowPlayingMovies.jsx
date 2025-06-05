import { useEffect } from "react";
import {API_OPTIONS} from "../hidden"
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useSelector } from "react-redux";

const useNowPlayingMovies = () => {

  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  );
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const json = await data.json();

    dispatch(addNowPlayingMovies(json.results));
  };
  useEffect(() => {
    if (!nowPlayingMovies) getNowPlayingMovies();
    
  }, []);
};

export default useNowPlayingMovies;
