import { Link } from "react-router";
import SiteTitle from "../components/SiteTitle";
import { CiWarning } from "react-icons/ci";

const NotFound = () => {
	return (
		<div className='max-w-7xl mx-auto'>
			<SiteTitle>404 - Artifact Not Found</SiteTitle>
			<div className='min-h-screen flex items-center justify-center px-6'>
				<div className='text-center max-w-xl'>
					<div className='flex justify-center mb-6'>
						<CiWarning className='text-9xl text-red-500 animate-pulse' />
					</div>
					<h2 className='text-5xl font-extrabold mb-4 text-primary'>Lost in History?</h2>
					<p className='text-lg text-gray-600 mb-6'>
						The artifact you're searching for might be missing, buried in time, or simply doesn't exist.
					</p>
					<Link
						to='/'
						className='btn btn-primary font-semibold hover:scale-105 transition duration-300'
					>
						Return to Home
					</Link>
				</div>
			</div>
		</div>
	);
};

export default NotFound;
