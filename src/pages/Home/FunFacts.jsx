import { FaLightbulb } from "react-icons/fa";
import { motion } from "framer-motion";

const facts = [
	"The Rosetta Stone helped decode ancient Egyptian hieroglyphs.",
	"The Antikythera Mechanism is the world's first analog computer.",
	"Some ancient scrolls were preserved under volcanic ash for centuries.",
];

const FunFacts = () => {
	return (
		<section className='max-w-7xl mx-auto px-2 py-20'>
			<div className='text-center mb-12'>
				<h2 className='text-4xl font-bold mb-4'>Did You Know?</h2>
				<p className='text-gray-600 dark:text-gray-400 max-w-2xl mx-auto'>
					Historical trivia that will spark your curiosity and appreciation for the past.
				</p>
			</div>

			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
				{facts.map((fact, index) => (
					<motion.div
						key={index}
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: index * 0.2 }}
						className='card bg-base-100 shadow-md hover:shadow-lg transition rounded-xl p-6 border-l-4 border-primary'
					>
						<div className='flex items-start gap-4'>
							<FaLightbulb className='text-primary text-3xl mt-1' />
							<p className='text-gray-700 dark:text-gray-300 text-lg font-medium leading-relaxed'>{fact}</p>
						</div>
					</motion.div>
				))}
			</div>
		</section>
	);
};

export default FunFacts;
