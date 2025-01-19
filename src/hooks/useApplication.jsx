import { useQuery } from "@tanstack/react-query"
import useAxiosPublic from "./useAxiosPublic"

function useApplication() {
    const axiosPublic = useAxiosPublic()
    const {data : applications = [],refetch} = useQuery({
     queryKey:['applications'],
     queryFn: async () => {
      const res = await axiosPublic.get('/AppliedScholarship')
      return res.data
     }
    })
    return [applications,refetch]
}

export default useApplication