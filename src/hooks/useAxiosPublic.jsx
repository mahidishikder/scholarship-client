
import axios from "axios"


const axiosPublic = axios.create({
  baseURL: 'https://y-blond-psi.vercel.app'
})
function useAxiosPublic() {
  return axiosPublic
}
// https://y-blond-psi.vercel.app

export default useAxiosPublic
