import React, { useState } from "react";
import Input, { INPUT_TYPE } from "../../Input/Input";

const PostEditorPage = () => {
  const [title, setTitle] = useState(null);
  const [content, setContent] = useState(null);

  const onTitleChange = (event) => {
    const title = event.target.value;
    if (title) {
      setTitle(title);
    }
  };

  const onContentChange = (event) => {
    const content = event.target.value;
    if (content) {
      setContent(content);
    }
  };
  return (
    <div>
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
      </div>
    </div>
  );
};

export default PostEditorPage;
