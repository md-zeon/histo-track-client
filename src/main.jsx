import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import router from "./routes/router.jsx";
import { ToastContainer } from "react-toastify";
import AuthProvider from "./context/AuthProvider.jsx";
import { HelmetProvider } from "react-helmet-async";

createRoot(document.getElementById("root")).render(
	<HelmetProvider>
		<AuthProvider>
			<RouterProvider router={router}></RouterProvider>
			<ToastContainer />
		</AuthProvider>
	</HelmetProvider>,
);
