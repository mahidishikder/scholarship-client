import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthPorvider";
import useAxiosSecure from "./useAxiosSecure";

function useAdmin() {
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);

  const { data: isAdmin, isPending, isLoading, isError } = useQuery({
    queryKey: [user?.email, "isAdmin"],
    enabled: !!user?.email, // Query only runs if user.email exists
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/admin/${user.email}`);
      console.log(res.data);
      return res.data.admin;
    },
  });

  return [isAdmin,isPending, isLoading, isError];
}

export default useAdmin;
