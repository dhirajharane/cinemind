import { createSlice } from "@reduxjs/toolkit";

const AISlice = createSlice({
  name: "ai",
  initialState: {
    showAISearch: false,
    movieList: null,
    movieResults: null,
  },
  reducers: {
    toggleAISearchView: (state) => {
      state.showAISearch = !state.showAISearch;
    },
    addAiMovieResult: (state, action) => {
      const { movieList, movieResults } = action.payload;

      state.movieList = movieList;
      state.movieResults = movieResults;
    },
  },
});

export const { toggleAISearchView, addAiMovieResult } = AISlice.actions;
export default AISlice.reducer;