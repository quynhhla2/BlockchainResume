import React from 'react';
import Link from 'next/link';

// INTERNAL IMPORT
import Style from './Discover.module.css';

const Discover = () => {

  //----DISCOVER NAVIGATION MENU----
  const discover = [
    // {
    //   name: "Collection",
    //   link: "collection"
    // },

    {
      name: "Tìm kiếm",
      link: "searchPage"
    },

    {
      name: "Trang cá nhân",
      link: "author"
    },

    {
      name: "Tải lên CV",
      link: "uploadNFT"
    },

    {
      name: "Cập nhật tài khoản",
      link: "account"
    },

    {
      name: "Kết nối ví",
      link: "connectWallet"
    },

    // {
    //   name: "Blog",
    //   link: "blog"
    // }
  ]

  return (
    <div>
      {discover.map((el, i) => (
        <div key={i + 1} className={Style.discover}>
          <Link href={{ pathname: `${el.link}` }}>{el.name}</Link>
        </div>
      ))}
    </div>
  )
}

export default Discover