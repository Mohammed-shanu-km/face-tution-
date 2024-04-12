import React from "react";
import "./HomeSwiper4.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import student1 from '../../assets/Frame 73 (2).png';
import student2 from '../../assets/Frame 73 (1).png';
import student3 from '../../assets/Frame 73.png';
import { GoStarFill } from "react-icons/go";

const HomeSwiper4 = () => {
  return (
    <div className="student-review-div">
      <div className="student-review-text">
        <h1>
          What Our Students Are <br /> Saying <span>About Us</span>
        </h1>
      </div>

      <div className="student-review-swiper">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
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
            <div className="student-review-slide">
              <img src={student1} alt="" />
              <div className="student-review-star">
                <GoStarFill size={20} color="#FDF533"/>
                <GoStarFill size={20} color="#FDF533"/>
                <GoStarFill size={20} color="#FDF533"/>
                <GoStarFill size={20} color="#FDF533"/>
                <GoStarFill size={20} color="#FDF533"/>
              </div>
              <h3>James</h3>
              <p>Provides You With Latest Online Learning System.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="student-review-slide">
              <img src={student2} alt="" />
              <div className="student-review-star">
                <GoStarFill size={20} color="#FDF533"/>
                <GoStarFill size={20} color="#FDF533"/>
                <GoStarFill size={20} color="#FDF533"/>
                <GoStarFill size={20} color="#FDF533"/>
                <GoStarFill size={20} color="#FDF533"/>
              </div>
              <h3>Angelina</h3>
              <p>Provides You With Latest Online Learning System.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="student-review-slide">
              <img src={student3} alt="" />
              <div className="student-review-star">
                <GoStarFill size={20} color="#FDF533"/>
                <GoStarFill size={20} color="#FDF533"/>
                <GoStarFill size={20} color="#FDF533"/>
                <GoStarFill size={20} color="#FDF533"/>
                <GoStarFill size={20} color="#FDF533"/>
              </div>
              <h3>James</h3>
              <p>Provides You With Latest Online Learning System.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="student-review-slide">
              <img src={student1} alt="" />
              <div className="student-review-star">
                <GoStarFill size={20} color="#FDF533"/>
                <GoStarFill size={20} color="#FDF533"/>
                <GoStarFill size={20} color="#FDF533"/>
                <GoStarFill size={20} color="#FDF533"/>
                <GoStarFill size={20} color="#FDF533"/>
              </div>
              <h3>Angelina</h3>
              <p>Provides You With Latest Online Learning System.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="student-review-slide">
              <img src={student2} alt="" />
              <div className="student-review-star">
                <GoStarFill size={20} color="#FDF533"/>
                <GoStarFill size={20} color="#FDF533"/>
                <GoStarFill size={20} color="#FDF533"/>
                <GoStarFill size={20} color="#FDF533"/>
                <GoStarFill size={20} color="#FDF533"/>
              </div>
              <h3>James</h3>
              <p>Provides You With Latest Online Learning System.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="student-review-slide">
              <img src={student3} alt="" />
              <div className="student-review-star">
                <GoStarFill size={20} color="#FDF533"/>
                <GoStarFill size={20} color="#FDF533"/>
                <GoStarFill size={20} color="#FDF533"/>
                <GoStarFill size={20} color="#FDF533"/>
                <GoStarFill size={20} color="#FDF533"/>
              </div>
              <h3>Angelina</h3>
              <p>Provides You With Latest Online Learning System.</p>
            </div>
          </SwiperSlide>
          {/* <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide> */}
        </Swiper>
      </div>
    </div>
  );
};

export default HomeSwiper4;
