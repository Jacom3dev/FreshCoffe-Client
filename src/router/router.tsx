import {createBrowserRouter} from "react-router-dom";
import { Layout,AuthLayout } from "../layouts";
import  Login  from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Home from "../pages/Home";

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
    }
]);