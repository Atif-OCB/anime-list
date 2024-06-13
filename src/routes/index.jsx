import {
  createBrowserRouter,
} from "react-router-dom";
import Home from "../pages/Home";
import AnimeDetails from "../pages/AnimeDetails";
import About from "../pages/About";
import NotFound from "../pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: "anime-details",
    element: <AnimeDetails />
  },
  {
    path: "about-us",
    element: <About />
  }
]);