import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import App from "../App";

const router = createBrowserRouter([
	{
		path: "/",
		Component: MainLayout,
        children: [
            {
                path: "/",
                Component: App,
            },
        ]
	},
]);

export default router;
