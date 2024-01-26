import React from "react";

// INTERNAL IMPORT
import Style from "./NFTDetailsPage.module.css";
import NFTDescription from "./NFTDescription/NFTDescription";
import NFTDetailsImg from "./NFTDetailsImg/NFTDetailsImg";
import NFTTabs from "./NFTTabs/NFTTabs";

const NFTDetailsPage = ({ nft }) => {
  return (
    <div className={Style.NFTDetailsPage}>
      <div className={Style.NFTDetailsPage_box}>
        <NFTDetailsImg nft={nft} />
        <NFTDescription nft={nft} />
      </div>
    </div>
  );
};

export default NFTDetailsPage;
