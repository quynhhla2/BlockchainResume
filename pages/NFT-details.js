import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";

// INTERNAL IMPORT
import Style from "../styles/NFT-details.module.css";
import NFTDescription from "../NFTDetailsPage/NFTDescription/NFTDescription";
import NFTDetailsImg from "../NFTDetailsPage/NFTDetailsImg/NFTDetailsImg";
import NFTTabs from "../NFTDetailsPage/NFTTabs/NFTTabs";
import Button from "../components/Button/Button";
import Category from "../components/Category/Category";
import Brand from "../components/Brand/Brand";
import NFTDetailsPage from "../NFTDetailsPage/NFTDetailsPage";

// IMPORT DATA FROM SMART CONTRACT
import { NFTMarketplaceContext } from "../Context/NFTMarketplaceContext";

const NFTDetails = () => {
  const { currentAccount } = useContext(NFTMarketplaceContext);

  const [nft, setNft] = useState({
    image: "",
    tokenId: "",
    name: "",
    owner: "",
    price: "",
    seller: "",
  });

  const router = useRouter();
  useEffect(() => {
    if (!router.isReady) return;
    setNft(router.query);
  }, [router.isReady]);

  return (
    <div>
      <NFTDetailsPage nft={nft} />
      <Category />
      <Brand />
    </div>
  );
};

export default NFTDetails;
