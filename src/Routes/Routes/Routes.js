import { createBrowserRouter } from "react-router-dom";
import Blogs from "../../Pages/Blogs/Blogs";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import Home from "../../Pages/Home/Home/Home";
import Main from "../../Pages/Layout/Main";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            },

        ]
    }
])