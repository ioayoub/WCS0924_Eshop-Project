import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import DetailsPage from "./pages/DetailsPage";
import HomePage from "./pages/HomePage";

export const mainRouter = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/details",
        element: <DetailsPage />,
      },
    ],
  },
]);
