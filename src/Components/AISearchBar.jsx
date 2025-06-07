// filepath: d:\Learning React(scratch)\CineMind\my-react-app\src\Components\AISearchBar.jsx
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";
import { useRef } from "react";
import { GEMINI_URL } from "../utils/constants";
import { API_OPTIONS } from "../hidden";

import { addAiMovieResult } from "../utils/AISlice";
import { useDispatch } from "react-redux";

const AISearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
        movie
      )}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS
    );
    const json = await data.json();

    return json.results;
  };

  const handleAISearchClick = async () => {
    const searchQuery = searchText.current.value;

    if (!searchQuery) {
      alert("Please enter a search query");
      return;
    }

    const prompt = `Act as a movie recommendation system and suggest 5 movies based on this query: "${searchQuery}". If the query contains movie name then give that movie as well as 4 more related movies.Only provide the names of 5 movies, comma-separated, like the example: Golmaal, Gadar, Koi Mil Gaya, Housefull, Om Shanti Om. Do not add anything else.`;

    try {
      const response = await fetch(GEMINI_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: prompt,
                },
              ],
            },
          ],
        }),
      });

      if (!response.ok) {
        throw new Error(
          "Failed to fetch from Gemini API: " + response.statusText
        );
      }

      const data = await response.json();

      // Extract generated text (movie names in array format)
      const movieNames = (data.candidates?.[0]?.content?.parts?.[0]?.text || "")
        .split(",")
        .map((name) => name.trim());

      const promiseArray = movieNames.map((movie) => searchMovieTMDB(movie));

      const tmbdResults = await Promise.all(promiseArray);

      dispatch(addAiMovieResult({ movieList: movieNames, movieResults: tmbdResults }));
    } catch (error) {
      alert("Something went wrong while fetching movie recommendations.");
    }
  };
  return (
    <div className="flex justify-center w-full mb-8 mt-8 sm:mt-16 z-[130]">
      <form
        className="flex flex-row sm:flex-row items-center justify-center w-full mr-2 sm:mr-0 sm:gap-0"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          className="w-full sm:w-1/2 h-12 px-4 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600 text-base"
          type="text"
          placeholder={lang[langKey].AISearchPlaceholder}
        />
        <button
          className="bg-red-600 text-white px-5 py-3 rounded-md cursor-pointer hover:opacity-80 transition  sm:mt-0"
          onClick={handleAISearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};
export default AISearchBar;