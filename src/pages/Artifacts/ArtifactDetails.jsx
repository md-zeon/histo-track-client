import { useEffect, useState } from "react";
import axios from "axios";
import { FaArrowLeft, FaHeart, FaRegHeart } from "react-icons/fa";
import { useLoaderData, useNavigate } from "react-router";
import { toast } from "react-toastify";

const ArtifactDetails = () => {
	const artifactData = useLoaderData();
	const [artifact, setArtifact] = useState(artifactData);
	const [liked, setLiked] = useState(localStorage.getItem(`liked-${artifact._id}`) === "true");
    const navigate = useNavigate();

	useEffect(() => {
		localStorage.setItem(`liked-${artifact._id}`, JSON.stringify(liked));
	}, [liked, artifact._id]);

	const toggleLike = () => {
		const newLikedState = !liked;
		axios
			.patch(`http://localhost:3000/artifacts/toggle-like/${artifact._id}`, { liked: newLikedState })
			.then((res) => {
				if (res.data.modifiedCount) {
					setArtifact({ ...artifact, likes: newLikedState ? artifact.likes + 1 : artifact.likes - 1 });
					setLiked(newLikedState);
				}
			})
			.catch((err) => {
				console.error("Failed to toggle like:", err);
				toast.error(err.message);;
			});
	};
	return (
		<div className='max-w-4xl mx-auto p-6'>
			<div className='card bg-base-100 shadow-xl overflow-hidden'>
				<figure>
					<img
						src={artifact.image}
						alt={artifact.name}
						className='w-full h-96 object-cover transition duration-300 hover:scale-105'
					/>
				</figure>

				<div className='card-body space-y-4'>
                    <button className="btn btn-primary btn-outline btn-circle btn-sm  cursor-pointer" onClick={() => navigate(-1)}><FaArrowLeft /></button>
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

						<div className='badge badge-secondary badge-lg badge-outline badge-soft rounded-full px-4 py-2 shadow-inner'><FaHeart  className="text-red-500"/> Appreciation matters!</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ArtifactDetails;
