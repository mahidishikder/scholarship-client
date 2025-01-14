import { useContext } from "react"
import { AuthContext } from "./AuthPorvider"
import { Navigate, useLocation } from "react-router-dom";

function PrivateRoute({children}) {
  const location = useLocation()
  const {user,loading} = useContext(AuthContext)
  if(loading){
    return <div className="flex justify-center items-center min-h-screen"><img className="" src="https://img.icons8.com/?size=40&id=tAnzkvBZvv1U&format=gif" alt="" /></div>
  }
  if(user) {
    return children;
  }
  return <Navigate to="/signIn" state={{ from: location }} replace />
}

export default PrivateRoute