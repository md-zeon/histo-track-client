import { Link } from "react-router";
import { FaArrowRight } from "react-icons/fa";

const CallToAction = () => {
	return (
		<section>
			<div className='bg-base-100 p-10 rounded-lg grid gap-5 grid-cols-1  sm:grid-cols-2 items-center'>
				<div className='space-y-5 order-2 sm:order-1'>
					<h2 className='text-4xl font-bold leading-tight'>Make History by Sharing Yours</h2>
					<p className='text-lg'>
						Uncover hidden treasures and preserve stories that matter. Be part of a global archive of human history.
					</p>
					<Link
						to='/add-artifact'
						className='btn btn-neutral text-white font-semibold hover:scale-105 transition transform duration-300'
					>
						Share Your Artifact <FaArrowRight className='ml-2' />
					</Link>
				</div>
				<div className="order-1 sm:order-2">
					<img
						className='w-[300px] mx-auto'
						src='https://i.ibb.co/LDynKLPG/brocken-artitecture.png'
						alt='broken statue image'
					/>
				</div>
			</div>
		</section>
	);
};

export default CallToAction;
