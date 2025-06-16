import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { FiEdit, FiImage, FiType, FiGlobe, FiClock, FiUser, FiMapPin, FiBookOpen, FiCalendar, FiMail } from "react-icons/fi";
import axios from "axios";
import { toast } from "react-toastify";

const AddArtifact = () => {
	const { user } = useAuth();

	const handleSubmit = async (e) => {
		e.preventDefault();

		const form = e.target;
		const formData = new FormData(form);
		const data = Object.fromEntries(formData.entries());

		const artifact = {
			...data,
			adderName: user?.displayName || "Anonymous",
			adderEmail: user?.email || "anonymous@example.com",
			likes: 0,
		};
		console.log(artifact);
		axios.post("http://localhost:3000/artifacts", artifact).then((res) => {
			console.log(res.data);
			if (res.data.insertedId) {
				Swal.fire({
					title: "Success!",
					text: "Artifact added successfully!",
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
		}).catch((err) => {
			console.log(err);
			toast.error(err.message	);
		})
	};

	return (
		<div className='max-w-4xl mx-auto px-4 py-10'>
			<h2 className='text-3xl font-bold text-center mb-8'>
				<FiGlobe className='inline' /> Add Historical Artifact
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
						placeholder='e.g., British Museum, London'
						className='input input-bordered w-full'
						required
					/>
				</div>

				{/* Adder Name (Disabled) */}
				<div>
					<label className='label'>
						<span className='label-text flex items-center gap-1'>
							<FiUser /> Your Name
						</span>
					</label>
					<input
						type='text'
						value={user?.displayName || ""}
						readOnly
						className='input input-bordered w-full text-gray-400'
					/>
				</div>

				{/* Adder Email (Disabled) */}
				<div>
					<label className='label'>
						<span className='label-text flex items-center gap-1'>
							<FiMail /> Your Email
						</span>
					</label>
					<input
						type='email'
						value={user?.email || ""}
						readOnly
						className='input input-bordered w-full text-gray-400'
					/>
				</div>

				{/* Submit */}
				<div className='md:col-span-2'>
					<button
						type='submit'
						className='btn btn-primary w-full'
					>
						Add Artifact
					</button>
				</div>
			</form>
		</div>
	);
};

export default AddArtifact;
