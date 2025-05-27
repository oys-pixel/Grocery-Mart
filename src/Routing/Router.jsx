import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import LoginRedirectGuard from "./loginProtect";
import Cart from "../Components/Pages/Cart/Cart";
import Pizz from "../Components/Includes/Puzzle";

const Login = lazy(() => import("../Components/Pages/Login/Login"));
const NoPage = lazy(() => import("../Components/Includes/NoPage"));
const Outlet = lazy(() => import("./Outlet"));
const Home = lazy(() => import("../Components/Pages/Home/Home"));

export const router = createBrowserRouter([
  {
    element: (
      <PrivateRoute>
        <Outlet />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/",
        element: (
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        ),
      },
      {
        path: "/home",
        element: (
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        ),
      },
      {
        path: "/cart",
        element: (
          <PrivateRoute>
            <Cart />
          </PrivateRoute>
        ),
      },
      {
        path: "/puzzle",
        element: (
          <PrivateRoute>
            <Pizz />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <NoPage />,
  },
  {
    path: "/login",
    element: (
      <LoginRedirectGuard>
        <Login />
      </LoginRedirectGuard>
    ),
  },
]);
