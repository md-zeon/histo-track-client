import { useEffect, useState } from "react";
import { FaEye, FaClock } from "react-icons/fa";
import { Link, useNavigate } from "react-router";
import { motion } from "framer-motion";
import Loader from "../../components/ui/Loader";

const RecentlyAddedArtifacts = () => {
	const [artifacts, setArtifacts] = useState([]);
	const [loading, setLoading] = useState(true);
	const navigate = useNavigate();

	useEffect(() => {
		fetch("https://histotrack-server.vercel.app/artifacts")
			.then((res) => res.json())
			.then((data) => setArtifacts(data.reverse().slice(0, 8)))
			.finally(() => setLoading(false));
	}, []);

	if (loading) <Loader />;

	return (
		<section className='px-2 py-20'>
			<div className='text-center mb-10'>
				<h2 className='text-4xl font-bold mb-2'> Recently Added Artifacts</h2>
				<p className='text-gray-600 max-w-2xl mx-auto'>
					Discover the latest historical treasures added by our global community—each artifact tells a fresh story from
					the past.
				</p>
			</div>

			<div className='overflow-x-auto hide-scrollbar'>
				<div className='flex gap-6 w-max'>
					{artifacts.map((artifact, index) => (
						<motion.div
							key={artifact._id}
							initial={{ opacity: 0, scale: 0.95 }}
							whileInView={{ opacity: 1, scale: 1 }}
							viewport={{ once: true }}
							transition={{ duration: 0.4, delay: index * 0.1 }}
							className='relative w-[280px] h-[360px] rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-base-100 to-base-300 group cursor-pointer'
							onClick={() => navigate(`/artifacts/${artifact._id}`)}
						>
							<img
								src={artifact.image}
								alt={artifact.name}
								className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 sm:scale-100 scale-110 brightness-[.9]'
							/>

							{/* Overlay */}
							<div className='absolute inset-0 bg-black/60 backdrop-blur-sm sm:opacity-0 group-hover:opacity-100 opacity-100 transition duration-300 text-white flex flex-col justify-end p-4'>
								<h3 className='text-lg font-bold mb-1'>{artifact.name}</h3>
								<p className='text-sm text-gray-200 line-clamp-3 mb-3'>{artifact.shortDescription}</p>
								<div className='flex items-center justify-between text-xs text-gray-400'>
									<span className='flex items-center gap-1'>
										<FaClock /> {artifact.createdAt?.split("T")[0] || "Unknown"}
									</span>
									<Link
										to={`/artifacts/${artifact._id}`}
										className='text-primary-content hover:underline flex items-center gap-1 font-semibold'
									>
										View <FaEye />
									</Link>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>

			<div className='text-center mt-12'>
				<Link
					to='/all-artifacts'
					className='btn btn-wide btn-primary'
				>
					View All Artifacts
				</Link>
			</div>
		</section>
	);
};

export default RecentlyAddedArtifacts;
