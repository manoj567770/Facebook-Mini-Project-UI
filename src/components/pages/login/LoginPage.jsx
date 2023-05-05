import React, { useState } from "react";
import Button from "../../Button/Button";
import Input, { INPUT_TYPE } from "../../Input/Input";
import "./LoginPageStyles.css";
import axios from "axios";
import { getLoginApiUrl } from "../../../Services/Services";
import {
  getUserToken,
  setUserData,
  setUserToken,
} from "../../../Services/StorageService";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [phone, setPhone] = useState(null);
  const [password, setPassword] = useState(null);
  const [phoneErr, setPhoneErr] = useState(false);
  const [passwordErr, setPasswordErr] = useState(false);

  const navigate = useNavigate();

  if (getUserToken()) {
    navigate("/dashboard");
    return;
  }

  const onPhoneChange = (value) => {
    setPhone(value);
  };

  const onPasswordChange = (value) => {
    setPassword(value);
  };
  const onLoginBtnClick = () => {
    if (!phone) {
      setPhoneErr(true);
    }
    if (!password) {
      setPasswordErr(true);
    }

    axios
      .post(getLoginApiUrl(), {
        phone: phone,
        password: password,
      })
      .then((res) => {
        if (res.data.token) {
          setUserToken(res.data.token);
        }
        if (res.data.user) {
          setUserData(res.data.user);
        }
        navigate("/dashboard");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const signupbtn = () => {
    navigate("/signup");
  };
  return (
    <>
      <div className="login-page-container">
        <div className="banner"></div>
        <div className="login-form-container">
          <div className="login">
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
              <Button text={"Login"} onClickCb={onLoginBtnClick} />
            </div>
            <button className="signup" onClick={signupbtn}>
              signup
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
