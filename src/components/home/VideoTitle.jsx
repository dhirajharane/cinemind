import { PlayIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";

const VideoTitle = ({ title, overview, movieId }) => {
  const navigate = useNavigate();
  return (
    <div className="absolute top-0 left-0 w-full sm:h-full px-2 sm:px-16 pt-[34%] sm:pt-[28%] text-white bg-gradient-to-r from-black via-black/30 to-transparent h-[256px]">
      <h1 className="text-xs sm:text-5xl sm:font-bold font-semibold drop-shadow-xl mb-2 sm:mb-6">{title}</h1>
      <p className="text-[9px] sm:text-lg font-medium sm:font-normal max-w-xs sm:max-w-xl drop-shadow-md leading-relaxed mb-2 sm:mb-8 line-clamp-3">
        {overview}
      </p>
      <div className="flex flex-row sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
        <button
          className="bg-white text-black text-xs sm:text-lg font-medium sm:font-semibold px-1 sm:px-8 py-0.5 sm:py-3 rounded-md hover:bg-gray-200 transition-all flex items-center gap-1 sm:gap-3"
          onClick={() => navigate(`/moviedetails/${movieId}`)}
        >
          <PlayIcon className="w-3 h-3 sm:w-7 sm:h-7 text-black" />
          Play Now
        </button>
        <button
          className="bg-gray-600/80 text-white text-xs sm:text-lg font-normal sm:font-semibold px-1 sm:px-8 py-0.5 sm:py-3 rounded-md hover:bg-gray-500/80 transition-all flex items-center gap-1 sm:gap-3 sm:mt-0"
          onClick={() => navigate(`/moviedetails/${movieId}`)}
        >
          <span className="w-3 h-3 sm:w-6 sm:h-6 rounded-full bg-white text-gray-900 text-xs sm:text-sm font-bold flex items-center justify-center">
            i
          </span>
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;