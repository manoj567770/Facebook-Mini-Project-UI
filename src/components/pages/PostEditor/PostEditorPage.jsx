import React, { useState } from "react";
import Input, { INPUT_TYPE } from "../../Input/Input";
import "./PostEditorPageStyles.css";
import Button from "../../Button/Button";
import axios from "axios";
import { getCreateBlogApiUrl } from "../../../Services/Services";
import { getUserToken } from "../../../Services/StorageService";
import { useNavigate, useParams } from "react-router-dom";
import { findBlogBytitle } from "../../../Services/BlogSevice";

const PostEditorPage = () => {
  const [title, setTitle] = useState(null);
  const [content, setContent] = useState(null);
  const navigate = useNavigate();
  const { postTitle } = useParams();

  if (postTitle) {
    console.log(findBlogBytitle(postTitle));
  }

  const onTitleChange = (value) => {
    const title = value;
    if (title) {
      setTitle(title);
    }
  };

  const onContentChange = (value) => {
    const content = value;
    if (content) {
      setContent(content);
    }
  };

  const onCreateBlogClicked = () => {
    if (!title) {
      alert("Title Must be Present!");
      return;
    }

    if (!content) {
      alert("Content is Missing!");
      return;
    }

    const headers = {
      Authorization: `Bearer ${getUserToken()}`,
    };

    axios
      .post(
        getCreateBlogApiUrl(),
        {
          title: title,
          content: content,
        },
        { headers: headers }
      )
      .then((res) => {
        alert("Blog is now ready to read!");
        navigate("/dashboard");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="page-container">
      <div>Blog Creation / Modification</div>
      <div className="create-blog-form-container">
        <div>
          <Input
            type={INPUT_TYPE.INPUT_TXT}
            placeholder="Title"
            onChangeCb={onTitleChange}
          />
        </div>
        <div>
          <Input
            type={INPUT_TYPE.INPUT_TXT_AREA}
            placeholder="Write anythings : )"
            onChangeCb={onContentChange}
          />
        </div>
        <Button text={"submit"} onClickCb={onCreateBlogClicked} />
      </div>
    </div>
  );
};

export default PostEditorPage;
