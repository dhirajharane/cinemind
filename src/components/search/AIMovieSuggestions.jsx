import { useSelector } from "react-redux";
import MovieList from "../common/MovieList";
const AIMovieSuggestions = () => {
  const { movieList, movieResults } = useSelector((store) => store.ai);

  if (!movieList || !movieResults) return null;

  return (
    <div className="p-2 sm:p-4 m-2 sm:m-4 text-white flex flex-col gap-4 rounded-lg items-start w-full">
      {movieList.map((movieName, index) => (
        <MovieList
          key={movieName}
          title={movieName}
          movies={movieResults[index]}
        />
      ))}
    </div>
  );
};
export default AIMovieSuggestions;