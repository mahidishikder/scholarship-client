import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthPorvider";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000", // Ensure the baseURL is correct
});

function useAxiosSecure() {
  const {logOut} = useContext(AuthContext)
  const navigate = useNavigate();

  // Request Interceptor
  axiosSecure.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("access-token");
      if (token) {
        config.headers.authorization = `Bearer ${token}`;
        console.log("Request authorized with token:", token);
      } else {
        console.warn("Token not available in localStorage.");
      }
      return config;
    },
    (error) => {
      console.error("Request error intercepted:", error);
      return Promise.reject(error);
    }
  );

  // Response Interceptor
  axiosSecure.interceptors.response.use(
    (response) => {
      return response; // Return response if successful
    },
    async(error) => {
      const status = error.response?.status; // Ensure response exists
      console.log("Status error in the interceptor:", status);
      if (status === 401 || status === 403) {
        await logOut()
        navigate("/signIn"); // Redirect to home page on unauthorized error
      }
      return Promise.reject(error); // Properly reject the error
    }
  );

  return axiosSecure;
}

export default useAxiosSecure;
