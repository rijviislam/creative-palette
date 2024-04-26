import { createBrowserRouter } from "react-router-dom";
import Banner from "../Components/Banner/Banner";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import Root from "../Layout/Root";
import AddCraftItem from "../Pages/AddCraftItem/AddCraftItem";
import AllArtAndCraftItem from "../Pages/AllArtAndCraftItem/AllArtAndCraftItem";
import Error from "../Pages/Error/Error";
import MyArtAndCraftList from "../Pages/MyArtAndCraftList/MyArtAndCraftList";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/home",
        element: <Home />,
        loader: () => fetch("http://localhost:5000/craftitem"),
      },
      {
        path: "/home",
        element: <Banner />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/allartandcraftitem",
        element: <AllArtAndCraftItem />,
        loader: () => fetch("http://localhost:5000/craftitem"),
      },
      {
        path: "/addcraftitem",
        element: <AddCraftItem />,
      },
      {
        path: "/myartandcraftlist",
        element: <MyArtAndCraftList />,
      },
    ],
  },
]);
