import { FaGoogle } from "react-icons/fa";
import useAuth from "../hooks/useAuth";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router";

const SocialLogin = () => {
	const { signInWithGoogle } = useAuth();
	const navigate = useNavigate();
    const location = useLocation();
	const handleGoogleLogin = () => {
		signInWithGoogle()
			.then((res) => {
				console.log(res.user);
				toast.success(`Welcome ${res.user.displayName}`);
				navigate(location?.state || "/");
			})
			.catch((err) => {
				toast.error(err.message);
			});
	};
	return (
		<div>
			<button
				onClick={handleGoogleLogin}
				className='btn btn-neutral btn-outline w-full'
			>
				{" "}
				<FaGoogle /> Login with Google
			</button>
		</div>
	);
};

export default SocialLogin;
