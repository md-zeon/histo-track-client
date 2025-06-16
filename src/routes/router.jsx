import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import App from "../App";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import Loader from "../components/ui/Loader";
import AllArtifacts from "../pages/Artifacts/AllArtifacts";
import PrivateRoute from "../context/PrivateRoute";
import AddArtifact from "../pages/Artifacts/AddArtifact";

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
				path: "/all-artifacts",
				Component: AllArtifacts,
			},
			{
				path: "/add-artifact",
				element: (
					<PrivateRoute>
						<AddArtifact />
					</PrivateRoute>
				),
			},
			{
				path: "/login",
				Component: Login,
			},
			{
				path: "/register",
				Component: Register,
			},
		],
	},
]);

export default router;
