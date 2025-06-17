import { useEffect, useState } from "react";
import { FaArrowLeft, FaHeart, FaRegHeart } from "react-icons/fa";
import { useLoaderData, useNavigate } from "react-router";
import { toast } from "react-toastify";
import useAuth from "../../hooks/useAuth";
import SiteTitle from "../../components/SiteTitle";
import useArtifactsApi from "../../hooks/useArtifactsApi";

const ArtifactDetails = () => {
	const artifactData = useLoaderData();
	const [artifact, setArtifact] = useState(artifactData);
	const [liked, setLiked] = useState(false);
	const navigate = useNavigate();
	const { user } = useAuth();

	const userEmail = user?.email;
	const { getLikedArtifactsPromise, toggleLikeArtifactPromise } = useArtifactsApi();

	useEffect(() => {
		getLikedArtifactsPromise()
			.then((res) => {
				const likedArtifacts = res;
				const isLiked = likedArtifacts.some((a) => a._id === artifact._id);
				setLiked(isLiked);
			})
			.catch((err) => {
				console.error("Failed to fetch liked artifacts:", err);
				toast.error("Could not fetch liked status.");
			});
	}, [artifact._id]);

	const toggleLike = () => {
		if (!userEmail) {
			toast.warn("Please log in to like artifacts.");
			return;
		}

		toggleLikeArtifactPromise(artifact._id)
			.then((res) => {
				if (res.liked === true) {
					setArtifact({ ...artifact, likes: artifact.likes + 1 });
					setLiked(true);
					toast.success("Artifact liked!");
				} else if (res.liked === false) {
					setArtifact({ ...artifact, likes: artifact.likes - 1 });
					setLiked(false);
					toast.info("Artifact disliked.");
				}
			})
			.catch((err) => {
				console.error("Failed to toggle like:", err);
				toast.error(err.message || "Failed to toggle like");
			});
	};

	return (
		<div className='max-w-4xl mx-auto p-6'>
			<SiteTitle>{artifact.name}</SiteTitle>
			<div className='card bg-base-100 shadow-xl overflow-hidden'>
				<figure>
					<img
						src={artifact.image}
						alt={artifact.name}
						className='w-full h-96 object-cover transition duration-300 hover:scale-105'
					/>
				</figure>

				<div className='card-body space-y-4'>
					<button
						className='btn btn-primary btn-outline btn-circle btn-sm cursor-pointer'
						onClick={() => navigate(-1)}
					>
						<FaArrowLeft />
					</button>
					<h2 className='card-title text-3xl font-bold text-primary'>{artifact.name}</h2>
					<p className='text-gray-600'>{artifact.shortDescription}</p>

					<div className='grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-700'>
						<p>
							<span className='font-bold'>Type:</span> {artifact.type}
						</p>
						<p>
							<span className='font-bold'>Context:</span> {artifact.context}
						</p>
						<p>
							<span className='font-bold'>Created At:</span> {artifact.createdAt}
						</p>
						<p>
							<span className='font-bold'>Discovered At:</span> {artifact.discoveredAt}
						</p>
						<p>
							<span className='font-bold'>Discovered By:</span> {artifact.discoveredBy}
						</p>
						<p>
							<span className='font-bold'>Location:</span> {artifact.location}
						</p>
					</div>

					<div className='mt-6 flex items-center justify-between'>
						<button
							onClick={toggleLike}
							className={`btn transition-all duration-300 ${liked ? "btn-error" : "btn-outline"} rounded-full gap-2`}
						>
							{liked ? <FaHeart className='text-xl animate-pulse' /> : <FaRegHeart className='text-xl' />}
							<span>{artifact.likes}</span>
						</button>

						<div className='badge badge-secondary badge-lg badge-outline badge-soft rounded-full px-4 py-2 shadow-inner text-xs sm:text-base'>
							<FaHeart className='text-red-500' /> Appreciation matters!
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ArtifactDetails;
