import {createBrowserRouter} from "react-router-dom";
import { Layout,AuthLayout, AdminLayout } from "../layouts";
import  Login  from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Home from "../pages/Home";
import Orders from "../pages/Orders";
import Products from "../pages/Products";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <Home/>
            }
        ]
    },
    {
        path: "auth",
        element: <AuthLayout/>,
        children:[
            {
                path:"login",
                element:<Login />
            },
            {
                path:"register",
                element:<Register />
            }
        ]
    },
    {
        path: "admin",
        element: <AdminLayout/>,
        children:[
            {
                index: true,
                element:<Orders />
            },
            {
                path:"products",
                element:<Products />
            }
        ]
    }
]);