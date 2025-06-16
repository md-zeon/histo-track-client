import axios from "axios";
import { useRef, useState } from "react";
import {
	FaHeart,
	FaBookOpen,
	FaRegClock,
	FaSearchLocation,
	FaUserAlt,
	FaMapMarkerAlt,
	FaLandmark,
	FaSearch,
} from "react-icons/fa";
import { Link, useLoaderData } from "react-router";

const AllArtifacts = () => {
	const [artifacts, setArtifacts] = useState(useLoaderData() || []);
	const searchRef = useRef(null);
	const handleSearch = (e) => {
		e.preventDefault();

	};

	return (
		<div className='max-w-7xl mx-auto px-4 py-10'>
			<h2 className='text-3xl font-bold text-center mb-12'>
				<FaLandmark className='inline' /> All Artifacts
			</h2>

			<form
				onSubmit={handleSearch}
				className='join'
			>
				<div>
					<div>
						<label className='input'>
							<FaSearch className='mr-2' />
							<input
								type='search'
								ref={searchRef}
								required
								placeholder='Search'
							/>
						</label>
					</div>
				</div>
				<div className='indicator'>
					<span className='indicator-item badge badge-secondary'>new</span>
					<button className='btn join-item'>Search</button>
				</div>
			</form>

			{artifacts.length === 0 ? (
				<div className='text-center text-gray-500'>No artifacts found.</div>
			) : (
				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
					{artifacts.map((artifact) => (
						<div
							key={artifact._id}
							className='card bg-base-100 shadow-md hover:shadow-xl transition duration-300'
						>
							<figure className='relative'>
								<img
									src={artifact.image}
									alt={artifact.name}
									className='h-56 w-full object-cover'
								/>
								<div className='absolute bottom-2 right-2'>
									<span className='badge badge-primary badge-md capitalize'>{artifact.type}</span>
								</div>
							</figure>

							<div className='card-body'>
								<h3 className='card-title text-xl font-semibold text-neutral'>{artifact.name}</h3>
								<p className='text-sm text-gray-500 mb-2'>{artifact.shortDescription}</p>

								<div className='text-sm text-gray-600 space-y-1'>
									<p className='flex items-center gap-2'>
										<FaBookOpen />
										<span className='font-bold'>Context:</span> {artifact.context}
									</p>
									<p className='flex items-center gap-2'>
										<FaRegClock />
										<span className='font-bold'>Created At:</span> {artifact.createdAt}
									</p>
									<p className='flex items-center gap-2'>
										<FaSearchLocation />
										<span className='font-bold'>Discovered At:</span> {artifact.discoveredAt}
									</p>
									<p className='flex items-center gap-2'>
										<FaUserAlt />
										<span className='font-bold'>Discovered By:</span> {artifact.discoveredBy}
									</p>
									<p className='flex items-center gap-2'>
										<FaMapMarkerAlt />
										<span className='font-bold'>Location:</span> {artifact.location}
									</p>
								</div>

								<div className='flex justify-between items-center mt-4'>
									<div className='group flex items-center gap-1 text-pink-600 font-medium'>
										<FaHeart className='transition-transform duration-300 group-hover:scale-125 group-hover:text-rose-500' />
										<span>{artifact.likes}</span>
									</div>

									<Link
										to={`/artifact/${artifact._id}`}
										className='btn btn-outline btn-sm rounded-full'
									>
										View Details
									</Link>
								</div>
							</div>
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default AllArtifacts;
