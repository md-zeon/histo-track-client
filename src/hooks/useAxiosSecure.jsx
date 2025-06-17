import axios from "axios";
import useAuth from "./useAuth";

const axiosInstance = axios.create({
	baseURL: "https://histotrack-server.vercel.app",
});

const useAxiosSecure = () => {
	const { user } = useAuth();

	// request interceptor
	axiosInstance.interceptors.request.use((config) => {
		config.headers.authorization = `Bearer ${user.accessToken}`;
		return config;
	});

	// response interceptor
	// axiosInstance.interceptors.response.use(
	// 	(response) => {
	// 		return response;
	// 	},
	// 	(error) => {
	// 		console.error("Error in interceptor", error);
	// 		const status = error?.response?.status || error.status;
	// 		if (status === 401 || status === 403) {
	// 			// logout user
	// 			logoutUser()
	// 				.then(() => {
	// 					console.log(`Signed Out User for ${status} Status Code`);
	// 				})
	// 				.catch((err) => {
	// 					console.log(err);
	// 				});
	// 		}
	// 		return Promise.reject(error);
	// 	},
	// );

	return axiosInstance;
};

export default useAxiosSecure;
