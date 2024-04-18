import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Error from "../shared/Error";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import Property from "../pages/Property/Property";
import PropertyDetails from "../pages/PropertyDetails/PropertyDetails";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/homes.json"),
      },
      {
        path: "/properties/:id",
        element: (
          <PrivateRoute>
            <PropertyDetails></PropertyDetails>
          </PrivateRoute>
        ),
        loader: () => fetch("/homes.json"),
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/properties",
        element: (
          <PrivateRoute>
            <Property></Property>
          </PrivateRoute>
        ),
        loader: () => fetch("/homes.json"),
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);

export default router;
