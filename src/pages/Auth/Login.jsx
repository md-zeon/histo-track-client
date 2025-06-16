import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router";
import SocialLogin from "../../components/SocialLogin";
import { toast } from "react-toastify";
import useAuth from "../../hooks/useAuth";

const Login = () => {
	const { signInUser } = useAuth();
	const [showPassword, setShowPassword] = useState(false);
	const handleLogin = (e) => {
		e.preventDefault();
		const form = e.target;
		const email = form.email.value;
		const password = form.password.value;
		console.log(email, password);
		signInUser(email, password)
			.then((result) => {
				const user = result.user;
				console.log(user);
				toast.success(`Login successful! Welcome ${user.displayName}`);
				form.reset();
				// navigate to intended page
			})
			.catch((error) => {
				console.log(error);
				toast.error(error.message);
			});
	};
	return (
		<div className='card bg-base-100 max-w-sm mx-auto shrink-0 shadow-2xl my-12'>
			<div className='card-body'>
				<h1 className='text-4xl font-bold my-4 text-center'>Login Now</h1>
				<form
					className='fieldset'
					onSubmit={handleLogin}
				>
					<label className='label'>Email</label>
					<input
						type='email'
						name='email'
						className='input'
						placeholder='Email'
						autoComplete='email'
						required
					/>
					<div className='relative'>
						<label className='label'>Password</label>
						<input
							type={showPassword ? "text" : "password"}
							name='password'
							className='input'
							placeholder='Password'
							autoComplete='current-password'
							required
						/>
						<span
							onClick={() => setShowPassword(!showPassword)}
							className='absolute top-7 z-10 right-8 text-lg cursor-pointer'
						>
							{showPassword ? <FaEyeSlash /> : <FaEye />}
						</span>
					</div>
					<div>
						<p>
							Don't have an account? Please{" "}
							<Link
								to='/register'
								className='text-primary underline'
							>
								Register
							</Link>
						</p>
					</div>
					<input
						type='submit'
						className='btn btn-neutral mt-4'
						value='Login'
					/>
				</form>
				<div className='divider'>OR</div>
				<div>
					<SocialLogin />
				</div>
			</div>
		</div>
	);
};

export default Login;
