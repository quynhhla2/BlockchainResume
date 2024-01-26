import React, { useState, useEffect, useContext } from "react";

// INTERNAL IMPORT
import Style from "../styles/index.module.css";
import HeroSection from "../components/HeroSection/HeroSection";
import BigNFTSlider from "../components/BigNFTSlider/BigNFTSlider";
import Title from "../components/Title/Title";
import Category from "../components/Category/Category";
import Filter from "../components/Filter/Filter";
import NFTCard from "../components/NFTCard/NFTCard";
import Collection from "../components/Collection/Collection";
import FollowerTab from "../components/FollowerTab/FollowerTab";
import Brand from "../components/Brand/Brand";

// IMPORTING CONTRACT DATA
import { NFTMarketplaceContext } from "../Context/NFTMarketplaceContext";

const Home = () => {
  const { checkIfWalletConnected } = useContext(NFTMarketplaceContext);
  useEffect(() => {
    checkIfWalletConnected();
  }, []);

  const { fetchNFTs } = useContext(NFTMarketplaceContext);
  const [nfts, setNfts] = useState([]);
  const [nftsCopy, setNftsCopy] = useState([]);

  useEffect(() => {
    fetchNFTs().then((item) => {
      const reversedItem = item.reverse();
      setNfts(reversedItem);
      setNftsCopy(reversedItem);
    }).catch(error => {
      console.error("Error fetching NFTs:", error);
    });
  }, [fetchNFTs]);

  return (
    <div className={Style.homePage}>
      <HeroSection />
      {/* <Service /> */}
      {/* <BigNFTSlider /> */}
      {/* <Title
        heading="Bộ sưu tập mới"
        paragraph="Khám phá hồ sơ trong các danh mục nổi bật nhất."
      /> */}
      {/* <FollowerTab /> */}
      {/* <Collection /> */}
      {/* <Title
        heading="Hồ sơ nổi bật"
        paragraph="Khám phá hồ sơ trong các danh mục nổi bật nhất."
      /> */}
      {/* <Filter /> */}
      <NFTCard NFTData={nfts} />
      {/* <Title
        heading="Tìm kiếm bằng danh mục"
        paragraph="Khám phá hồ sơ trong các danh mục nổi bật nhất."
      />
      <Category /> */}
      {/* <Subscribe /> */}
      <Brand />
    </div>
  );
};

export default Home;
