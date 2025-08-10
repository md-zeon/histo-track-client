import { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import SiteTitle from "../../components/SiteTitle";
import useArtifactsApi from "../../hooks/useArtifactsApi";
import useAuth from "../../hooks/useAuth";
import Loader from "../../components/ui/Loader";

const LikedArtifacts = () => {
	const [likedArtifacts, setLikedArtifacts] = useState([]);
	const navigate = useNavigate();
	const { getLikedArtifactsPromise } = useArtifactsApi();
	const [loading, setLoading] = useState(true);
	const { user } = useAuth();

	useEffect(() => {
		if (!user?.email) return;
		getLikedArtifactsPromise()
			.then((res) => {
				setLikedArtifacts(res);
			})
			.catch((err) => {
				console.error("Failed to fetch liked artifacts:", err);
				toast.error("Could not fetch liked artifacts.");
			})
			.finally(() => {
				setLoading(false);
			});
	}, [user.email]);
	if (loading) return <Loader />;

	return (
		<div className='max-w-6xl mx-auto p-6'>
			<SiteTitle>Liked Artifacts</SiteTitle>
			<h1 className='text-3xl font-bold mb-6'>Your Liked Artifacts</h1>
			{likedArtifacts.length === 0 ? (
				<p className='text-gray-600 dark:text-gray-400'>You haven't liked any artifacts yet.</p>
			) : (
				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
					{likedArtifacts.map((artifact) => (
						<div
							key={artifact._id}
							className='card bg-base-100 shadow-md cursor-pointer'
							onClick={() => navigate(`/artifacts/${artifact._id}`)}
						>
							<figure>
								<img
									src={artifact.image}
									alt={artifact.name}
									className='h-48 w-full object-cover rounded-t-md'
								/>
							</figure>
							<div className='card-body'>
								<h2 className='card-title'>{artifact.name}</h2>
								<p className='text-sm text-gray-600 dark:text-gray-400 truncate'>{artifact.shortDescription}</p>
								<div className='mt-2 flex items-center gap-2 text-red-500'>
									<FaHeart /> <span>{artifact.likes || 0}</span>
								</div>
							</div>
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default LikedArtifacts;
