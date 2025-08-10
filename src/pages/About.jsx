import { FaGlobe, FaCogs, FaUserFriends, FaHistory } from "react-icons/fa";
import { motion } from "framer-motion";
import SiteTitle from "../components/SiteTitle";
import { Link } from "react-router";

const features = [
	{
		icon: <FaGlobe />,
		title: "Global Collection",
		desc: "Artifacts from every culture, country, and era.",
	},
	{
		icon: <FaCogs />,
		title: "Tech-Driven",
		desc: "Built with React, MongoDB, Firebase, and modern UI libraries.",
	},
	{
		icon: <FaUserFriends />,
		title: "User-Powered",
		desc: "Every artifact is submitted and liked by the community.",
	},
	{
		icon: <FaHistory />,
		title: "Preserving Legacy",
		desc: "Helping preserve the stories behind historical objects.",
	},
];

const About = () => {
	return (
		<div className='max-w-7xl mx-auto px-6 py-16'>
			<SiteTitle>About HistoTrack</SiteTitle>
			<section className='text-center mb-20'>
				<h2 className='text-4xl font-extrabold mb-4 text-primary inline-block'>
					Preserving History, One Artifact at a Time
				</h2>
				<p className='text-gray-600 dark:text-gray-400 max-w-3xl mx-auto text-lg'>
					HistoTrack is a global platform dedicated to the discovery, curation, and preservation of historical
					artifacts. Whether you're a passionate historian, curious learner, or researcher—your journey through time
					begins here.
				</p>
			</section>

			<section className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24'>
				<div className='space-y-5'>
					<h3 className='text-3xl font-bold text-primary'>Our Mission</h3>
					<p className='text-gray-700 dark:text-gray-300 text-lg'>
						We aim to democratize access to cultural heritage by creating a platform where people can explore, submit,
						and preserve artifacts from across the globe.
					</p>
					<p className='text-gray-700 dark:text-gray-300 text-lg'>
						By combining modern technologies and community contributions, HistoTrack is building a timeless digital
						archive for the curious minds of today and the generations of tomorrow.
					</p>
				</div>
				<motion.img
					initial={{ opacity: 0, scale: 0.95 }}
					whileInView={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5 }}
					src='https://i.ibb.co/tTvtVfzT/about.jpg'
					alt='About HistoTrack'
					className='rounded-2xl shadow-xl h-72 w-full object-cover'
				/>
			</section>

			<section className='mb-24'>
				<h3 className='text-3xl font-bold text-center mb-12'>What Makes HistoTrack Unique?</h3>
				<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6'>
					{features.map(({ icon, title, desc }, index) => (
						<motion.div
							key={index}
							whileHover={{ y: -5 }}
							className='p-6 bg-base-200 rounded-xl text-center shadow-md transition-all'
						>
							<div className='text-4xl text-primary mb-3 flex items-center justify-center'>{icon}</div>
							<h4 className='font-semibold text-lg'>{title}</h4>
							<p className='text-sm text-gray-600 dark:text-gray-400'>{desc}</p>
						</motion.div>
					))}
				</div>
			</section>

			<section className='text-center'>
				<h3 className='text-2xl font-bold mb-4'>Want to Get Involved?</h3>
				<p className='text-gray-700 dark:text-gray-300 mb-6 max-w-xl mx-auto'>
					Create an account to share your own discoveries or explore artifacts submitted by others. Together, we can
					build a timeless archive of human history.
				</p>
				<Link
					to='/register'
					className='btn btn-primary btn-wide text-lg'
				>
					Join the Community
				</Link>
			</section>
		</div>
	);
};

export default About;
