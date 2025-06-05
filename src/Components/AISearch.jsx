import AIMovieSuggestions from "./AIMovieSuggestions"
import AISearchBar from "./AISearchBar"
import { BANNER_URL } from "../utils/constants";

const AISearch = () => {
  return (
    <div className="min-h-screen text-white pt-32 px-4 pb-20">

       <img 
        className="fixed top-0 left-0 w-full h-full object-cover -z-10 blur-[4px]"
        src={BANNER_URL}
        alt="Banner" ></img>

      <AISearchBar />
      <AIMovieSuggestions />
       
    </div>
  )
}
export default AISearch