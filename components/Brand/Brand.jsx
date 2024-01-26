import React from "react";
import Image from "next/image";
import { DiJqueryLogo, DiJqueryUiLogo } from "react-icons/di";
import { useRouter } from "next/router";

// INTERNAL IMPORT
import Style from "./Brand.module.css";
import images from "../../img";
import Button from "../Button/Button";

const Brand = () => {
  const router = useRouter();
  return (
    <div className={Style.brand}>
      <div className={Style.brand_box}>
        <div className={Style.brand_box_left}>
          <DiJqueryLogo onClick={() => router.push("/")} />
          <h1>Hồ sơ/CV tuyển dụng</h1>
          <p>Cung cấp một giải pháp lưu trữ, quản lý và chia sẻ hồ sơ cá nhân và nghề nghiệp một cách an toàn và hiệu quả. Dễ dàng tạo và chia sẻ hồ sơ của bạn với nhà tuyển dụng hoặc đối tác.</p>

          <div className={Style.brand_box_left_btn}>
            <Button btnName="Tải lên CV" handleClick={() => {}} />
            <Button btnName="Khám phá" handleClick={() => {}} />
          </div>
        </div>
        <div className={Style.brand_box_right}>
          <Image src={images.earn} alt="brand logo" width={800} height={600} />
        </div>
      </div>
    </div>
  );
};

export default Brand;
