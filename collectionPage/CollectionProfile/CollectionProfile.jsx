import React from "react";
import Image from "next/image";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialInstagram,
} from "react-icons/ti";

// INTERNAL IMPORT
import Style from "./CollectionProfile.module.css";
import images from "../../img";

const collectionProfile = () => {
  const cardArray = [1, 2, 3, 4];
  return (
    <div className={Style.collectionProfile}>
      <div className={Style.collectionProfile_box}>
        <div className={Style.collectionProfile_box_left}>
          <Image
            className={Style.collectionProfile_box_left_img}
            src={images.nft_image_1}
            alt="nft image"
            width={800}
            height={800}
          />

          <div className={Style.collectionProfile_box_left_social}>
            <a href="#"> {/* Update href as needed */}
              <TiSocialFacebook />
            </a>

            <a href="#"> {/* Update href as needed */}
              <TiSocialInstagram />
            </a>

            <a href="#"> {/* Update href as needed */}
              <TiSocialLinkedin />
            </a>

            <a href="#"> {/* Update href as needed */}
              <TiSocialTwitter />
            </a>
          </div>
        </div>

        <div className={Style.collectionProfile_box_middle}>
          <h1>Awesome CVs collection</h1>
          <p>
            agiweiwepgoidsjfglkdshghsghoiwegowegjeroihgoiehehqgihgiewog
            fiefhowfowhfowehgoe
          </p>

          <div className={Style.collectionProfile_box_middle_box}>
            {cardArray.map((el, i) => (
              <div
                className={Style.collectionProfile_box_middle_box_item}
                key={i}
              >
                <small>Floor price</small>
                <p>${i + 1}95,846</p>
                <span>+ {i + 2}.11%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};


export default collectionProfile;
