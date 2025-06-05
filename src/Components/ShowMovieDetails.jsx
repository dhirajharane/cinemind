import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { IMG_CDN} from "../utils/constants";
import { API_OPTIONS } from "../hidden";

const ShowMovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [credits, setCredits] = useState(null);
  const [trailer, setTrailer] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch movie details
    const fetchMovieDetails = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
        API_OPTIONS
      );
      const data = await res.json();
      setMovie(data);
    };

    // Fetch credits
    const fetchCredits = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`,
        API_OPTIONS
      );
      const data = await res.json();
      setCredits(data);
    };

    // Fetch trailer
    const fetchTrailer = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
        API_OPTIONS
      );
      const data = await res.json();
      const trailerVid = data.results?.find(
        (vid) => vid.type === "Trailer" && vid.site === "YouTube"
      );
      setTrailer(trailerVid);
    };

    fetchMovieDetails();
    fetchCredits();
    fetchTrailer();
  }, [id]);

  if (!movie) return <div className="text-white p-8">Loading...</div>;

  const director = credits?.crew?.find((c) => c.job === "Director");
  const cast = credits?.cast?.slice(0, 8) || [];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black flex flex-col items-center pt-24 px-2 md:px-8">
      <div className="w-full max-w-6xl bg-black bg-opacity-80 rounded-2xl shadow-2xl flex flex-col md:flex-row overflow-hidden">
        {/* Poster and Details */}
        <div className="md:w-1/2 w-full flex flex-col items-center justify-center p-6">
          <img
            src={IMG_CDN + movie.poster_path}
            alt={movie.title}
            className="rounded-lg shadow-lg w-full max-w-xs mb-6"
          />
          <h1 className="text-4xl font-bold text-white mb-2 text-center">{movie.title}</h1>
          <p className="text-gray-300 text-lg mb-4 text-center">{movie.tagline}</p>
          <div className="flex gap-4 mb-4 flex-wrap justify-center">
            <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
              {movie.release_date?.slice(0, 4)}
            </span>
            <span className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm font-semibold">
               {movie.vote_average?.toFixed(1)} ★
            </span>
            <span className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm font-semibold">
              {movie.original_language?.toUpperCase()}
            </span>
            <span className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm font-semibold">
              {movie.runtime} min
            </span>
          </div>
          <p className="text-gray-400 mb-2 text-center">
            <span className="font-semibold text-white">Director:</span> {director?.name || "N/A"}
          </p>
          <p className="text-gray-400 mb-4 text-center">{movie.overview}</p>
          <button
            className="bg-red-600 text-white px-8 py-3 rounded-md text-lg font-bold hover:bg-red-700 transition"
            onClick={() => navigate("/browse")}
          >
            Back to Home
          </button>
        </div>
        {/* Trailer */}
        <div className="md:w-1/2 w-full flex flex-col items-center justify-center bg-black bg-opacity-70 p-4">
          {trailer?.key ? (
            <iframe
              className="w-full aspect-video rounded-lg shadow-lg -mt-16"
              src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1&mute=1&controls=0&showinfo=0&modestbranding=1&rel=0&loop=1&playlist=${trailer.key}`}
              title="Movie Trailer"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          ) : (
            <div className="text-gray-400">Trailer not available.</div>
          )}
          {/* Starcast */}
          <div className="mt-18 w-full">
            <h2 className="text-2xl font-bold text-white mb-4">Star Cast</h2>
            <div className="flex flex-wrap gap-4 justify-center">
              {cast.map((actor) => (
                <div
                  key={actor.id}
                  className="flex flex-col items-center w-24"
                  title={actor.name}
                >
                  <img
                    src={
                      actor.profile_path
                        ? `${IMG_CDN}${actor.profile_path}`
                        : "https://via.placeholder.com/96x144?text=No+Image"
                    }
                    alt={actor.name}
                    className="w-20 h-28 object-cover rounded-lg shadow-md mb-2 bg-gray-800"
                  />
                  <span className="text-xs text-white text-center">{actor.name}</span>
                  <span className="text-[10px] text-gray-400 text-center">{actor.character}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ShowMovieDetails;