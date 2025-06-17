import axios from "axios";
import useAuth from "./useAuth";

const axiosInstance = axios.create({
	baseURL: "http://localhost:3000",
});

const useAxiosSecure = () => {
	const { user, logoutUser } = useAuth();

	// request interceptor
	axiosInstance.interceptors.request.use((config) => {
		config.headers.authorization = `Bearer ${user.accessToken}`;
		return config;
	});

	// response interceptor
	axiosInstance.interceptors.response.use(
		(response) => {
			return response;
		},
		(error) => {
			console.log("Error in interceptor", error);
			if (error.status === 401 || error.status === 403) {
				// logout user
				logoutUser()
					.then(() => {
						console.log(`Signed Out User for ${error.status} Status Code`);
					})
					.catch((err) => {
						console.log(err);
					});
			}
			return Promise.reject(error);
		},
	);

	return axiosInstance;
};

export default useAxiosSecure;
