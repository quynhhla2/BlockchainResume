import React from "react";
import Image from "next/image";
import { FaUserAlt, FaRegImage, FaUserEdit } from "react-icons/fa";
import { MdHelpCenter, MdWork } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { TbDownloadOff, TbDownload, TbLogout } from "react-icons/tb";
import { toast } from "react-toastify";
import Link from "next/link";

// INTERNAL IMPORT
import Style from "./Profile.module.css";
import images from "../../../img";
import { useRouter } from "next/router";

const Profile = ({ currentAccount }) => {
  const router = useRouter()
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  return (
    <div className={Style.profile}>
      <div className={Style.profile_account}>
        <Image
          src={images.user1}
          alt="user profile"
          width={50}
          height={50}
          className={Style.profile_account_img}
        />

        <div className={Style.profile_account_info}>
          <p>{user?.name}</p>
          <small>{currentAccount.slice(0, 18)}..</small>
        </div>
      </div>

      <div className={Style.profile_menu}>
        <div className={Style.profile_menu_one}>
          <div className={Style.profile_menu_one_item}>
            <FaUserAlt />
            <p>
              <Link href={{ pathname: "/author" }}>Tài khoản</Link>
            </p>
          </div>

          {/* <div className={Style.profile_menu_one_item}>
            <FaRegImage />
            <p>
              <Link href={{ pathname: "/my-items" }}>My Items</Link>
            </p>
          </div> */}

          <div className={Style.profile_menu_one_item}>
            <FaUserEdit />
            <p>
              <Link href={{ pathname: "/account" }}>Chỉnh sửa thông tin</Link>
            </p>
          </div>

          <div className={Style.profile_menu_one_item}>
            <MdWork />
            <p>
              <Link href={{ pathname: "/uploadJob" }}>Đăng bài tuyển dụng</Link>
            </p>
          </div>
        </div>

        <div className={Style.profile_menu_two}>
          <div className={Style.profile_menu_one_item}>
            <MdHelpCenter />
            <p>
              <Link href={{ pathname: "/contactUs" }}>Trợ giúp</Link>
            </p>
          </div>

          <div className={Style.profile_menu_one_item}>
            <TbDownload />
            <p>
              <Link href={{ pathname: "/aboutUs" }}>Liên hệ</Link>
            </p>
          </div>
          <div className={Style.profile_menu_one_item}>
            <TbLogout />
            <p onClick={() => {
              localStorage.clear();
              router.reload();
              toast.success("User logout successfully", { autoClose: 1500 });
            }}>
              Đăng xuất
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
