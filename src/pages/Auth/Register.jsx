import { FaEye, FaEyeSlash, FaRocket } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import SocialLogin from "../../components/SocialLogin";
import SiteTitle from "../../components/SiteTitle";

const Register = () => {
	const { createUser, updateUserProfile } = useAuth();
	const [showPassword, setShowPassword] = useState(false);
	const navigate = useNavigate();
	const location = useLocation();

	const handleRegister = (e) => {
		e.preventDefault();
		const form = e.target;
		const name = form.name.value;
		const email = form.email.value;
		const password = form.password.value;
		const photoURL = form.photoURL.value;

		if (password.length < 6) {
			toast.error("Password must be at least 6 characters");
			return;
		}
		if (!/[A-Z]/.test(password)) {
			toast.error("Password must contain at least one uppercase letter");
			return;
		}
		if (!/[a-z]/.test(password)) {
			toast.error("Password must contain at least one lowercase letter");
			return;
		}

		createUser(email, password)
			.then((res) => {
				updateUserProfile(name, photoURL)
					.then(() => {
						toast.success("User registered successfully");
						form.reset();
						navigate(location?.state || "/");
					})
					.catch((err) => toast.error(err.message));
			})
			.catch((err) => toast.error(err.message));
	};

	return (
		<div className='min-h-screen flex items-center justify-center px-4 my-12'>
			<SiteTitle>Register</SiteTitle>
			<div className='card bg-base-100 max-w-md w-full shadow-xl rounded-2xl border border-gray-200 p-8'>
				<div className='text-center mb-6'>
					<div className='w-16 h-16 mx-auto bg-primary rounded-full flex items-center justify-center text-primary-content text-2xl'>
						<FaRocket />
					</div>
					<h2 className='text-3xl font-bold mt-4'>Join HistoTrack!</h2>
					<p className='text-sm text-gray-500 mt-1'>Start preserving the past with us</p>
				</div>

				<form
					onSubmit={handleRegister}
					className='space-y-5'
				>
					<div>
						<label className='text-sm font-medium text-gray-700 dark:text-gray-300'>Full Name</label>
						<input
							type='text'
							name='name'
							placeholder='Your name'
							className='input input-bordered w-full mt-1'
							required
						/>
					</div>

					<div>
						<label className='text-sm font-medium text-gray-700 dark:text-gray-300'>Email Address</label>
						<input
							type='email'
							name='email'
							placeholder='Email'
							className='input input-bordered w-full mt-1'
							autoComplete='email'
							required
						/>
					</div>

					<div>
						<label className='text-sm font-medium text-gray-700 dark:text-gray-300'>Photo URL</label>
						<input
							type='text'
							name='photoURL'
							placeholder='Link to your profile photo'
							className='input input-bordered w-full mt-1'
							required
						/>
					</div>

					<div className='relative'>
						<label className='text-sm font-medium text-gray-700 dark:text-gray-300'>Password</label>
						<input
							type={showPassword ? "text" : "password"}
							name='password'
							placeholder='Create a password'
							className='input input-bordered w-full mt-1'
							autoComplete='new-password'
							required
						/>
						<span
							onClick={() => setShowPassword(!showPassword)}
							className='absolute top-10 z-10 right-4 text-gray-500 cursor-pointer'
						>
							{showPassword ? <FaEyeSlash /> : <FaEye />}
						</span>
					</div>

					<input
						type='submit'
						className='btn w-full btn-primary'
						value='Register'
					/>
				</form>

				<div className='divider my-6'>OR</div>

				<SocialLogin />

				<p className='text-center text-sm mt-6 text-gray-600 dark:text-gray-400'>
					Already have an account?{" "}
					<Link
						to='/login'
						className='text-blue-600 dark:text-primary hover:underline'
					>
						Login here
					</Link>
				</p>
			</div>
		</div>
	);
};

export default Register;
