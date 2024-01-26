import React from "react";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
  TiSocialInstagram,
} from "react-icons/ti";
import { HiOutlineMail } from "react-icons/hi";

// INTERNAL IMPORT
import Style from "../styles/contactUs.module.css";
import formStyle from "../accountPage/Form/Form.module.css";
import Button from "../components/Button/Button";

const contactUs = () => {
  return (
    <div className={Style.contactUs}>
      <div className={Style.contactUs_box}>
        <h1>Liên hệ</h1>
        <div className={Style.contactUs_box_box}>
          <div className={Style.contactUs_box_box_left}>
            <div className={Style.contactUs_box_box_left_item}>
              <h3>🗺 ĐỊA CHỈ</h3>
              <p>
                Đại học Bách khoa Hà Nội, số 1 Đại Cồ Việt, Hai Bà Trưng, Hà Nội
              </p>
            </div>
            <div className={Style.contactUs_box_box_left_item}>
              <h3>📩 EMAIL</h3>
              <p>quynhhla2@gmail.com</p>
            </div>
            <div className={Style.contactUs_box_box_left_item}>
              <h3>📞 SỐ ĐIỆN THOẠI</h3>
              <p>0876567XXX</p>
            </div>
            <div className={Style.contactUs_box_box_left_item}>
              <h3>🌎 MẠNG XÃ HỘI</h3>
              <a href="#">
                <TiSocialFacebook />
              </a>
              <a href="#">
                <TiSocialLinkedin />
              </a>
              <a href="#">
                <TiSocialInstagram />
              </a>
              <a href="#">
                <TiSocialYoutube />
              </a>
              <a href="#">
                <TiSocialTwitter />
              </a>
            </div>
          </div>
          <div className={Style.contactUs_box_box_right}>
            <form>
              <div className={formStyle.Form_box_input}>
                <label htmlFor="name">Họ và tên</label>
                <input
                  type="text"
                  placeholder="Nguyễn Thúy Quỳnh"
                  className={formStyle.Form_box_input_userName}
                />
              </div>

              <div className={formStyle.Form_box_input}>
                <label htmlFor="email">Email</label>
                <div className={formStyle.Form_box_input_box}>
                  <div className={formStyle.Form_box_input_box_icon}>
                    <HiOutlineMail />
                  </div>
                  <input type="text" placeholder="Email" />
                </div>
              </div>

              <div className={formStyle.Form_box_input}>
                <label htmlFor="description">Lời nhắn</label>
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="6"
                  placeholder="Gửi gắm thông điệp của bạn ở đây..."
                ></textarea>
              </div>
              <Button
                btnName="Gửi tin nhắn"
                handleClick={() => {}}
                classStyle={Style.button}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default contactUs;
