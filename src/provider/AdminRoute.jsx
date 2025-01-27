import { useContext } from "react"
import useAdmin from "../hooks/useAdmin"
import { AuthContext } from "./AuthPorvider"
import { Navigate, useLocation } from "react-router-dom"

function AdminRoute(children) {
  const location = useLocation()
  const [user,loading] = useContext(AuthContext) 
  const [isAdmin,isPending] = useAdmin()
  if(loading || isPending){
    return <div className="flex justify-center items-center min-h-screen"><img className="" src="https://img.icons8.com/?size=40&id=tAnzkvBZvv1U&format=gif" alt="" /></div>
  }
  if(user && isAdmin) {
    return children;
  }
  return <Navigate to="/signIn" state={{ from: location }} replace />
}

export default AdminRoute