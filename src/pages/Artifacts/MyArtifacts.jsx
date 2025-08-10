import { useEffect, useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { CiWarning } from "react-icons/ci";
import Loader from "../../components/ui/Loader";
import SiteTitle from "../../components/SiteTitle";
import useArtifactsApi from "../../hooks/useArtifactsApi";

const MyArtifacts = () => {
	const [myArtifacts, setMyArtifacts] = useState([]);
	const { user } = useAuth();
	const navigate = useNavigate();
	const [loading, setLoading] = useState(true);
	const { getArtifactsByEmailPromise, deleteArtifactPromise } = useArtifactsApi();

	useEffect(() => {
		if(!user?.email) return;
		setLoading(true);
		getArtifactsByEmailPromise(user.email)
			.then((res) => {
				setMyArtifacts(res);
			})
			.catch((err) => {
				console.log(err);
				toast.error("Failed to fetch artifacts");
			})
			.finally(() => {
				setLoading(false);
			});
	}, [user.email]);

	const handleDelete = (id) => {
		Swal.fire({
			title: "Are you sure?",
			text: "This artifact will be permanently deleted!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonText: "Yes, delete it!",
			cancelButtonText: "Cancel",
			confirmButtonColor: "#d33",
			cancelButtonColor: "#3085d6",
		}).then((result) => {
			if (result.isConfirmed) {
				deleteArtifactPromise(id)
					.then((res) => {
						if (res.deletedCount) {
							toast.success("Artifact deleted successfully");
							setMyArtifacts(myArtifacts.filter((artifact) => artifact._id !== id));
							navigate("/all-artifacts");
						}
					})
					.catch((err) => {
						console.error(err);
						toast.error("Failed to delete artifact");
					});
			}
		});
	};

	if (loading) {
		return <Loader />;
	}

	if (myArtifacts.length === 0) {
		return (
			<div className='min-h-[50vh] flex items-center justify-center text-center'>
				<SiteTitle>No Artifacts Found</SiteTitle>
				<div className='flex flex-col gap-3 text-xl font-semibold text-gray-600 dark:text-gray-400'>
					<div className='flex justify-center'>
						<CiWarning className='text-6xl' />
					</div>
					<h2 className='text-3xl'>No artifacts found.</h2>
					<p>Start by adding some historical treasures!</p>
				</div>
			</div>
		);
	}

	return (
		<div className='max-w-6xl mx-auto p-6 space-y-6'>
			<SiteTitle>My Artifacts</SiteTitle>
			<h2 className='text-3xl font-bold text-center mb-6'> My Artifacts</h2>
			<div className='overflow-x-auto'>
				<table className='table w-full table-zebra border border-base-300'>
					<thead className='bg-base-200 text-base font-bold'>
						<tr>
							<th>Image</th>
							<th>Name</th>
							<th>Type</th>
							<th>Created At</th>
							<th>Location</th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody>
						{myArtifacts.map((artifact) => (
							<tr key={artifact._id}>
								<td>
									<img
										src={artifact.image}
										alt={artifact.name}
										className='w-12 h-12 object-cover rounded'
									/>
								</td>
								<td className='font-semibold'>{artifact.name}</td>
								<td>{artifact.type}</td>
								<td>{artifact.createdAt}</td>
								<td>{artifact.location}</td>
								<td className='flex gap-4 mt-2'>
									<button
										className='btn btn-outline btn-info btn-sm flex items-center gap-1'
										onClick={() => navigate(`/update-artifact/${artifact._id}`)}
									>
										<FaEdit /> Update
									</button>
									<button
										className='btn btn-outline btn-error btn-sm flex items-center gap-1'
										onClick={() => handleDelete(artifact._id)}
									>
										<FaTrashAlt /> Delete
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default MyArtifacts;
