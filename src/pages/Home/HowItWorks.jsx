import { FaSearch, FaHeart, FaPlusCircle, FaGlobe } from "react-icons/fa";
import { motion } from "framer-motion";

const HowItWorks = () => {
	const titleVariants = {
		hidden: { opacity: 0, y: -20 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
	};

	const itemVariants = {
		hidden: { opacity: 0, x: (index) => (index % 2 === 0 ? -50 : 50) },
		visible: (index) => ({
			opacity: 1,
			x: 0,
			transition: { duration: 0.6, delay: index * 0.2 },
		}),
	};

	return (
		<div className='max-w-5xl mx-auto px-4 py-16'>
			<motion.h2
				className='text-4xl font-bold text-center mb-2'
				variants={titleVariants}
				initial='hidden'
				animate='visible'
			>
				How It Works
			</motion.h2>
			<p className='text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto text-center'>
				Explore how Histo Track connects history lovers around the world. Learn how to find, share, and contribute
				historical artifacts in just a few easy steps.
			</p>

			<ul className='timeline timeline-snap-icon max-md:timeline-compact timeline-vertical'>
				{/* Step 1 */}
				<motion.li
					custom={0}
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true }}
					variants={itemVariants}
				>
					<div className='timeline-middle bg-primary text-white p-2 rounded shadow-lg'>
						<FaSearch className='text-lg' />
					</div>
					<div className='timeline-start md:text-end mb-10 p-3 border border-primary rounded-xl'>
						<h3 className='text-xl font-semibold text-primary'>1. Discover Artifacts</h3>
						<p className='text-gray-600 dark:text-gray-400'>
							Browse through a world of historical treasures uploaded by enthusiasts like you.
						</p>
					</div>
					<hr />
				</motion.li>

				{/* Step 2 */}
				<motion.li
					custom={1}
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true }}
					variants={itemVariants}
				>
					<div className='timeline-middle bg-secondary text-white p-2 rounded shadow-lg'>
						<FaHeart className='text-lg' />
					</div>
					<div className='timeline-end mb-10 p-3 border border-secondary rounded-xl'>
						<h3 className='text-xl font-semibold text-secondary'>2. Like & Save</h3>
						<p className='text-gray-600 dark:text-gray-400'>Show appreciation and bookmark your favorite artifacts for quick access.</p>
					</div>
					<hr />
				</motion.li>

				{/* Step 3 */}
				<motion.li
					custom={2}
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true }}
					variants={itemVariants}
				>
					<div className='timeline-middle bg-accent text-white p-2 rounded shadow-lg'>
						<FaPlusCircle className='text-lg' />
					</div>
					<div className='timeline-start md:text-end mb-10 p-3 border border-accent rounded-xl'>
						<h3 className='text-xl font-semibold text-accent'>3. Add Your Own</h3>
						<p className='text-gray-600 dark:text-gray-400'>Contribute by uploading your own historical discoveries and stories.</p>
					</div>
					<hr />
				</motion.li>

				{/* Step 4 */}
				<motion.li
					custom={3}
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true }}
					variants={itemVariants}
				>
					<div className='timeline-middle bg-neutral text-white p-2 rounded shadow-lg'>
						<FaGlobe className='text-lg' />
					</div>
					<div className='timeline-end mb-10 p-3 border border-neutral rounded-xl'>
						<h3 className='text-xl font-semibold text-neutral'>4. Connect Globally</h3>
						<p className='text-gray-600 dark:text-gray-400'>Engage with a global community of history lovers and artifact collectors.</p>
					</div>
				</motion.li>
			</ul>
		</div>
	);
};

export default HowItWorks;
