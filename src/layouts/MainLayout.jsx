import { Outlet, useNavigation } from "react-router";
import Navbar from "../components/Navbar";
import Loader from "../components/ui/Loader";
import Footer from "../components/Footer";

const MainLayout = () => {
	const { state } = useNavigation();
	return (
		<div>
			<header>
				<Navbar />
			</header>
			<main className="min-h-screen">{state === "loading" ? <Loader /> : <Outlet />}</main>
			<footer>
				<Footer />
			</footer>
		</div>
	);
};

export default MainLayout;
