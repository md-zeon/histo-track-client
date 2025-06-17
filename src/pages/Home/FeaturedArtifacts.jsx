import { FaHeart, FaEye } from "react-icons/fa";
import { Link } from "react-router";

const FeaturedArtifacts = ({ featuredArtifacts }) => {
	return (
		<div className='max-w-7xl mx-auto px-4 py-16'>
			<h2 className='text-4xl font-bold text-center mb-16 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary'>
				Featured Historical Artifacts
			</h2>

			<div className='grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
				{featuredArtifacts.map((artifact) => (
					<div
						key={artifact._id}
						className='relative rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-101'
					>
						<div className='relative h-60 overflow-hidden'>
							<img
								src={artifact.image}
								alt={artifact.name}
								className='w-full h-full object-cover transform transition-transform duration-300 hover:scale-110'
							/>
							<div className='absolute top-3 right-3'>
								<span className='badge badge-lg'>
									<FaHeart className='ml-1 text-red-500' /> {artifact.likes || 0}
								</span>
							</div>
							<div className='absolute bottom-3 left-3'>
								<span className='badge shadow-md'>{artifact.createdAt || "Unknown"}</span>
							</div>
						</div>

						<div className='bg-white p-5 space-y-2'>
							<h3 className='text-xl font-semibold text-gray-800'>{artifact.name}</h3>
							<p className='text-gray-600 text-sm leading-relaxed'>{artifact.shortDescription?.slice(0, 100)}...</p>

							<div className='mt-4 flex justify-between items-center'>
								<Link
									to={`/artifacts/${artifact._id}`}
									className='btn btn-sm w-full btn-primary'
								>
									<FaEye className='mr-1' /> View Details
								</Link>
							</div>
						</div>
					</div>
				))}
			</div>

			<div className='flex justify-center mt-16'>
				<Link
					to='/all-artifacts'
					className='btn btn-wide btn-outline hover:btn-primary transition duration-300'
				>
					See All Artifacts
				</Link>
			</div>
		</div>
	);
};

export default FeaturedArtifacts;
