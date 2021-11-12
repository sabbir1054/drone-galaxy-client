
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";

import AuthInitialization from "../Firebase/AuthInit";
import axios from "axios";

AuthInitialization();

const useFirebase = () => {
  
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState({});
  const [error, setError] = useState("");

  const auth = getAuth();

    
    
  //register new user
  const registerNewUser = (name, email, password, role) => {
    
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
       updateProfile(auth.currentUser, {
          displayName: name,
        }).then(() => {
          
          // Profile updated!

          //save user in database
          saveUser(email, name);
          
        });
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
//saveUser database
  const saveUser = (email, displayName) => {
  
    const user = { email, displayName };
    
  axios
    .post("http://localhost:5000/users", user)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
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
