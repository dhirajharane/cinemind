import React from "react";
import "./index.css";
import { Provider } from "react-redux";
import appStore from "./store/appStore";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import Browse from "./pages/Browse";
import ShowMovieDetails from "./pages/ShowMovieDetails";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/browse",
    element: <Browse />,
  },
  {
    path: "/moviedetails/:id",
    element: <ShowMovieDetails />,
  },
]);

function App() {
  return (
    <Provider store={appStore}>
      <RouterProvider router={appRouter} />
    </Provider>
  );
}

export default App;