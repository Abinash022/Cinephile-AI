import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import MovieDetailPage from "../component/movieDetails";
import Searchpage from "../component/searchPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/movies/:id",
    element: <MovieDetailPage />,
  },
  {
    path: "/movies/search",
    element: <Searchpage />,
  },
]);
export default router;
