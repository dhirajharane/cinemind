import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import AISearch from "../components/search/AISearch";
import Header from "../components/common/Header";
import MainContainer from "../components/home/MainContainer";
import SecondaryContainer from "../components/home/SecondaryContainer";

const Browse = () => {
  const showAISearch = useSelector((store) => store.ai.showAISearch);
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div>
      <Header />
      {showAISearch ? (
        <AISearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};
export default Browse;