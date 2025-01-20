import { useQuery } from "@tanstack/react-query"
import useAxiosPublic from "./useAxiosPublic"

function useCard() {
  const axiosPublic = useAxiosPublic()
  const {data : card = [],refetch} = useQuery({
    queryKey:['card'],
    queryFn: async () => {
      const res = await axiosPublic.get('/scholarship')
      return res.data
    }
  })
  return [card,refetch]
}

export default useCard