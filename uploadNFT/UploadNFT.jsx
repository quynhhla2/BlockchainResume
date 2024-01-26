import React, { useState } from "react";
import {
  MdOutlineHttp,
  MdOutlineAttachFile,
  MdOutlineEmail,
  MdOutlinePhone,
} from "react-icons/md";
import { FaPercent } from "react-icons/fa";
import { AiTwotonePropertySafety } from "react-icons/ai";
import { TiTick } from "react-icons/ti";
import Image from "next/image";
import { useRouter } from "next/router";

// INTERNAL IMPORT
import Style from "./Upload.module.css";
import formStyle from "../accountPage/Form/Form.module.css";
import images from "../img";
import Button from "../components/Button/Button";
import DropZone from "./DropZone/DropZone";

const UploadNFT = ({ uploadToPinata, createNFT }) => {
  const [price, setPrice] = useState("");
  const [active, setActive] = useState(0);
  const [name, setName] = useState("");
  const [website, setWebsite] = useState("");
  const [description, setDescription] = useState("");
  const [royalties, setRoyalties] = useState("");
  const [fileSize, setFileSize] = useState("");
  const [category, setCategory] = useState(0);
  const [properties, setProperties] = useState("");
  const [image, setImage] = useState(null);

  const router = useRouter();

  const categoryArray = [
    {
      image: images.nft_image_1,
      category: "Intern",
    },

    {
      image: images.nft_image_2,
      category: "Fresher",
    },

    {
      image: images.nft_image_1,
      category: "Junior",
    },

    {
      image: images.nft_image_2,
      category: "Senior",
    },
  ];

  return (
    <div className={Style.upload}>
      <DropZone
        title="Hỗ trợ định dạng JPG, PNG, WEBM có kích thước dưới 5MB"
        heading="Tải lên CV từ máy tính"
        subHeading="chọn hoặc kéo thả"
        name={name}
        website={website}
        description={description}
        royalties={royalties}
        fileSize={fileSize}
        category={category}
        properties={properties}
        setImage={setImage}
        uploadToPinata={uploadToPinata}
      />

      <div className={Style.upload_box}>
        <div className={formStyle.Form_box_input}>
          <label htmlFor="nft">Họ và tên</label>
          <input
            type="text"
            placeholder="Nguyễn Thúy Quỳnh"
            className={formStyle.Form_box_input_userName}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className={formStyle.Form_box_input}>
          <label htmlFor="website">Email</label>
          <div className={formStyle.Form_box_input_box}>
            <div className={formStyle.Form_box_input_box_icon}>
              <MdOutlineEmail />
            </div>

            <input
              type="text"
              placeholder=" Email"
              onChange={(e) => setWebsite(e.target.value)}
            />
          </div>

          <p className={Style.upload_box_input_para}>
            Ciscrypt will include a link to this URL on this item's detail page,
            so that users can click to learn more about it. You are welcome to
            link to your own webpage with more details.
          </p>
        </div>

        {/* <div className={formStyle.Form_box_input}>
          <label htmlFor="website">Số điện thoại</label>
          <div className={formStyle.Form_box_input_box}>
            <div className={formStyle.Form_box_input_box_icon}>
              <MdOutlinePhone />
            </div>

            <input
              type="text"
              placeholder="+84"
              onChange={(e) => setWebsite(e.target.value)}
            />
          </div>

          {/* <p className={Style.upload_box_input_para}>
            Ciscrypt will include a link to this URL on this item's detail page,
            so that users can click to learn more about it. You are welcome to
            link to your own webpage with more details.
          </p> 
        </div> */}

        <div className={formStyle.Form_box_input}>
          <label htmlFor="description">Thư giới thiệu</label>
          <textarea
            name=""
            id=""
            cols="30"
            rows="6"
            placeholder="Viết giới thiệu ngắn gọn, chỉn chu sẽ giúp bạn trở nên chuyên nghiệp và gây ấn tượng hơn với nhà tuyển dụng"
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <p>
          Một thư giới thiệu ngắn gọn, chỉn chu sẽ giúp bạn trở nên chuyên nghiệp và gây ấn tượng hơn với nhà tuyển dụng.
          </p>
        </div>

        <div className={formStyle.Form_box_input}>
          <label htmlFor="name">Vị trí ứng tuyển</label>
          <p className={Style.upload_box_input_para}>
            Chọn một vị trí ứng tuyển.
          </p>

          <div className={Style.upload_box_slider_div}>
            {categoryArray.map((el, i) => (
              <div
                className={`${Style.upload_box_slider} ${
                  active == i + 1 ? Style.active : ""
                }`}
                key={i + 1}
                onClick={() => (setActive(i + 1), setCategory(el.category))}
              >
                <div className={Style.upload_box_slider_box}>
                  <div className={Style.upload_box_slider_box_img}>
                    <Image
                      src={el.image}
                      alt="background image"
                      width={70}
                      height={70}
                      className={Style.upload_box_slider_box_img_img}
                    />
                  </div>
                  <div className={Style.upload_box_slider_box_img_icon}>
                    <TiTick />
                  </div>
                </div>
                <p>{el.category}</p>
              </div>
            ))}
          </div>
        </div>
        <div className={formStyle.Form_box_input_social}>
          <div className={formStyle.Form_box_input}>
            <label htmlFor="royalties">Royalties</label>
            <div className={formStyle.Form_box_input_box}>
              <div className={formStyle.Form_box_input_box_icon}>
                <FaPercent />
              </div>
              <input
                type="text"
                placeholder="20%"
                onChange={(e) => setRoyalties(e.target.value)}
              />
            </div>
          </div>

          <div className={formStyle.Form_box_input}>
            <label htmlFor="size">Size</label>
            <div className={formStyle.Form_box_input_box}>
              <div className={formStyle.Form_box_input_box_icon}>
                <MdOutlineAttachFile />
              </div>
              <input
                type="text"
                placeholder="165MB"
                onChange={(e) => setFileSize(e.target.value)}
              />
            </div>
          </div>

          <div className={formStyle.Form_box_input}>
            <label htmlFor="properties">Properties</label>
            <div className={formStyle.Form_box_input_box}>
              <div className={formStyle.Form_box_input_box_icon}>
                <AiTwotonePropertySafety />
              </div>
              <input
                type="text"
                placeholder="Properties"
                onChange={(e) => setProperties(e.target.value)}
              />
            </div>
          </div>

          <div className={formStyle.Form_box_input}>
            <label htmlFor="price">Giá</label>
            <div className={formStyle.Form_box_input_box}>
              <div className={formStyle.Form_box_input_box_icon}>
                <AiTwotonePropertySafety />
              </div>
              <input
                type="text"
                placeholder="Price"
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className={Style.upload_box_btn}>
          <Button
            btnName="Tải lên"
            handleClick={async () =>
              createNFT(
                name,
                price,
                image,
                description,
                router
                // website,
                // royalties,
                // fileSize,
                // category
              )
            }
            classStyle={Style.upload_box_btn_style}
          />
          {/* <Button
            btnName="Preview"
            handleClick={() => {}}
            classStyle={Style.upload_box_btn_style}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default UploadNFT;
