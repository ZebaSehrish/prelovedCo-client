import { createBrowserRouter } from "react-router-dom";
import Blogs from "../../Pages/Blogs/Blogs";
import Categories from "../../Pages/Categories/Categories";
import CategoryDetails from "../../Pages/Categories/CategoryDetails";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import Home from "../../Pages/Home/Home/Home";
import Main from "../../Pages/Layout/Main";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

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
                path: '/categories',
                element: <Categories></Categories>
            },

            {
                path: '/category/:id',
                element: <PrivateRoute><CategoryDetails></CategoryDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/categoryDetails?category_id=${params.id}`)
            },
            {
                path: '/myOrders',
                element: <Dashboard></Dashboard>
            },
            {
                path: '/addProducts',
                element: <Dashboard></Dashboard>
            },
            {
                path: '/myProducts',
                element: <Dashboard></Dashboard>
            },
            {
                path: '/myCustomers',
                element: <Dashboard></Dashboard>
            },
            {
                path: '/allCustomers',
                element: <Dashboard></Dashboard>
            },
            {
                path: '/allSellers',
                element: <Dashboard></Dashboard>
            },
            {
                path: '/reportedItems',
                element: <Dashboard></Dashboard>
            },

        ],

    },

    {
        path: '/dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>
    },
])