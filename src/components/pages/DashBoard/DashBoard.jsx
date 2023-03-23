import React from "react";
import { useNavigate } from "react-router-dom";
import { getUserData } from "../../../Services/StorageService";
import Button from "../../Button/Button";
import "./DashBoardStyle.css";

const DashBoard = () => {
  const navigate = useNavigate();
  const onBannerTxtClicked = () => {
    navigate("/profile");
  };
  const user = getUserData();

  const onPostAddBtnClicked = () => {
    navigate("/add-post");
  };
  return (
    <div className="banner">
      <div onClick={onBannerTxtClicked} className="banner-main-text">
        Hi, {user.userName}
      </div>
      <div>
        <Button
          text={"Add Post"}
          style={{ backgroundColor: "orange" }}
          onClickCb={onPostAddBtnClicked}
        />
      </div>
    </div>
  );
};

export default DashBoard;
