import { useNavigate } from "react-router-dom";
import { IMG_CDN } from "../utils/constants";

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();
  if (!movie?.poster_path) return null;
  return (
    <div
      className="min-w-[180px] max-w-[180px] h-[270px] bg-black bg-opacity-80 m-3 rounded-lg shadow-md overflow-hidden transform transition-transform duration-200 hover:scale-105 hover:shadow-2xl hover:z-10 group cursor-pointer flex flex-col"
      onClick={() => navigate(`/moviedetails/${movie.id}`)}
    >
      <img
        className="w-full h-full object-cover group-hover:brightness-90 transition"
        alt="movie_poster"
        src={IMG_CDN + movie.poster_path}
      />
    </div>
  );
};
export default MovieCard;