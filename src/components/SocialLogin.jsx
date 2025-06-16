import { FaGoogle } from "react-icons/fa";
import useAuth from "../hooks/useAuth";
import { toast } from "react-toastify";

const SocialLogin = () => {
	const { signInWithGoogle } = useAuth();
	const handleGoogleLogin = () => {
		signInWithGoogle()
			.then((res) => {
				console.log(res.user);
				toast.success(`Welcome ${res.user.displayName}`);
				// navigate to intended page
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
