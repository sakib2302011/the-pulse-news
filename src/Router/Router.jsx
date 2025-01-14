import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import About from "../Pages/About/About";
import Career from "../Pages/Career/Career";
import SearchResult from "../Pages/SearchResult/SearchResult";
import NewsDetails from "../Pages/NewsDetails/NewsDetails";
import PrivateRoute from "./PrivateRoute";


const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage/> ,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/details",
        element: <PrivateRoute><NewsDetails/></PrivateRoute>
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/career",
        element: <Career/>
      },
      {
        path: "/login",
        element: <Login/>
      },
      {
        path: "/register",
        element: <Register/>
      },
      {
        path: "/search",
        element: <PrivateRoute><SearchResult/></PrivateRoute>
      }
    ]
  },
]);

export default Router;