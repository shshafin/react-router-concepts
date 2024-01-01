import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";

import Products from "../Components/Products/Products";
import Home from "../Components/Home/Home";
import ProductDetails from "../Components/productDetails/ProductDetails";
import DashboardLayout from "../Components/DashboardLayout/DashboardLayout";
import Dashboard from "../Components/Dashboard/Dashboard";
import Profile from "../Components/Profile/Profile";
import EditProfile from "../Components/EditProfile/EditProfile";

const myCreation = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/Products",
        element: <Products></Products>,
        loader: () => fetch(`https://dummyjson.com/products`),
      },
      {
        path: "/Products/:id",
        element: <ProductDetails></ProductDetails>,
        loader: ({ params }) =>
          fetch(`https://dummyjson.com/products/${params.id}`),
      },
      {
        path: "/Dashboard",
        element: <DashboardLayout></DashboardLayout>,
        children: [
          {
            path: "/Dashboard",
            element: <Dashboard></Dashboard>,
          },
          {
            path: "/Dashboard/Profile",
            element: <Profile></Profile>,
          },
          {
            path: "/Dashboard/EditProfile",
            element: <EditProfile></EditProfile>,
          },
        ],
      },
    ],
  },
]);

export default myCreation;
