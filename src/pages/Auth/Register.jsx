import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { Link } from "react-router";
import { toast } from "react-toastify";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";

const Register = () => {
	const { createUser, updateUserProfile } = useAuth();
	const [showPassword, setShowPassword] = useState(false);
	const handleRegister = (e) => {
		e.preventDefault();
		const form = e.target;
		const name = form.name.value;
		const email = form.email.value;
		const password = form.password.value;
		const photoURL = form.photoURL.value;
		console.log(name, email, password, photoURL);

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
				console.log(res.user);
				updateUserProfile(name, photoURL)
					.then(() => {
						toast.success("User created successfully");
						form.reset();
						// navigate to login page
					})
					.catch((err) => {
						const errorMessage = err.message;
						toast.error(errorMessage);
					});
			})
			.catch((err) => {
				console.error(err);
			});
	};
	return (
		<div className='card bg-base-100 max-w-sm mx-auto shrink-0 shadow-2xl my-12'>
			<div className='card-body'>
				<h1 className='text-4xl font-bold my-4 text-center'>Register Now</h1>
				<form
					className='fieldset'
					onSubmit={handleRegister}
				>
					<label className='label'>Name</label>
					<input
						type='text'
						name='name'
						className='input'
						placeholder='Name'
						required
					/>

					<label className='label'>Email</label>
					<input
						type='email'
						name='email'
						className='input'
						placeholder='Email'
						autoComplete='email'
						required
					/>
					<label className='label'>photoURL</label>
					<input
						type='text'
						name='photoURL'
						className='input'
						placeholder='Photo URL'
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
							Already have an account? Please{" "}
							<Link
								to='/login'
								className='text-primary underline'
							>
								Login
							</Link>
						</p>
					</div>
					<input
						type='submit'
						className='btn btn-neutral mt-4'
						value='Register'
					/>
				</form>
				<div className='divider'>OR</div>
				<div>
					<button className='btn btn-neutral btn-outline w-full'>
						{" "}
						<FaGoogle /> Login with Google
					</button>
				</div>
			</div>
		</div>
	);
};

export default Register;
