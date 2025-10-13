import MovieList from "../common/MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    movies && (
      <div className="bg-black w-full px-1 sm:px-0">
        <div className="flex flex-col gap-4 sm:mt-0 sm:gap-0">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Popular"} movies={movies.PopularMovies} />
          <MovieList title={"Top Rated"} movies={movies.TopRatedMovies} />
          <MovieList title={"Upcoming"} movies={movies.UpcomingMovies} />
        </div>
      </div>
    )
  );
};
export default SecondaryContainer;