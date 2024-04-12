import React from "react";
import "./HomeSwiper1.css";
import "./HomeSwiper2.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
import slide2img1 from "../../assets/Saly-27.png";
import slide2img2 from "../../assets/Saly-24.png";
import slide2img3 from "../../assets/Saly-12.png";
import { PiCurrencyDollarBold } from "react-icons/pi";
import { TbClockHour10 } from "react-icons/tb";

const HomeSwiper2 = () => {
  return (
    <div className="home-swiper1 home-swiper2">
      <div className="popular-courses-text best-platform">
        <h1>
          The <span>Best</span> Platform To <br />
          Learn Something Online
        </h1>
      </div>

      <div className="popular-courses-swiper best-platform-swiper">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640 : {
              slidesPerView: 1,
              spaceBetween:20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="slide-image-div slide2-image-div" style={{paddingTop:'32px'}}>
              <img src={slide2img1} alt="" id="slide2img1"/>
              <div className="swiper2-content">
                
                  <button>Course Materials</button>
                  <p>Lorem Ipsum Dolor Sit Amet Consectetur.</p>
                  <a href="">Read More</a>
                
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-image-div slide2-image-div">
              <img src={slide2img2} alt="" id="slide2img2"/>
              <div className="swiper2-content">
                
                  <button>course materials</button>
                  <p>Lorem ipsum dolor sit amet consectetur.</p>
                  <a href="">Read More</a>
                
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-image-div slide2-image-div" style={{paddingTop:'12px'}}>
              <img src={slide2img3} alt="" id="slide2img3"/>
              <div className="swiper2-content">
                
                  <button>course materials</button>
                  <p>Lorem ipsum dolor sit amet consectetur.</p>
                  <a href="">Read More</a>
                
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-image-div slide2-image-div"  style={{paddingTop:'32px'}}>
              <img src={slide2img1} alt="" id="slide2img1"/>
              <div className="swiper2-content">
                
                  <button>course materials</button>
                  <p>Lorem ipsum dolor sit amet consectetur.</p>
                  <a href="">Read More</a>
                
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-image-div slide2-image-div">
              <img src={slide2img2} alt="" id="slide2img2"/>
              <div className="swiper2-content">
                
                  <button>course materials</button>
                  <p>Lorem ipsum dolor sit amet consectetur.</p>
                  <a href="">Read More</a>
                
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-image-div slide2-image-div" style={{paddingTop:'12px'}}>
              <img src={slide2img3} alt="" id="slide2img3"/>
              <div className="swiper2-content">
                
                  <button>course materials</button>
                  <p>Lorem ipsum dolor sit amet consectetur.</p>
                  <a href="">Read More</a>
                
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default HomeSwiper2;
