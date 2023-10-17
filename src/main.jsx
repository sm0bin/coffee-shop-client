import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from "./components/Root";
import Home from "./components/Home";
import AddCoffee from "./components/AddCoffee";
import CoffeeDetails from "./components/CoffeeDetails";
import UpdateCoffee from "./components/UpdateCoffee";
import ErrorPage from "./components/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5500/coffees"),

      },
      {
        path: "/coffees/new",
        element: <AddCoffee></AddCoffee>,

      },
      {
        path: "/coffees/:id/edit",
        element: <UpdateCoffee></UpdateCoffee>,
        loader: ({ params }) => fetch(`http://localhost:5500/coffees/${params.id}`),
      },
      {
        path: "/coffees/:id",
        element: <CoffeeDetails></CoffeeDetails>,
        loader: ({ params }) => fetch(`http://localhost:5500/coffees/${params.id}`),
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);