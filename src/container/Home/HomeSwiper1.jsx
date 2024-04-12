import React from "react";
import "./HomeSwiper1.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import slideimg1 from "../../assets/Depth 7, Frame 0.png";
import slideimg2 from "../../assets/Depth 7, Frame 3.png";
import slideimg3 from "../../assets/Depth 7, Frame 4.png";
import { PiCurrencyDollarBold } from "react-icons/pi";
import { TbClockHour10 } from "react-icons/tb";

const HomeSwiper1 = () => {
  return (
    <div className="home-swiper1">
      <div className="popular-courses-text">
        <h6>Popular Courses</h6>
        <h1>
          Our Educational <span>Course</span>
        </h1>
      </div>

      <div className="popular-courses-swiper">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          // freeMode={true}
          speed={1500}
          autoplay={true}
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
          modules={[FreeMode, Pagination,Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="slide-image-div">
              <img src={slideimg1} alt="" />
              <div className="slide-image-title">
                <p>Financial Accounting</p>
                <p className="price"><PiCurrencyDollarBold id="dollar-icon" /> 30</p>
              </div> 
              <p className="text-start">Commerce</p>
              <div className="duration-viewbtn-div">
                <div className="duration">
                <TbClockHour10 id="clock-icon"/>
                <p>3 Hrs</p>
                </div>
                <a href="" id="viewCourse-btn">View Course</a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-image-div">
              <img src={slideimg2} alt="" />
              <div className="slide-image-title">
                <p>Financial Accounting</p>
                <p className="price"><PiCurrencyDollarBold id="dollar-icon" /> 30</p>
              </div>
              <p className="text-start">Commerce</p>
              <div className="duration-viewbtn-div">
                <div className="duration">
                <TbClockHour10 id="clock-icon"/>
                <p>3 Hrs</p>
                </div>
                <a href="" id="viewCourse-btn">View Course</a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-image-div">
              <img src={slideimg3} alt="" />
              <div className="slide-image-title">
                <p>Financial Accounting</p>
                <p className="price"><PiCurrencyDollarBold id="dollar-icon" /> 30</p>
              </div>
              <p className="text-start">Commerce</p>
              <div className="duration-viewbtn-div">
                <div className="duration">
                <TbClockHour10 id="clock-icon"/>
                <p>3 Hrs</p>
                </div>
                <a href="" id="viewCourse-btn">View Course</a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-image-div">
              <img src={slideimg1} alt="" />
              <div className="slide-image-title">
                <p>Financial Accounting</p>
                <p className="price"><PiCurrencyDollarBold id="dollar-icon" /> 30</p>
              </div>
              <p className="text-start">Commerce</p>
              <div className="duration-viewbtn-div">
                <div className="duration">
                <TbClockHour10 id="clock-icon"/>
                <p>3 Hrs</p>
                </div>
                <a href="" id="viewCourse-btn">View Course</a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-image-div">
              <img src={slideimg2} alt="" />
              <div className="slide-image-title">
                <p>Financial Accounting</p>
                <p className="price"><PiCurrencyDollarBold id="dollar-icon" /> 30</p>
              </div>
              <p className="text-start">Commerce</p>
              <div className="duration-viewbtn-div">
                <div className="duration">
                <TbClockHour10 id="clock-icon"/>
                <p>3 Hrs</p>
                </div>
                <a href="" id="viewCourse-btn">View Course</a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-image-div">
              <img src={slideimg3} alt="" />
              <div className="slide-image-title">
                <p>Financial Accounting</p>
                <p className="price"><PiCurrencyDollarBold id="dollar-icon" /> 30</p>
              </div>
              <p className="text-start">Commerce</p>
              <div className="duration-viewbtn-div">
                <div className="duration">
                <TbClockHour10 id="clock-icon"/>
                <p>3 Hrs</p>
                </div>
                <a href="" id="viewCourse-btn">View Course</a>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div class="custom-pagination">

      </div>
    </div>
  );
};

export default HomeSwiper1;
