import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

const MainLayout = () => {
	return (
		<div>
			<header>
				<Navbar />
			</header>
			<main>
				<Outlet />
			</main>
			<footer>Footer</footer>
		</div>
	);
};

export default MainLayout;
