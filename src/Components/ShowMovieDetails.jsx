import { useEffect, useState, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { IMG_CDN } from "../utils/constants";
import { API_OPTIONS } from "../hidden";

const ShowMovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [movie, setMovie] = useState(null);
  const [credits, setCredits] = useState(null);
  const [trailer, setTrailer] = useState(null);

  // Single fetch helper to avoid repeating try/catch
  const fetchData = useCallback(async (url) => {
    try {
      const res = await fetch(url, API_OPTIONS);
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      return await res.json();
    } catch (err) {
      console.error("Fetch failed:", err);
      return null;
    }
  }, []);

  useEffect(() => {
    if (!id) return;

    const loadMovieData = async () => {
      // Run all fetches in parallel for faster loading
      const [movieData, creditsData, videosData] = await Promise.all([
        fetchData(`https://api.themoviedb.org/3/movie/${id}?language=en-US`),
        fetchData(`https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`),
        fetchData(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`),
      ]);

      if (movieData) setMovie(movieData);
      if (creditsData) setCredits(creditsData);

      const trailerVid = videosData?.results?.find(
        (vid) => vid.type === "Trailer" && vid.site === "YouTube"
      );
      setTrailer(trailerVid || null);
    };

    loadMovieData();
  }, [id, fetchData]);

  if (!movie) return <div className="text-white p-8">Loading...</div>;

  const director = credits?.crew?.find((c) => c.job === "Director");
  const cast = credits?.cast?.slice(0, 8) || [];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black flex flex-col items-center pt-20 sm:pt-24 px-1 sm:px-2 md:px-8">
      <div className="w-full max-w-2xl sm:max-w-6xl bg-black bg-opacity-80 rounded-2xl shadow-2xl flex flex-col md:flex-row overflow-hidden">
        {/* Poster and Details */}
        <div className="md:w-1/2 w-full flex flex-col items-center justify-center p-4 sm:p-6">
          <img
            src={IMG_CDN + movie.poster_path}
            alt={movie.title}
            className="rounded-lg shadow-lg w-32 sm:w-full max-w-xs mb-4 sm:mb-6"
          />
          <h1 className="text-2xl sm:text-4xl font-bold text-white mb-2 text-center">
            {movie.title}
          </h1>
          <p className="text-gray-300 text-base sm:text-lg mb-4 text-center">
            {movie.tagline}
          </p>

          <div className="flex gap-2 sm:gap-4 mb-4 flex-wrap justify-center">
            <span className="bg-red-600 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
              {movie.release_date?.slice(0, 4)}
            </span>
            <span className="bg-gray-700 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
              {movie.vote_average?.toFixed(1)} ★
            </span>
            <span className="bg-gray-700 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
              {movie.original_language?.toUpperCase()}
            </span>
            <span className="bg-gray-700 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
              {movie.runtime} min
            </span>
          </div>

          <p className="text-gray-400 mb-2 text-center text-sm sm:text-base">
            <span className="font-semibold text-white">Director:</span>{" "}
            {director?.name || "N/A"}
          </p>
          <p className="text-gray-400 mb-4 text-center text-sm sm:text-base">
            {movie.overview}
          </p>

          <button
            className="bg-red-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-md text-base sm:text-lg font-bold hover:bg-red-700 transition mb-4 sm:mb-0"
            onClick={() => navigate("/browse")}
          >
            Back to Home
          </button>
        </div>

        {/* Trailer and Cast */}
        <div className="md:w-1/2 w-full flex flex-col items-center justify-center bg-black bg-opacity-70 p-2 sm:p-4">
          {trailer?.key ? (
            <iframe
              className="w-full aspect-video rounded-lg shadow-lg -mt-8 sm:-mt-16"
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
          <div className="mt-8 w-full">
            <h2 className="text-lg sm:text-2xl font-bold text-white mb-2 sm:mb-4">
              Star Cast
            </h2>
            <div className="flex flex-wrap gap-2 sm:gap-4 justify-center">
              {cast.map((actor) => (
                <div
                  key={actor.id}
                  className="flex flex-col items-center w-16 sm:w-24"
                  title={actor.name}
                >
                  <img
                    src={
                      actor.profile_path
                        ? `${IMG_CDN}${actor.profile_path}`
                        : "https://via.placeholder.com/96x144?text=No+Image"
                    }
                    alt={actor.name}
                    className="w-14 h-20 sm:w-20 sm:h-28 object-cover rounded-lg shadow-md mb-1 sm:mb-2 bg-gray-800"
                  />
                  <span className="text-[10px] sm:text-xs text-white text-center">
                    {actor.name}
                  </span>
                  <span className="text-[8px] sm:text-[10px] text-gray-400 text-center">
                    {actor.character}
                  </span>
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
