import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth"
import { useEffect, useState } from "react"
import { createContext } from "react"
import { auth } from './../firebase.config';
import { GoogleAuthProvider } from "firebase/auth";
import useAxiosPublic from "../hooks/useAxiosPublic";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const axiosPublic = useAxiosPublic()
  const [user, setUser] = useState(null);
  const provider = new GoogleAuthProvider

  const [loading, setLoading] = useState(true);

  // Create User Function
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Login User Function
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password); // Corrected here
  };

  // Logout Function
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const updateUserProfile = (name,photo) => {
    setLoading(true)
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
    
  }

  const googleLogin = () => {
    setLoading(true)
    return signInWithPopup(auth,provider)
    
  }

  // Track Authentication State
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if(currentUser){
        const userInfo = {email : currentUser.email}
        axiosPublic.post('/jwt',userInfo)
        .then(res => {
         if(res.data.token){
          localStorage.setItem('access-token',res.data.token)
         }
        })
      }
      else{
        localStorage.removeItem('access-token')
      }
      console.log("user", currentUser);
      setLoading(false);
    });
    return () => unSubscribe();
  }, [axiosPublic]);

  const authInfo = {
    user,
    loading,
    setLoading,
    createUser,
    loginUser,
    googleLogin,
    logOut,
    updateUserProfile
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
