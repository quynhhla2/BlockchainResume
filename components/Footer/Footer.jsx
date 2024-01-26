import React from "react";
import Image from "next/image";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
  TiSocialInstagram,
  TiArrowSortedDown,
  TiArrowSortedUp,
} from "react-icons/ti";
import { RiSendPlaneFill } from "react-icons/ri";
import { DiJqueryLogo } from "react-icons/di";

//INTERNAL IMPORT
import Style from "./Footer.module.css";
import images from "../../img";
import Discover from "../NavBar/Discover/Discover";
import HelpCenter from "../NavBar/HelpCenter/HelpCenter";

const Footer = () => {
  return (
    <div className={Style.footer}>
      <div className={Style.footer_box}>
        <div className={Style.footer_box_social}>
          <DiJqueryLogo />
          <p>Đại học Bách khoa Hà Nội</p>

          <div className={Style.footer_social}>
            <a href="#">
              <TiSocialFacebook />
            </a>

            <a href="#">
              <TiSocialLinkedin />
            </a>

            <a href="#">
              <TiSocialTwitter />
            </a>

            <a href="#">
              <TiSocialYoutube />
            </a>

            <a href="#">
              <TiSocialInstagram />
            </a>
          </div>
        </div>

        <div className={Style.footer_box_discover}>
          <h3>Khám phá</h3>
          <Discover />
        </div>

        <div className={Style.footer_box_help}>
          <h3>Trợ giúp</h3>
          <HelpCenter />
        </div>

        <div className={Style.subscribe}>
          <h3>Liên hệ</h3>

          <div className={Style.subscribe_box}>
            <input type="email" placeholder="Điền email của bạn *" />
            <RiSendPlaneFill className={Style.subscribe_box_send} />
          </div>

          {/* <div className={Style.subscribe_box_info}>
            <p>Up C</p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
