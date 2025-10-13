import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies || movies.length === 0) return null;

  return (
    <div className="mb-8 sm:mb-12 px-1 z-10 sm:px-4 sm:z-0 ">
      <h2 className="text-sm sm:text-2xl font-medium sm:font-semibold text-white mb-1 sm:mb-2">{title}</h2>
      <div className="flex flex-nowrap overflow-x-auto no-scrollbar gap-1 sm:gap-2 scroll-smooth touch-pan-x">

        {movies?.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;