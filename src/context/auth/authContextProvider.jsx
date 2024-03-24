import { useEffect, useReducer, useState } from "react";
import { createContext, useContext } from "react";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import "../../firebase.config";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  //   sign up funcation
  const signUp = async (email, password, username) => {
    const auth = getAuth();
    await createUserWithEmailAndPassword(auth, email, password);

    await updateProfile(auth.currentUser, {
      displayName: username,
    });

    const user = auth.currentUser;

    setCurrentUser(user);
  };

  //   login function
  const signIn = async (email, password) => {
    const auth = getAuth();
    return await signInWithEmailAndPassword(auth, email, password);
  };

  // sign in with google
  const signWithGoogle = () => {
    const auth = getAuth();
    const googleAuthProvide = new GoogleAuthProvider();
    return signInWithPopup(auth, googleAuthProvide);
  };

  //   logut or signout
  const logout = async () => {
    const auth = getAuth();
    return await signOut(auth);
  };

  const value = {
    currentUser,
    signUp,
    signIn,
    signWithGoogle,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => useContext(AuthContext);
