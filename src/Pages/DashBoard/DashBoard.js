import React, { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import AdminPanel from "./AdminPanel/AdminPanel";
import UserPanel from "./UserPanel/UserPanel";

const DashBoard = () => {
  const [filteredUser, setFilteredUser] = useState(false);
  const { user } = useAuth();
  useEffect(() => {
    fetch(`http://localhost:5000/users/${user.email}`)
      .then((res) => res.json())
      .then((data) => userFilter(data.role));
  }, []);
    const userFilter = role => {
        if (role === 'admin') {
            setFilteredUser(true)
        } else {
            setFilteredUser(false)
        }
    }
    return (
        <>
            {
                filteredUser ? (<AdminPanel></AdminPanel>) :(<UserPanel></UserPanel>) 
         }
        </>
  );
};

export default DashBoard;
