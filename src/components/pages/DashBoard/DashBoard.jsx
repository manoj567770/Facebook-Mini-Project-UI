import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getBlogsApiUrl } from "../../../Services/Services";
import {
  getUserData,
  getUserToken,
  removeUserData,
} from "../../../Services/StorageService";
import Blogs from "../../Blogs/Blogs";
import Button from "../../Button/Button";
import "./DashBoardStyle.css";
import { removeUserToken } from "../../../Services/StorageService";

const DashBoard = () => {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();
  const user = getUserData();

  const onBannerTxtClicked = () => {
    navigate("/profile");
  };
  const onPostAddBtnClicked = () => {
    navigate("/add-post");
  };

  useEffect(() => {
    const headers = {
      Authorization: `Bearer ${getUserToken()}`,
    };

    axios
      .get(
        getBlogsApiUrl(),

        {
          headers: headers,
        }
      )
      .then((resp) => {
        const blogs = resp.data.blogs;
        if (blogs && blogs.length > 0) {
          setBlogs(blogs);
        }
      });
  }, []);

  const renderBlogsList = (blogs) => {
    return (
      <div>
        {blogs.map((blog) => (
          <Blogs blog={blog} user={getUserData()} />
        ))}
      </div>
    );
  };

  const onLogoutClicked = () => {
    removeUserToken();
    navigate("/login");
    removeUserData();
    return;
  };

  return (
    <div>
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
      <div className="header">
        <h3 onClick={() => onLogoutClicked()}>Logout</h3>
      </div>
      <div className="blogs-container">
        {blogs.length > 0 ? renderBlogsList(blogs) : "NO Blogs are there!"}
      </div>
    </div>
  );
};

export default DashBoard;
