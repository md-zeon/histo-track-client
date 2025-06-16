import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import App from "../App";
import Login from "../pages/Auth/Login";

const router = createBrowserRouter([
	{
		path: "/",
		Component: MainLayout,
        children: [
            {
                path: "/",
                Component: App,
            },
            {
                path: "/login",
                Component: Login,
            },
            {
                path: "/register",
            }
        ]
	},
]);

export default router;
