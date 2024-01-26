import React from "react";

//INTERNAL IMPORT
import Style from "../styles/login.module.css";
import SignUp from "../loginAndSignUp/signUp";

const signUp = () => {
  return (
    <div className={Style.login}>
      <div className={Style.login_box}>
        <h1>Đăng ký</h1>
        <SignUp />
        <p className={Style.login_box_para}>
          Đã tài khoản? <a href="./login">Đăng nhập</a>
        </p>
      </div>
    </div>
  );
};

export default signUp;