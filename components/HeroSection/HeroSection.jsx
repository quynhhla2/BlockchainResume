import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";

// INTERNAL IMPORT
import Style from "./HeroSection.module.css";
import Button from "../Button/Button";
import images from "../../img";

// SMART CONTRACT IMPORT
import { NFTMarketplaceContext } from "../../Context/NFTMarketplaceContext";

const HeroSection = () => {
  const { titleData } = useContext(NFTMarketplaceContext);
  return (
    <div className={Style.heroSection}>
      <div className={Style.heroSection_box}>
        <div className={Style.heroSection_box_left}>
          <h1>{titleData}</h1>
          <p>
          Cung cấp một giải pháp lưu trữ, quản lý và chia sẻ hồ sơ cá nhân và nghề nghiệp một cách an toàn và hiệu quả. Dễ dàng tạo và chia sẻ hồ sơ của bạn với nhà tuyển dụng hoặc đối tác.
          </p>
          <Button btnName="Bắt đầu tìm kiếm" />
        </div>

        <div className={Style.heroSection_box_right}>
          <Image
            src={images.hero}
            alt="hero section"
            width={600}
            height={600}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
