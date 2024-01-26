import React from 'react';
import Image from 'next/image';

// INTERNAL IMPORT
import Style from './Notification.module.css';
import images from '../../../img';

const Notification = () => {
  return (
    <div className={Style.notification}>
      <p>Thông báo</p>
      <div className={Style.notification_box}>
        <div className={Style.notification_box_img}>
          <Image 
            src={images.user1} 
            alt='profile image' 
            width={50} 
            height={50}
            className={Style.notification_box_img}
          />
        </div>

        <div className={Style.notification_box_info}>
          <h4>Nguyễn Thúy Quỳnh</h4>
          <p>Đã yêu cầu giao dịch...</p>
          <small>3 phút trước</small>
        </div>
        <span className={Style.notification_box_new}></span>
      </div>
    </div>
  )
}

export default Notification