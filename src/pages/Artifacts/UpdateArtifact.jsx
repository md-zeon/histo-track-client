import Swal from "sweetalert2";
import { FiEdit, FiImage, FiType, FiClock, FiUser, FiMapPin, FiBookOpen, FiCalendar, FiMail } from "react-icons/fi";
import { toast } from "react-toastify";
import { useLoaderData } from "react-router";
import SiteTitle from "../../components/SiteTitle";
import useArtifactsApi from "../../hooks/useArtifactsApi";

const UpdateArtifact = () => {
	const artifact = useLoaderData();
	const { updateArtifactPromise } = useArtifactsApi();

	const handleSubmit = async (e) => {
		e.preventDefault();

		const form = e.target;
		const formData = new FormData(form);
		const data = Object.fromEntries(formData.entries());

		const updatedArtifact = {
			...data,
		};
		// console.log(updatedArtifact);
		Swal.fire({
			title: "Are you sure?",

			text: "You Want to Update the artifact info",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, Update it!",
		}).then((result) => {
			if (result.isConfirmed) {
				updateArtifactPromise(artifact._id, updatedArtifact)
					.then((res) => {
						// console.log(res);
						if (res.modifiedCount) {
							Swal.fire({
								title: "Success!",
								text: "Artifact Updated successfully!",
								icon: "success",
								confirmButtonText: "OK",
							});
						} else {
							Swal.fire({
								title: "Error!",
								text: "Something went wrong!",
								icon: "error",
								confirmButtonText: "OK",
							});
						}
					})
					.catch((err) => {
						console.log(err);
						toast.error(err.message);
					});
			} else {
				Swal.fire({
					title: "Cancelled",
					text: "Your artifact info is safe :)",
					icon: "error",
					confirmButtonText: "OK",
				});
			}
		});
	};

	return (
		<div className='max-w-4xl mx-auto px-4 py-10'>
			<SiteTitle>Update Artifact</SiteTitle>
			<h2 className='text-3xl font-bold text-center mb-8'>
				<FiEdit className='inline' /> Update Artifact Info
			</h2>

			<form
				onSubmit={handleSubmit}
				className='grid grid-cols-1 md:grid-cols-2 gap-6'
			>
				{/* Name */}
				<div>
					<label className='label'>
						<span className='label-text flex items-center gap-1'>
							<FiEdit /> Artifact Name
						</span>
					</label>
					<input
						name='name'
						type='text'
						defaultValue={artifact.name}
						placeholder='Artifact Name'
						className='input input-bordered w-full'
						required
					/>
				</div>

				{/* Image URL */}
				<div>
					<label className='label'>
						<span className='label-text flex items-center gap-1'>
							<FiImage /> Image URL
						</span>
					</label>
					<input
						name='image'
						defaultValue={artifact.image}
						type='url'
						placeholder='Image URL'
						className='input input-bordered w-full'
						required
					/>
				</div>

				{/* Type */}
				<div>
					<label className='label'>
						<span className='label-text flex items-center gap-1'>
							<FiType /> Artifact Type
						</span>
					</label>
					<select
						name='type'
						defaultValue={artifact.type}
						className='select select-bordered w-full'
						required
					>
						<option value=''>Select Type</option>
						<option>Tools</option>
						<option>Weapons</option>
						<option>Documents</option>
						<option>Writings</option>
						<option>Others</option>
					</select>
				</div>

				{/* Context */}
				<div>
					<label className='label'>
						<span className='label-text flex items-center gap-1'>
							<FiBookOpen /> Historical Context
						</span>
					</label>
					<input
						name='context'
						type='text'
						defaultValue={artifact.context}
						placeholder='Context (e.g., Egyptian Era)'
						className='input input-bordered w-full'
						required
					/>
				</div>

				{/* Short Description */}
				<div className='md:col-span-2'>
					<label className='label'>
						<span className='label-text flex items-center gap-1'>
							<FiEdit /> Short Description
						</span>
					</label>
					<textarea
						name='shortDescription'
						defaultValue={artifact.shortDescription}
						placeholder='Short Description'
						className='textarea h-24 w-full'
						required
					></textarea>
				</div>

				{/* Created At */}
				<div>
					<label className='label'>
						<span className='label-text flex items-center gap-1'>
							<FiClock /> Created At
						</span>
					</label>
					<input
						name='createdAt'
						type='text'
						defaultValue={artifact.createdAt}
						placeholder='e.g., 100 BC'
						className='input input-bordered w-full'
						required
					/>
				</div>

				{/* Discovered At */}
				<div>
					<label className='label'>
						<span className='label-text flex items-center gap-1'>
							<FiCalendar /> Discovered At
						</span>
					</label>
					<input
						name='discoveredAt'
						type='text'
						defaultValue={artifact.discoveredAt}
						placeholder='e.g., 1799'
						className='input input-bordered w-full'
						required
					/>
				</div>

				{/* Discovered By */}
				<div>
					<label className='label'>
						<span className='label-text flex items-center gap-1'>
							<FiUser /> Discovered By
						</span>
					</label>
					<input
						name='discoveredBy'
						type='text'
						defaultValue={artifact.discoveredBy}
						placeholder='e.g., Pierre-François Bouchard'
						className='input input-bordered w-full'
						required
					/>
				</div>

				{/* Location */}
				<div>
					<label className='label'>
						<span className='label-text flex items-center gap-1'>
							<FiMapPin /> Present Location
						</span>
					</label>
					<input
						name='location'
						type='text'
						defaultValue={artifact.location}
						placeholder='e.g., British Museum, London'
						className='input input-bordered w-full'
						required
					/>
				</div>

				{/* Submit */}
				<div className='md:col-span-2'>
					<button
						type='submit'
						className='btn btn-primary w-full'
					>
						Update Artifact
					</button>
				</div>
			</form>
		</div>
	);
};

export default UpdateArtifact;
