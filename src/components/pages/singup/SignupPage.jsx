import React from "react";
import Input, { INPUT_TYPE } from "../../Input/Input";
import Button from "../../Button/Button";
import "./Signuppage.css";

function SignupPage() {
  const onLoginBtnClick = () => {};
  return (
    <>
      <div className="signup-page-container">
        <div className="banner"></div>
        <div className="signup-form-container">
          <div className="signup">
            <div>
              <Input
                type={INPUT_TYPE.INPUT_TXT}
                placeholder="User Name"
                // onChangeCb={onPhoneChange}
              />
            </div>
            <div>
              <Input
                type={INPUT_TYPE.INPUT_TXT}
                placeholder="Phone"
                // onChangeCb={onPhoneChange}
              />
            </div>
            <div>
              <Input
                type={INPUT_TYPE.INPUT_PASSWORD}
                placeholder="Password"
                //onChangeCb={onPasswordChange}
              />
            </div>
            <div>
              <Button text={"submit"} onClickCb={onLoginBtnClick} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignupPage;
