import React from "react";
import { useNavigate } from "react-router-dom";
import { getUserData, isLogin } from "../../../Services/StorageService";

const Profile = () => {
  const navigate = useNavigate();
  if (!isLogin()) {
    navigate("/login");
    return null;
  }

  const user = getUserData();
  return <div>profile {user.userName}</div>;
};

export default Profile;
