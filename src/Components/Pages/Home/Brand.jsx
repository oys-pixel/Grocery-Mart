import React from "react";
import img1 from "../../../Images/tb1.png";
import img2 from "../../../Images/tb2.png";
import img3 from "../../../Images/tb3.png";
import img4 from "../../../Images/tb4.png";
import img5 from "../../../Images/tb5.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

function Brand() {
  return (
    <>
      <div className="brand py-5">
        <div className="container py-4">
          <h3>Top Brands</h3>
          <div className="headnodge ">
            <Swiper
              slidesPerView={3}
              centeredSlides={true}
              spaceBetween={20}
              grabCursor={true}
              loop={true}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              pagination={false}
              navigation={true}
              modules={[Navigation, Autoplay]}
              className="mySwiper"
            >
              <SwiperSlide>
                {" "}
                <div className="item">
                  <img src={img1} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="item">
                  <img src={img2} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="item">
                  <img src={img3} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="item">
                  <img src={img4} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="item">
                  <img src={img5} alt="" />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}

export default Brand;
