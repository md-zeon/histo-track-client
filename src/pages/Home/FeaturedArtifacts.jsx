import { FaHeart, FaEye } from "react-icons/fa";
import { Link } from "react-router";

const FeaturedArtifacts = ({ featuredArtifacts }) => {
	return (
		<div className='max-w-7xl mx-auto px-2 py-16'>
			<h2 className='text-3xl sm:text-4xl font-bold text-center mb-4'>
				Featured Historical Artifacts
			</h2>
			<p className='text-gray-600 mb-14 max-w-xl mx-auto text-center'>
				A curated collection of the most fascinating and impactful historical items shared by our community.
			</p>

			<div className='grid gap-8 md:gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
				{featuredArtifacts.map((artifact) => (
					<div
						key={artifact._id}
						className='relative rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-101 flex flex-col'
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
								<span className='badge badge-primary shadow-md'>{artifact.createdAt || "Unknown"}</span>
							</div>
						</div>

						<div className='bg-base-200 p-5 flex flex-col gap-2 flex-1'>
							<h3 className='text-xl font-semibold text-gray-800'>{artifact.name}</h3>
							<p className='text-gray-600 text-sm leading-relaxed line-clamp-3 md:line-clamp-2'>{artifact.shortDescription}..</p>

							<div className='mt-auto'>
								<Link
									to={`/artifacts/${artifact._id}`}
									className='btn btn-primary w-full hover:bg-transparent hover:text-primary transition duration-300'
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
					className='btn btn-wide btn-outline btn-primary transition duration-300'
				>
					See All Artifacts
				</Link>
			</div>
		</div>
	);
};

export default FeaturedArtifacts;
