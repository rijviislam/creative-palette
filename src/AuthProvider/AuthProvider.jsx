import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import auth from "../Firebase/firebase.config";

export const AuthContext = createContext(null);
export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);
  const [reload, setReload] = useState(false);

  // CREATE USER //

  const createUser = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // LOGIN USER //
  const loginUser = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   OBSERVER USER IS HE/SHE LOGIN OR NOT //
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (observ) => {
      setUser(observ);
      setLoader(false);
    });
    return () => {
      unSubscribe();
    };
  }, [reload]);
  // LOGED OUT //

  const logOutUser = () => {
    setLoader(true);
    Swal.fire({
      title: "Log out successfully!",
      showClass: {
        popup: `
          animate__animated
          animate__fadeInUp
          animate__faster
        `,
      },
      hideClass: {
        popup: `
          animate__animated
          animate__fadeOutDown
          animate__faster
        `,
      },
    });
    return signOut(auth);
  };

  // UPDATE USER IMAGE AND NAME //
  const updateImageAndName = (name, image) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: image,
    });
  };
  const allvalues = {
    user,
    loader,
    createUser,
    loginUser,
    setReload,
    logOutUser,
    updateImageAndName,
  };
  return (
    <div>
      <AuthContext.Provider value={allvalues}>{children}</AuthContext.Provider>
    </div>
  );
}
