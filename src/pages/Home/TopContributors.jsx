import { useEffect, useState } from "react";

const TopContributors = () => {
	const [contributors, setContributors] = useState([]);

	useEffect(() => {
		fetch("https://histotrack-server.vercel.app/artifacts")
			.then((res) => res.json())
			.then((data) => {
				const userStats = {};

				data.forEach((artifact) => {
					const email = artifact.adderEmail;
					const name = artifact.adderName || email;

					if (!userStats[email]) {
						userStats[email] = {
							name,
							artifacts: 0,
							likes: 0,
						};
					}

					userStats[email].artifacts += 1;
					userStats[email].likes += artifact.likes || 0;
				});

				const sortedContributors = Object.values(userStats)
					.sort((a, b) => b.likes - a.likes)
					.slice(0, 3);

				setContributors(sortedContributors);
			});
	}, []);

	return (
		<section className='py-16 bg-base-200 rounded-xl'>
			<div className='max-w-5xl mx-auto px-6 text-center'>
				<h2 className='text-4xl font-bold mb-10'>Top Contributors</h2>
				<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
					{contributors.map((user, idx) => (
						<div
							key={idx}
							className='relative overflow-hidden bg-base-100 pb-6 pr-6 pl-8 pt-8  rounded-[5px_20px_5px_20px] shadow hover:shadow-md transition text-left space-y-2'
						>
							<div className='flex gap-3 mb-2'>
								<div className='text-3xl absolute -top-1 -left-1 text-center font-bold text-amber-400 w-10 h-10 bg-accent rounded-full'>
									<span>{idx + 1}</span>
								</div>
								<h4 className='text-xl font-semibold'>{user.name}</h4>
							</div>
							<p className='text-sm text-gray-600'>
								Artifacts Contributed: <span className='font-bold'>{user.artifacts}</span>
							</p>
							<p className='text-sm text-gray-600'>
								Total Likes: <span className='font-bold'>{user.likes}</span>
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default TopContributors;
