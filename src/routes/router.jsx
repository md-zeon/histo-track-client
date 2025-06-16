import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import App from "../App";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import Loader from "../components/ui/Loader";

const router = createBrowserRouter([
	{
		path: "/",
		Component: MainLayout,
        hydrateFallbackElement: <Loader />,
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
                Component: Register,
            }
        ]
	},
]);

export default router;
