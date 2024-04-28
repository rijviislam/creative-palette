import { createBrowserRouter } from "react-router-dom";
import ArtAndCraftCategories from "../Components/ArtAndCraftCategories/ArtAndCraftCategories";
import Banner from "../Components/Banner/Banner";
import Categories from "../Components/Categories/Categories";
import Details from "../Components/Details/Details";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import Update from "../Components/Update/Update";
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
        path: "/details/:id",
        element: <Details />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/craftitem/${params.id}`),
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
        loader: () => fetch(`http://localhost:5000/craftitem`),
      },
      {
        path: "/category",
        element: <Categories />,
      },
      {
        path: "/home",
        element: <ArtAndCraftCategories />,
      },
      {
        path: "/update/:id",
        element: <Update />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/craftitem/${params.id}`),
      },
    ],
  },
]);
