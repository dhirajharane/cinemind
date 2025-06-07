
import AIMovieSuggestions from "./AIMovieSuggestions";
import AISearchBar from "./AISearchBar";
import { BANNER } from "../utils/constants";

const AISearch = () => {
  return (
    <div className="min-h-screen text-white pt-28 sm:pt-32 px-2 sm:px-4 pb-20 w-full">
      <img
        className="fixed top-0 left-0 w-full h-full object-cover -z-10 blur-[4px]"
        src={BANNER}
        alt="Banner"
      />
      <AISearchBar />
      <AIMovieSuggestions />
    </div>
  );
};
export default AISearch;