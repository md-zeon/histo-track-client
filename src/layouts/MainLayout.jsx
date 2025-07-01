import { Outlet, useNavigation } from "react-router";
import Navbar from "../components/Navbar";
import Loader from "../components/ui/Loader";
import Footer from "../components/Footer";

const MainLayout = () => {
	const { state } = useNavigation();
	return (
		<>
			<header className='sticky top-0 z-50 bg-base-100 shadow-sm'>
				<Navbar />
			</header>
			<main className='px-2 max-w-7xl mx-auto pb-10'>{state === "loading" ? <Loader /> : <Outlet />}</main>
			<footer className="px-2">
				<Footer />
			</footer>
		</>
	);
};

export default MainLayout;
