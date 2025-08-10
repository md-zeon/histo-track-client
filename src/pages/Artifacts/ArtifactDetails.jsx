import { useEffect, useState } from "react";
import { FaArrowLeft, FaCalendarAlt, FaHeart, FaMapMarkerAlt, FaRegHeart, FaShareAlt } from "react-icons/fa";
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
	const handleShare = () => {
		navigator.clipboard.writeText(window.location.href);
		toast.success("Link copied to clipboard!");
	};

	return (
		<div className='px-6 py-12'>
			<SiteTitle>{artifact.name}</SiteTitle>

			<button
				onClick={() => navigate(-1)}
				className='mb-6 inline-flex cursor-pointer items-center gap-2 text-primary hover:underline'
			>
				<FaArrowLeft /> Go Back
			</button>

			<div className='grid grid-cols-1 md:grid-cols-2 gap-10 items-start'>
				{/* Image */}
				<div className='rounded-xl overflow-hidden shadow-lg'>
					<img
						src={artifact.image}
						alt={artifact.name}
						className='w-full h-[400px] object-cover transition hover:scale-105 duration-300'
					/>
				</div>

				{/* Content */}
				<div className='space-y-6'>
					<h1 className='text-4xl font-bold text-primary'>{artifact.name}</h1>

					<div className='flex flex-wrap items-center gap-6 text-sm text-gray-400'>
						<span className='flex items-center gap-1'>
							<FaHeart className='text-rose-500' /> {artifact.likes} likes
						</span>
					</div>

					<div className='grid sm:grid-cols-2 gap-4'>
						<div className='bg-base-200 rounded-lg p-4 border border-base-300'>
							<p className='text-xs text-gray-400 font-medium flex items-center gap-1'>
								<FaCalendarAlt /> Period
							</p>
							<p className='font-semibold text-lg'>{artifact.createdAt || "Unknown"}</p>
						</div>
						<div className='bg-base-200 rounded-lg p-4 border border-base-300'>
							<p className='text-xs text-gray-400 font-medium flex items-center gap-1'>
								<FaMapMarkerAlt /> Location
							</p>
							<p className='font-semibold text-lg'>{artifact.location || "Unknown"}</p>
						</div>
					</div>

					<div className='bg-base-200 rounded-lg p-5 border border-base-300'>
						<h3 className='text-xl font-semibold mb-2'>Description</h3>
						<p className='text-base-content'>{artifact.shortDescription}</p>
					</div>

					<div className='bg-base-200 rounded-lg p-5 border border-base-300'>
						<h3 className='text-xl font-semibold mb-2'>Technical Details</h3>
						<ul className='text-base-content space-y-1'>
							<li>
								<strong>Type:</strong> {artifact.type}
							</li>
							<li>
								<strong>Context:</strong> {artifact.context}
							</li>
							<li>
								<strong>Discovered At:</strong> {artifact.discoveredAt}
							</li>
							<li>
								<strong>Discovered By:</strong> {artifact.discoveredBy}
							</li>
						</ul>
					</div>
					<div className='flex flex-wrap items-center gap-4 pt-4'>
						<button
							onClick={toggleLike}
							className={`btn transition-all duration-300 ${liked ? "btn-error" : "btn-outline"} rounded-full gap-2`}
						>
							{liked ? <FaHeart className='text-xl animate-pulse' /> : <FaRegHeart className='text-xl' />}
							<span>{liked ? "Liked" : "Like"} Artifact</span>
						</button>

						<button
							onClick={handleShare}
							className='btn btn-outline btn-info rounded-full gap-2'
						>
							<FaShareAlt /> Share
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ArtifactDetails;
