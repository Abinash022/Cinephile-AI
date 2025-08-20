import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import MovieDetailPage from "../component/movieDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/movies/:id",
    element: <MovieDetailPage />,
  },
]);
export default router;
