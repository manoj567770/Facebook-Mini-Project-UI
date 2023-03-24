import React from "react";
import "./BlogsStyles.css";

const Blogs = ({ blog, user }) => {
  const { title, content, time } = blog;
  const { userName } = user;

  const getFormattedTime = (time) => {
    return new Date(time).toDateString();
  };
  return (
    <div className="blog-container">
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
