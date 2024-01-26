import React from "react";

//INTERNAL IMPORT
import Style from "../styles/login.module.css";
import LoginAndSignUp from "../loginAndSignUp/loginAndSignUp";

const login = () => {
  return (
    <div className={Style.login}>
      <div className={Style.login_box}>
        <h1>Đăng nhập</h1>
        <LoginAndSignUp />
        <p className={Style.login_box_para}>
          Chưa có tài khoản? <a href="./signUp">Tạo tài khoản mới</a>
        </p>
      </div>
    </div>
  );
};

export default login;