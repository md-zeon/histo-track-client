
import { Navigate, useLocation } from "react-router";
import useAuth from "../hooks/useAuth";
import Loader from "../components/ui/Loader";

const PrivateRoute = ({ children }) => {
	const { user, loading } = useAuth();
	const location = useLocation();
    console.log(location);
	if (loading) {
		return <Loader />;
	}

	if (user && user?.email) {
		return children;
	}

	return (
		<Navigate
			to='/login'
			state={location?.pathname}
		/>
	);
};

export default PrivateRoute;