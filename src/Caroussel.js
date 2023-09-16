import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Pagination, Navigation ,Autoplay} from "swiper/modules";

import img from "./images/picture1.jpg";
import img2 from "./images/Picture 2.png";
import img3 from "./images/Picture 3.jpg";

export default function Caroussel() {
  return (
    <>
      <Swiper
       effect='slide'
       slidesPerView={1} 
       loop={true}
       autoplay={{
           "delay": 2300,
           "disableOnInteraction": false,
       }}
       className="mySwiper"
        modules={[Autoplay,Pagination, Navigation]}
      >
        <SwiperSlide>
          <img className="caroussel_img" src={img} alt="img" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="caroussel_img" src={img2} alt="img" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="caroussel_img" src={img3} alt="img" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
