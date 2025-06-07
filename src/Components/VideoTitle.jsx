import { PlayIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";

const VideoTitle = ({ title, overview, movieId }) => {
  const navigate = useNavigate();
  return (
    <div className="absolute top-0 left-0 w-full h-full px-2 sm:px-16 pt-[40%] sm:pt-[26%] text-white bg-gradient-to-r from-black via-black/20 to-transparent">
      <h1 className="text-2xl sm:text-6xl font-bold drop-shadow-xl mb-4 sm:mb-6">{title}</h1>
      <p className="text-base sm:text-xl font-medium max-w-xs sm:max-w-xl drop-shadow-md leading-relaxed mb-6 sm:mb-8">
        {overview}
      </p>
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
        <button
          className="bg-white text-black text-base sm:text-lg font-bold px-6 sm:px-8 py-2 sm:py-3 rounded-md hover:bg-gray-200 transition-all flex items-center gap-2 sm:gap-3"
          onClick={() => navigate(`/moviedetails/${movieId}`)}
        >
          <PlayIcon className="w-6 h-6 sm:w-7 sm:h-7 text-black" />
          Play Now
        </button>
        <button
          className="bg-gray-600/80 text-white text-base sm:text-lg font-semibold px-6 sm:px-8 py-2 sm:py-3 rounded-md hover:bg-gray-500/80 transition-all flex items-center gap-2 sm:gap-3 mt-2 sm:mt-0"
          onClick={() => navigate(`/moviedetails/${movieId}`)}
        >
          <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white text-gray-900 text-xs sm:text-sm font-bold flex items-center justify-center">
            i
          </span>
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
