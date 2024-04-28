import { createBrowserRouter } from "react-router-dom";
import ArtAndCraftCategories from "../Components/ArtAndCraftCategories/ArtAndCraftCategories";
import Canvas from "../Components/Canvas/Canvas";
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
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:5000/craftitem"),
      },
      {
        path: "/details/:id",
        element: <Details />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/craftitem/${params.id}`),
      },
      {
        path: "/craftitemCategory/:subcategory_Name",
        element: <Categories />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/craftitem/${params.subcategory_Name}`),
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
        path: "/",
        element: <ArtAndCraftCategories />,
      },
      {
        path: "/",
        element: <Canvas />,
      },
      {
        path: "/update/:id",
        element: <Update />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/craftitem/${params.id}`),
      },
      // {
      //   path: "/craftitemCategory/:",
      //   element: <Categories />,
      //   loader: () => fetch(`http://localhost:5000/craftitem`),
      // },
    ],
  },
]);
