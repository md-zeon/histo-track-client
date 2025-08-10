import { useState } from "react";
import { FaArrowRight, FaEye, FaEyeSlash, FaRocket } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router";
import SocialLogin from "../../components/SocialLogin";
import { toast } from "react-toastify";
import useAuth from "../../hooks/useAuth";
import SiteTitle from "../../components/SiteTitle";

const Login = () => {
	const { signInUser } = useAuth();
	const [showPassword, setShowPassword] = useState(false);
	const navigate = useNavigate();
	const location = useLocation();

	const handleLogin = (e) => {
		e.preventDefault();
		const form = e.target;
		const email = form.email.value;
		const password = form.password.value;
		signInUser(email, password)
			.then((result) => {
				const user = result.user;
				toast.success(`Login successful! Welcome ${user.displayName || "Explorer"}`);
				form.reset();
				navigate(location?.state || "/");
			})
			.catch((error) => {
				console.log(error);
				toast.error(error.message);
			});
	};

	return (
		<div className='min-h-screen flex items-center justify-center px-4'>
			<SiteTitle>Login</SiteTitle>
			<div className='card bg-base-100 max-w-md w-full shadow-xl rounded-2xl border border-gray-200 p-8 my-12'>
				<div className='text-center mb-6'>
					<div className='w-16 h-16 mx-auto bg-primary rounded-full flex items-center justify-center text-primary-content text-2xl'>
						<FaRocket />
					</div>
					<h2 className='text-3xl font-bold mt-4 text-gray-800'>Welcome Back Explorer!</h2>
					<p className='text-sm text-gray-500 mt-1'>Continue your journey through history</p>
				</div>

				<form
					onSubmit={handleLogin}
					className='space-y-5'
				>
					<div>
						<label className='text-sm font-medium text-gray-700 dark:text-gray-300'>Email Address</label>
						<input
							type='email'
							name='email'
							placeholder='Enter your email'
							className='input input-bordered w-full mt-1'
							autoComplete='email'
							required
						/>
					</div>

					<div className='relative'>
						<label className='text-sm font-medium text-gray-700 dark:text-gray-300'>Password</label>
						<input
							type={showPassword ? "text" : "password"}
							name='password'
							placeholder='Enter your password'
							className='input input-bordered w-full mt-1'
							autoComplete='current-password'
							required
						/>
						<span
							onClick={() => setShowPassword(!showPassword)}
							className='absolute top-10 right-4 z-10 text-gray-500 cursor-pointer'
						>
							{showPassword ? <FaEyeSlash /> : <FaEye />}
						</span>
					</div>

					<div className='flex justify-between items-center text-sm'>
						<label className='flex items-center gap-2'>
							<input
								type='checkbox'
								className='checkbox checkbox-sm'
							/>
							Remember me
						</label>
						<Link
							to='/forgot-password'
							className='text-blue-600 hover:underline'
						>
							Forgot password?
						</Link>
					</div>

					<input
						type='submit'
						className='btn w-full btn-primary'
						value='Sign In to History'
					/>
				</form>

				<div className='divider my-6'>OR</div>

				<SocialLogin />

				<p className='text-center text-sm mt-6 text-gray-600 dark:text-gray-400'>
					New to HistoTrack?{" "}
					<Link
						to='/register'
						className='text-blue-600 hover:underline'
					>
						Join the Community
					</Link>
				</p>
			</div>
		</div>
	);
};

export default Login;
