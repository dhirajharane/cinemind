import { useSelector } from "react-redux";
import MovieList from "./MovieList";
const AIMovieSuggestions = () => {
  const { movieList, movieResults } = useSelector((store) => store.ai);

  if (!movieList || !movieResults) return null;

  return (
    <div className="p-4 m-4 text-white flex flex-col gap-4 rounded-lg items-start">
      {movieList.map((movieName, index) => (
        <MovieList
          key="{{movieName}}"
          title={movieName}
          movies={movieResults[index]}
        />
      ))}
    </div>
  );
};
export default AIMovieSuggestions;
