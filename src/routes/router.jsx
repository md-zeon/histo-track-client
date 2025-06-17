import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import Loader from "../components/ui/Loader";
import AllArtifacts from "../pages/Artifacts/AllArtifacts";
import PrivateRoute from "../context/PrivateRoute";
import AddArtifact from "../pages/Artifacts/AddArtifact";
import Home from "../pages/Home/Home";
import ArtifactDetails from "../pages/Artifacts/ArtifactDetails";
import LikedArtifacts from "../pages/Artifacts/LikedArtifacts";
import MyArtifacts from "../pages/Artifacts/MyArtifacts";
import UpdateArtifact from "../pages/Artifacts/UpdateArtifact";
import NotFound from "../pages/NotFound";
import Terms from "../pages/Terms";
import PrivacyPolicy from "../pages/PrivacyPolicy";

const router = createBrowserRouter([
	{
		path: "/",
		Component: MainLayout,
		hydrateFallbackElement: <Loader />,
		errorElement: <NotFound></NotFound>,
		children: [
			{
				path: "/",
				Component: Home,
				loader: () => fetch("https://histotrack-server.vercel.app/artifacts?limit=6&sort=likes"),
				hydrateFallbackElement: <Loader />,
			},
			{
				path: "/all-artifacts",
				Component: AllArtifacts,
				loader: () => fetch("https://histotrack-server.vercel.app/artifacts"),
				hydrateFallbackElement: <Loader />,
			},
			{
				path: "/artifacts/:id",
				element: (
					<PrivateRoute>
						<ArtifactDetails />
					</PrivateRoute>
				),
				loader: ({ params }) => fetch(`https://histotrack-server.vercel.app/artifacts/${params.id}`),
				hydrateFallbackElement: <Loader />,
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
				path: "/liked-artifacts",
				element: (
					<PrivateRoute>
						<LikedArtifacts />
					</PrivateRoute>
				),
			},
			{
				path: "/my-artifacts",
				element: (
					<PrivateRoute>
						<MyArtifacts />
					</PrivateRoute>
				),
			},
			{
				path: "/update-artifact/:id",
				element: (
					<PrivateRoute>
						<UpdateArtifact />
					</PrivateRoute>
				),
				loader: ({ params }) => fetch(`https://histotrack-server.vercel.app/artifacts/${params.id}`),
				hydrateFallbackElement: <Loader />,
			},
			{
				path: "/login",
				Component: Login,
			},
			{
				path: "/register",
				Component: Register,
			},
			{
				path: "/terms",
				Component: Terms,
			},
			{
				path: "/privacy-policy",
				Component: PrivacyPolicy,
			},
		],
	},
]);

export default router;
