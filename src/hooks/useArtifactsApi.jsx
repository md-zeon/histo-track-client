import useAxiosSecure from "./useAxiosSecure";


const useArtifactsApi = () => {
	const axiosSecure = useAxiosSecure();

	// Create a new artifact
	const createArtifactPromise = (artifact) => {
		return axiosSecure.post("/artifacts", artifact).then((res) => res.data);
	};

	// Get artifacts by email
	const getArtifactsByEmailPromise = (email) => {
		return axiosSecure.get(`/artifacts?email=${email}`).then((res) => res.data);
	};


	// Get a single artifact by ID
	const getArtifactPromise = (id) => {
		return axiosSecure.get(`/artifacts/${id}`).then((res) => res.data);
	};
	// Update an artifact
	const updateArtifactPromise = (id, artifact) => {
		return axiosSecure.patch(`/artifacts/${id}`, artifact).then((res) => res.data);
	};

	// Update Toggle like an artifact
	const toggleLikeArtifactPromise = (id, email) => {
		return axiosSecure.patch(`/artifacts/toggle-like/${id}`, { email }).then((res) => res.data);
	};

	//  Get liked artifacts 
	const getLikedArtifactsPromise = (email) => {
		return axiosSecure.get(`/liked-artifacts?email=${email}`).then((res) => res.data);
	};

	// Delete an artifact
	const deleteArtifactPromise = (id) => {
		return axiosSecure.delete(`/artifacts/${id}`).then((res) => res.data);
	};
	

	return {
		createArtifactPromise,
		getArtifactsByEmailPromise,
		getArtifactPromise,
		updateArtifactPromise,
		toggleLikeArtifactPromise,
		getLikedArtifactsPromise,
		deleteArtifactPromise,
	};
};

export default useArtifactsApi;
