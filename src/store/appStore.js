import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import moviesReducer from "./slices/moviesSlice";
import aiReducer from "./slices/AISlice";
import configReducer from "./slices/configSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    ai: aiReducer,
    config: configReducer,
  },
});

export default appStore;