import { FaSearch, FaHeart, FaPlusCircle, FaGlobe } from "react-icons/fa";

const HowItWorks = () => {
	return (
		<div className='max-w-5xl mx-auto px-4 py-16'>
			<h2 className='text-4xl font-bold text-center mb-12'>How It Works</h2>

			<ul className='timeline timeline-snap-icon max-md:timeline-compact timeline-vertical'>
				{/* Step 1 */}
				<li>
					<div className='timeline-middle bg-primary text-white p-2 rounded shadow-lg'>
						<FaSearch className='text-lg' />
					</div>
					<div className='timeline-start md:text-end mb-10 p-3 border border-primary rounded-xl'>
						<h3 className='text-xl font-semibold text-primary'>1. Discover Artifacts</h3>
						<p className='text-gray-600'>
							Browse through a world of historical treasures uploaded by enthusiasts like you.
						</p>
					</div>
					<hr />
				</li>

				{/* Step 2 */}
				<li>
					<div className='timeline-middle bg-secondary text-white p-2 rounded shadow-lg'>
						<FaHeart className='text-lg' />
					</div>
					<div className='timeline-end mb-10 p-3 border border-secondary rounded-xl'>
						<h3 className='text-xl font-semibold text-secondary'>2. Like & Save</h3>
						<p className='text-gray-600'>Show appreciation and bookmark your favorite artifacts for quick access.</p>
					</div>
					<hr />
				</li>

				{/* Step 3 */}
				<li>
					<div className='timeline-middle bg-accent text-white p-2 rounded shadow-lg'>
						<FaPlusCircle className='text-lg' />
					</div>
					<div className='timeline-start md:text-end mb-10 p-3 border border-accent rounded-xl'>
						<h3 className='text-xl font-semibold text-accent'>3. Add Your Own</h3>
						<p className='text-gray-600'>Contribute by uploading your own historical discoveries and stories.</p>
					</div>
					<hr />
				</li>

				{/* Step 4 */}
				<li>
					<div className='timeline-middle bg-info text-white p-2 rounded shadow-lg'>
						<FaGlobe className='text-lg' />
					</div>
					<div className='timeline-end mb-10 p-3 border border-info rounded-xl'>
						<h3 className='text-xl font-semibold text-info'>4. Connect Globally</h3>
						<p className='text-gray-600'>Engage with a global community of history lovers and artifact collectors.</p>
					</div>
				</li>
			</ul>
		</div>
	);
};

export default HowItWorks;
