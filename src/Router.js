import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/layout/Layout";
import ProductPage from "./pages/productpage/ProductPage";
import HomePage from "./pages/homepage/HomePage";
import AuthPage from "./pages/authpage/Authpage.jsx"



export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <HomePage/>
            },
            {
                path: "/products",
                element: <ProductPage />
            },
            {
                path: "/auth",
                element: <AuthPage />
            },
        ]

    }
])

