import React, { useState, useEffect, useContext } from "react";

// INTERNAL IMPORT
import Style from "../styles/searchPage.module.css";
import SearchBar from "../SearchPage/SearchBar/SearchBar";
import Brand from "../components/Brand/Brand";
import Slider from "../components/Slider/Slider";
import Filter from "../components/Filter/Filter";
import Banner from "../collectionPage/Banner/Banner";
import NFTCardTwo from "../collectionPage/NFTCardTwo/NFTCardTwo";
import images from "../img";

// IMPORT FROM SMART CONTRACT
import { NFTMarketplaceContext } from "../Context/NFTMarketplaceContext";

const searchPage = () => {
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

  const onHandleSearch = (value) => {
    if (!value.trim()) {
      setNfts(nftsCopy);
      return;
    }

    const filteredNFTs = nftsCopy.filter(({ name }) =>
      name.toLowerCase().includes(value.toLowerCase())
    );
    setNfts(filteredNFTs);
  };

  const onClearSearch = () => {
    setNfts(nftsCopy);
  };

  // const collectionArray = [
  //   images.nft_image_1,
  //   images.nft_image_2,
  //   images.nft_image_3,
  //   images.nft_image_1,
  //   images.nft_image_2,
  //   images.nft_image_3,
  //   images.nft_image_1,
  //   images.nft_image_2,
  // ];
  return (
    <div className={Style.searchPage}>
      <Banner bannerImage={images.creatorbackground2} />
      <SearchBar 
        onHandleSearch={onHandleSearch} 
        onClearSearch={onClearSearch}
      />
      <Filter />
      <NFTCardTwo NFTData={nfts} />
      <Slider />
      <Brand />
    </div>
  );
};

export default searchPage;
