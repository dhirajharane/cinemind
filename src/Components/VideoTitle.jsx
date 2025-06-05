import { PlayIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";

const VideoTitle = ({ title, overview, movieId }) => {
  const navigate = useNavigate();
  return (
    <div className="absolute top-0 left-0 w-full h-full px-16 pt-[26%] text-white bg-gradient-to-r from-black via-black/20 to-transparent">
      <h1 className="text-6xl font-bold drop-shadow-xl mb-6">{title}</h1>
      <p className="text-xl font-medium max-w-xl drop-shadow-md leading-relaxed mb-8">
        {overview}
      </p>
      <div className="flex items-center gap-4">
        <button
          className="bg-white text-black text-lg font-bold px-8 py-3 rounded-md hover:bg-gray-200 transition-all flex items-center gap-3"
          onClick={() => navigate(`/moviedetails/${movieId}`)}
        >
          <PlayIcon className="w-7 h-7 text-black" />
          Play Now
        </button>
        <button
          className="bg-gray-600/80 text-white text-lg font-semibold px-8 py-3 rounded-md hover:bg-gray-500/80 transition-all flex items-center gap-3"
          onClick={() => navigate(`/moviedetails/${movieId}`)}
        >
          <span className="w-6 h-6 rounded-full bg-white text-gray-900 text-sm font-bold flex items-center justify-center">
            i
          </span>
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;