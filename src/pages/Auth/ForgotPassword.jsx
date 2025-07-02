import { FaRocket } from "react-icons/fa";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router";
import SiteTitle from "../../components/SiteTitle";
import useAuth from "../../hooks/useAuth";

const ForgotPassword = () => {
	const { resetPassword } = useAuth();
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		const email = e.target.email;

		resetPassword(email)
			.then(() => {
				toast.success("Password reset email sent!");
				navigate("/login");
			})
			.catch((error) => {
				console.error(error);
				toast.error(error.message);
			});
	};

	return (
		<div className='min-h-screen flex items-center justify-center px-4'>
			<SiteTitle>Forgot Password</SiteTitle>
			<div className='card bg-base-100 max-w-md w-full shadow-xl rounded-2xl border border-gray-200 p-8'>
				<div className='text-center mb-6'>
					<div className='w-16 h-16 mx-auto bg-primary rounded-full flex items-center justify-center text-primary-content text-2xl'>
						<FaRocket />
					</div>
					<h2 className='text-2xl font-bold mt-4'>Forgot your password?</h2>
					<p className='text-sm text-gray-500 mt-1'>Enter your email and we'll send you a reset link.</p>
				</div>

				<form
					onSubmit={handleSubmit}
					className='space-y-5'
				>
					<div>
						<label className='text-sm font-medium text-gray-700'>Email Address</label>
						<input
							type='email'
							name='email'
							placeholder='Your email'
							className='input input-bordered w-full mt-1'
							autoComplete='email'
							required
						/>
					</div>

					<button
						type='submit'
						className='btn w-full btn-primary'
					>
						Send Reset Link
					</button>
				</form>

				<p className='text-center text-sm mt-6 text-gray-600'>
					Remembered your password?{" "}
					<Link
						to='/login'
						className='text-blue-600 hover:underline'
					>
						Go back to login →
					</Link>
				</p>
			</div>
		</div>
	);
};

export default ForgotPassword;
