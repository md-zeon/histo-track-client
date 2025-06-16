import { Outlet, useNavigation } from "react-router";
import Navbar from "../components/Navbar";
import Loader from "../components/ui/Loader";

const MainLayout = () => {
	const { state } = useNavigation();
	return (
		<div>
			<header>
				<Navbar />
			</header>
			<main>{state === "loading" ? <Loader /> : <Outlet />}</main>
			<footer>Footer</footer>
		</div>
	);
};

export default MainLayout;
