import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import AuthInitialization from "../Firebase/AuthInit";

AuthInitialization();

const useFirebase = () => {
  
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState({});
  const [error, setError] = useState("");

  const auth = getAuth();

    
    
  //register new user
  const registerNewUser = (name, email, password) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        
        const user = result.user;
        setUser(user);
        updateProfile(auth.currentUser, {
          displayName: name,
        }).then(() => {
          // Profile updated!
            console.log(user);
        });
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

    
    
  //Login with email and password
  const loginWithEmailPassword = (email, password) => {
    setIsLoading(true);
    return signInWithEmailAndPassword(auth, email, password).finally(() =>
      setIsLoading(false)
    );
  };

  // user state change handling
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, []);

  //logout user
  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {})
      .finally(() => setIsLoading(false));
  };

  return {
    setUser,
    user,
    isLoading,
    registerNewUser,
    loginWithEmailPassword,
    logOut,
    setError,
  };
};

export default useFirebase;
