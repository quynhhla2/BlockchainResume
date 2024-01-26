import React, { useState } from "react";
import { motion } from "framer-motion";
import { TiArrowLeftThick } from "react-icons/ti";

// INTERNAL IMPORT
import Style from "./Slider.module.css";

const Slider = () => {
  const sliderArray = [1, 2, 3, 4, 5, 6, 7];
  const [width, setWidth] = useState(0);
//   const dragSlider = useRef();

  return (
    <div className={Style.slider}>
        <div className={Style.slider_box}>
            
        </div>
    </div>
  );
};

export default Slider;
