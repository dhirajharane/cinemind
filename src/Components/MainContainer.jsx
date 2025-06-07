import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies) return <div className="text-white">Loading...</div>;

  const mainMovie = movies?.[0];
  const { original_title, overview, id } = mainMovie;
  return (
    <div className="rounded-xl">
      <VideoBackground movieId={id} />
      <VideoTitle title={original_title} overview={overview} movieId={id} />
    </div>
  );
};
export default MainContainer;
