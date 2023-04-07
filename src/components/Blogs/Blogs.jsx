import React from "react";
import { useNavigate } from "react-router-dom";
import "./BlogsStyles.css";
import { setBlog } from "../../Services/BlogSevice";

const Blogs = ({ blog, user }) => {
  const navigate = useNavigate();
  const { title, content, time } = blog;
  const { userName } = user;

  const getFormattedTime = (time) => {
    return new Date(time).toDateString();
  };

  const onBlogClicked = (blog) => {
    setBlog(blog._id, blog);
    navigate(`/edit/${blog.title.replace(" ", "-")}`);
  };
  return (
    <div onClick={() => onBlogClicked(blog)} className="blog-container">
      <div className="blog-title">{title}</div>
      <div className="blog-content">{content}</div>
      <div className="blog-footer">
        posted by &nbsp;<span className="post-owner">{userName} </span>&nbsp; at
        &nbsp; <span>{getFormattedTime(time)}</span>
      </div>
    </div>
  );
};

export default Blogs;
