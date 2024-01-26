import React from "react";
import Image from "next/image";

// INTERNAL IMPORT
import Style from "../styles/aboutUs.module.css";
import Brand from "../components/Brand/Brand";
import images from "../img";

const aboutUs = () => {
  const founderArray = [];
  return (
    <div className={Style.aboutUs}>
      <div className={Style.aboutUs_box}>
        <div className={Style.aboutUs_box_hero}>
          <div className={Style.aboutUs_box_hero_left}>
            <h1>Liên hệ với chúng tôi</h1>
            <p>
              {/* sfhwefio23nwekfhwhg324efwiojweljwhgf3oi2hfoiewojf3ogewjfi
              fg32ihwehsdfhowihvo3ih4woiehgwiohegfi43howihesjvsjdviwh4iovghwei
              wfuhi3hwiwefvheihveiwvhiwhgoi3hghi3ohiwlehfgjwreighweih34oigh43gi4woi. */}
            </p>
          </div>
          <div className={Style.aboutUs_box_hero_right}>
            <Image src={images.creatorbackground3} />
          </div>
        </div>

        {/* <div className={Style.aboutUs_box_title}>
          <h2>Founder</h2>
          <p>
            ằhfiofowefiesfhwui3gfuehfheafwiejfwiefwiefjiwefwefhewhf
            fwguf3ugwehkfhwefwehhefoifhwiefwfjweifj.
          </p>
        </div> */}

        <div className={Style.aboutUs_box_founder}>
          <div className={Style.aboutUs_box_founder_box}></div>
        </div>
      </div>
    </div>
  );
};

export default aboutUs;
