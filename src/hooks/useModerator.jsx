import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthPorvider";
import useAxiosSecure from "./useAxiosSecure";

function useModerator() {
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);

  const { data: isModerator, isPending, isLoading, isError } = useQuery({
    queryKey: [user?.email, "isModerator"],
    enabled: !!user?.email, // Query শুধু তখন রান হবে যখন user.email থাকবে
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/moderator/${user.email}`);
      console.log(res.data);
      return res.data.moderator; // এখানে `admin` এর পরিবর্তে `moderator` আসবে
    },
  });

  return [isModerator, isPending, isLoading, isError];
}

export default useModerator;
