import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies || movies.length === 0) return null;

  return (
    <div className="mb-8 sm:mb-12 px-1 sm:px-4">
      <h2 className="text-lg sm:text-2xl font-semibold text-white mb-2">{title}</h2>
      <div className="flex flex-nowrap overflow-x-auto no-scrollbar gap-1 sm:gap-2">
        {movies?.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
