import React, { useEffect, useState, useContext } from "react";

// INTERNAL IMPORT
import Style from "../styles/uploadNFT.module.css";
import DropZone from "../uploadNFT/DropZone/DropZone";
import UploadNFT from "../uploadNFT/UploadNFT";

// SMART CONTRACT IMPORT
import { NFTMarketplaceContext } from "../Context/NFTMarketplaceContext";

const uploadNFT = () => {
  const { uploadToPinata, createNFT } = useContext(NFTMarketplaceContext);
  return (
    <div className={Style.uploadNFT}>
      <div className={Style.uploadNFT_box}>
        <div className={Style.uploadNFT_box_heading}>
          <h1>Hồ sơ ứng tuyển của bạn</h1>
          <p>
          Hãy luôn cẩn trọng trong quá trình tìm việc và chủ động nghiên cứu về thông tin công ty, vị trí việc làm trước khi ứng tuyển.
          </p>
        </div>

        <div className={Style.uploadNFT_box_title}>
          <h2>Tải lên tại đây</h2>
          <p>
          Hỗ trợ định dạng ảnh có kích thước dưới 5MB.
          </p>
        </div>

        <div className={Style.uploadNFT_box_form}>
          <UploadNFT uploadToPinata={uploadToPinata } createNFT={createNFT} />
        </div>
      </div>
    </div>
  );
};

export default uploadNFT;
