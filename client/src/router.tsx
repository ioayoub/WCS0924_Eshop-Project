import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import DetailsPage from "./pages/DetailsPage";
import HomePage from "./pages/HomePage";

const API_URL = import.meta.env.VITE_API_ESHOP;

export const mainRouter = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        loader: () => fetch(`${API_URL}`),
      },
      {
        path: "/details/:id",
        element: <DetailsPage />,
        loader: ({ params }) => fetch(`${API_URL}/${params.id}`),
      },
      {
        path: "*",
        element: <h1 className="text-4xl text-center my-12">Error 404</h1>,
      },
    ],
  },
]);
