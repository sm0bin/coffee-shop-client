import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from "./pages/Root";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import AddCoffee from "./pages/shared/AddCoffee";
import CoffeeDetails from "./pages/shared/CoffeeDetails";
import UpdateCoffee from "./pages/shared/UpdateCoffee";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
import AuthProvider from "./providers/AuthProvider";
import UsersTable from "./pages/shared/UsersTable";
import PrivateRoute from "./routes/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <PrivateRoute><Home></Home></PrivateRoute>,
        loader: () => fetch("https://coffee-shop-server-sm.vercel.app/coffees"),

      },
      {
        path: "/coffees/new",
        element: <PrivateRoute><AddCoffee></AddCoffee></PrivateRoute>,

      },
      {
        path: "/coffees/:id/edit",
        element: <PrivateRoute><UpdateCoffee></UpdateCoffee></PrivateRoute>,
        loader: ({ params }) => fetch(`https://coffee-shop-server-sm.vercel.app/coffees/${params.id}`),
      },
      {
        path: "/coffees/:id",
        element: <CoffeeDetails></CoffeeDetails>,
        loader: ({ params }) => fetch(`https://coffee-shop-server-sm.vercel.app/coffees/${params.id}`),
      },
      {
        path: "/sign-in",
        element: <SignIn></SignIn>,
      },
      {
        path: "/sign-up",
        element: <SignUp></SignUp>,
      },
      {
        path: "/users",
        element: <PrivateRoute><UsersTable></UsersTable></PrivateRoute>,
        loader: () => fetch("https://coffee-shop-server-sm.vercel.app/users"),

      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);