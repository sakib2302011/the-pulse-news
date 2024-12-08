import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from "../Firebase/firebase.config";
import PropTypes from "prop-types";


export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const auth = getAuth(app);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  }
  const verifyEmail = () => {
    return sendEmailVerification(auth.currentUser);
  }
  const updateUserProfile = (userName, photoURL) => {
    return updateProfile(auth.currentUser, {
      displayName: userName, photoURL: photoURL
    });
  }
  const logIn = (email ,password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }
  const logOut = () => {
    return signOut(auth);
  }
  const resetPassword = email => {
    return sendPasswordResetEmail(auth, email);
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); // Update state with currentUser (or null if signed out)
      setLoading(false);    // Stop loading regardless of currentUser state
    });
  
    return () => {
      unSubscribe();
    };
  }, []);
  

  const AuthInfo = {
    auth,
    user,
    loading,
    createUser,
    verifyEmail,
    updateUserProfile,
    logIn,
    logOut,
    resetPassword,
  }
  return (
    <AuthContext.Provider value={AuthInfo}>
        {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

AuthProvider.propTypes = {
  children: PropTypes.node
}