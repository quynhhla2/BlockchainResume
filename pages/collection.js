import React from 'react';

// INTERNAL IMPORT
import Style from '../styles/collection.module.css';
import images from '../img';
import Banner from '../collectionPage/Banner/Banner';
import CollectionProfile from '../collectionPage/CollectionProfile/CollectionProfile';
import Filter from '../components/Filter/Filter';
import Slider from '../components/Slider/Slider';
import Brand from '../components/Brand/Brand';
import NFTCardTwo from '../collectionPage/NFTCardTwo/NFTCardTwo';

const collection = () => {
  const collectionArray = [
    images.nft_image_1,
    images.nft_image_2,
    images.nft_image_3,
    images.nft_image_1,
    images.nft_image_2,
    images.nft_image_3,
    images.nft_image_1,
    images.nft_image_2,
    images.nft_image_3,
  ];

  return (
    <div className={Style.collection}>
      <Banner bannerImage={images.creatorbackground1} />
      <CollectionProfile NFTData={collectionArray} />
      <NFTCardTwo NFTData={collectionArray} />
      <Filter />
      <Slider />
      <Brand />
    </div>
  );
}

export default collection