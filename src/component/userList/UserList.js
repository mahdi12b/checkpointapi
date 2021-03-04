import React, { useEffect, useState } from "react";
import axios from "axios";
import Profile from "../profile/Profile";
import './UserList.css'


const UserList = () => {
  const [listOfUser, setlistOfUser] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(function (response) {
        setlistOfUser(response.data);
        console.log(listOfUser)
      });
  }, []);
  console.log(listOfUser)
  
  return (
    <div className="profiles">
      {listOfUser.map((user) => (
        <Profile key={user.id}  user={user}  />
      ))}
    </div>
  );
};

export default UserList;