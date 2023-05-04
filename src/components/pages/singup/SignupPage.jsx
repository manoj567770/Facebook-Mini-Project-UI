import React, { useState } from "react";
import Input, { INPUT_TYPE } from "../../Input/Input";
import Button from "../../Button/Button";
import "./Signuppage.css";
import axios from "axios";
import { getSignupApiUrl } from "../../../Services/Services";
import { useNavigate } from "react-router-dom";

function SignupPage() {
  const [phone, setPhone] = useState(null);
  const [password, setPassword] = useState(null);
  const [userName, setUserName] = useState(null);
  const navigate = useNavigate();

  const onPhoneChange = (value) => {
    setPhone(value);
    console.log(value);
  };

  const onPasswordChange = (value) => {
    setPassword(value);
    console.log(value);
  };

  const onChangeTxt = (value) => {
    setUserName(value);
    console.log(value);
  };

  const onSignUpBtnClick = () => {
    axios.post(getSignupApiUrl(), {
      userName: userName,
      phone: phone,
      password: password,
    });
    alert("signup successfull please login");
  };
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
                onChangeCb={onChangeTxt}
              />
            </div>
            <div>
              <Input
                type={INPUT_TYPE.INPUT_TXT}
                placeholder="Phone"
                onChangeCb={onPhoneChange}
              />
            </div>
            <div>
              <Input
                type={INPUT_TYPE.INPUT_PASSWORD}
                placeholder="Password"
                onChangeCb={onPasswordChange}
              />
            </div>
            <div>
              <Button text={"submit"} onClickCb={onSignUpBtnClick} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignupPage;
