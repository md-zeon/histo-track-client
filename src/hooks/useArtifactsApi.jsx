import useAxiosSecure from "./useAxiosSecure";


const useArtifactsApi = () => {
	const axiosSecure = useAxiosSecure();
	const createArtifactPromise = (artifact) => {
		return axiosSecure.post("/artifacts", artifact).then((res) => res.data);
	};

	return {
		createArtifactPromise,
	};
};

export default useArtifactsApi;
