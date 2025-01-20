import axios from "axios"

const axiosSecure = axios.create({
  baseURL: 'https://y-blond-psi.vercel.app'
})
function useAxiosSecure() {
    return axiosSecure
}

export default useAxiosSecure