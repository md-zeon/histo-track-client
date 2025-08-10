import { useRef, useState, useEffect } from "react";
import { FaSearch, FaHeart, FaLandmark, FaRegClock } from "react-icons/fa";
import { Link, useLoaderData } from "react-router";
import Loader from "../../components/ui/Loader";
import SiteTitle from "../../components/SiteTitle";

const AllArtifacts = () => {
	const initialData = useLoaderData() || [];
	const [artifacts, setArtifacts] = useState(initialData);
	const [filtered, setFiltered] = useState(initialData);
	const [loading, setLoading] = useState(false);
	const [category, setCategory] = useState("all");
	const [sortBy, setSortBy] = useState("name");
	const [sortOrder, setSortOrder] = useState("asc");
	const searchRef = useRef(null);
	const handleSearch = (e) => {
		e.preventDefault();
		const searchText = searchRef.current.value;
		setLoading(true);

		fetch(`https://histotrack-server.vercel.app/artifacts?search=${searchText}`)
			.then((res) => res.json())
			.then((data) => {
				setArtifacts(data);
				setLoading(false);
			})
			.catch((err) => {
				console.log(err);
				setLoading(false);
			});
	};
	useEffect(() => {
		let updated = [...artifacts];

		if (category !== "all") {
			updated = updated.filter((item) => item.type === category);
		}

		updated.sort((a, b) => {
			switch (sortBy) {
				case "likes":
					return (a.likes || 0) - (b.likes || 0);
				case "name":
					return a.name.localeCompare(b.name);
				case "date":
					return new Date(a.createdAt) - new Date(b.createdAt);
				default:
					return 0;
			}
		});

		if (sortOrder === "desc") {
			updated.reverse();
		}

		setFiltered(updated);
	}, [artifacts, category, sortBy, sortOrder]);

	return (
		<div className='max-w-7xl mx-auto px-4 py-10'>
			<SiteTitle>All Artifacts</SiteTitle>
			<h2 className='text-3xl font-bold text-center mb-4'>
				<FaLandmark className='inline' /> All Artifacts
			</h2>
			<p className='text-center text-gray-600 dark:text-gray-400 max-w-xl mx-auto mb-10'>
				Explore history through every shared artifact. Search, filter, and discover hidden gems.
			</p>

			<form
				onSubmit={handleSearch}
				className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 bg-base-200 p-6 mb-10'
			>
				<div>
					<label className='label'>
						<span className='label-text font-semibold'>Type</span>
					</label>
					<select
						value={category}
						onChange={(e) => setCategory(e.target.value)}
						className='select select-bordered w-full'
					>
						<option value='all'>All Types</option>
						<option value='Tools'>Tools</option>
						<option value='Weapons'>Weapons</option>
						<option value='Documents'>Documents</option>
						<option value='Writings'>Writings</option>
						<option value='Others'>Others</option>
					</select>
				</div>

				<div>
					<label className='label'>
						<span className='label-text font-semibold'>Sort By</span>
					</label>
					<select
						value={sortBy}
						onChange={(e) => setSortBy(e.target.value)}
						className='select select-bordered w-full'
					>
						<option value='name'>Name</option>
						<option value='date'>Date</option>
						<option value='likes'>Likes</option>
					</select>
				</div>

				<div>
					<label className='label'>
						<span className='label-text font-semibold'>Order</span>
					</label>
					<select
						value={sortOrder}
						onChange={(e) => setSortOrder(e.target.value)}
						className='select select-bordered w-full'
					>
						<option value='asc'>Ascending</option>
						<option value='desc'>Descending</option>
					</select>
				</div>

				<div className='md:col-span-1'>
					<label className='label'>
						<span className='label-text font-semibold'>Search</span>
					</label>
					<div className='flex'>
						<div className='relative flex-1'>
							<FaSearch className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500' />
							<input
								ref={searchRef}
								type='search'
								placeholder='Search artifacts...'
								className='input input-bordered pl-10 w-full'
							/>
						</div>
						<button
							type='submit'
							className='btn btn-primary ml-2'
						>
							Search
						</button>
					</div>
				</div>
			</form>

			{loading ? (
				<Loader />
			) : filtered.length === 0 ? (
				<p className='text-center text-gray-500'>No artifacts match your criteria.</p>
			) : (
				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
					{filtered.map((artifact) => (
						<div
							key={artifact._id}
							className='rounded-xl overflow-hidden bg-base-100 dark:bg-base-200 shadow-md hover:shadow-xl transition duration-300 group flex flex-col'
						>
							<figure className='relative'>
								<img
									src={artifact.image}
									alt={artifact.name}
									className='w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300'
								/>
								<span className='absolute top-2 left-2 badge badge-primary capitalize'>{artifact.type}</span>
							</figure>
							<div className='p-5 flex flex-col gap-2 flex-1'>
								<h3 className='text-lg font-semibold text-neutral dark:text-primary group-hover:text-primary transition'>
									{artifact.name}
								</h3>
								<p className='text-sm text-gray-600 dark:text-gray-400 line-clamp-2'>{artifact.shortDescription}</p>
								<div className='text-sm text-gray-500 flex items-center gap-2 mt-auto'>
									<FaRegClock /> {artifact.createdAt?.split("T")[0] || "Unknown"}
								</div>
								<div className='flex justify-between items-center mt-3'>
									<div className='flex items-center gap-1 text-red-500'>
										<FaHeart /> {artifact.likes || 0}
									</div>
									<Link
										to={`/artifacts/${artifact._id}`}
										className='btn btn-sm btn-outline btn-primary'
									>
										Details
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