import React, { useState, useMemo, useCallback, useContext } from "react";
import Image from "next/image";
import { useDropzone } from "react-dropzone";

// INTERNAL IMPORT
import Style from "../styles/account.module.css";
import images from "../img";
import Form from "../accountPage/Form/Form";

const account = () => {
  const [fileUrl, setFireUrl] = useState(null);

  const onDrop = useCallback(async (acceptedFile) => {
    setFireUrl(acceptedFile[0]);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
    maxSize: 5000000,
  });

  return (
    <div className={Style.account}>
      <div className={Style.account_info}>
        <h1>Thông tin tài khoản</h1>
        <p>
          Cập nhật thông tin cá nhân của bạn tại đây.
        </p>
      </div>

      <div className={Style.account_box}>
        <div className={Style.account_box_img} {...getRootProps()}>
          <input {...getInputProps()} />
          <Image
            src={images.user1}
            alt="account upload"
            width={150}
            height={150}
            className={Style.account_box_img_img}
          />
          <p className={Style.account_box_img_para}>Thay đổi ảnh</p>
        </div>
        <div className={Style.account_box_form}>
          <Form />
        </div>
      </div>
    </div>
  );
};

export default account;
