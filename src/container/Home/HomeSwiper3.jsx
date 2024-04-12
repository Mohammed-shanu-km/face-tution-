import React from "react";
import "./HomeSwiper3.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { FreeMode,  Pagination } from "swiper/modules";
import tutor1 from "../../assets/Rectangle.png";
import tutor2 from "../../assets/Rectangle (1).png";
import tutorf from '../../assets/tutor1.png'
import tutorm from '../../assets/tutor2.png'
import {instructorData} from '../../constants/instructors'

function getRandomInt() {
  console.log(Math.floor(Math.random() * 4));
  return Math.floor(Math.random() * 4);
}

const colorArr=['#E2B384','#6C8BB0', '#83CBCB', '#00B1A8']

const HomeSwiper3 = () => {
  return (
    <div>
      <div className="top-instructors-heading">
        <h1>
          Meet Our Top <span>Instructors</span>
        </h1>
      </div>

      <div className="top-instructors-swiper">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="swiper-tutor-div">
              <div className="slide-div1">

                <div style={{ background: "#E2B384", display:'flex', borderRadius:'40px'}}>
                  <div style={{width:'50%',height:'320px', paddingTop:'30px'}}><img src={tutor1} alt="" /></div> 
                  <div style={{width:'50%',height:'320px', paddingTop:'70px', textAlign:'start'}}>
                    <button>financial accounting</button>
                    <h3>Ayisha Meharin</h3>
                    <p>8 year in financial accounting</p>
                     
                  </div>
                </div>

                <div style={{ background: "#6C8BB0", display:'flex', borderRadius:'40px'  }}>
                    <div style={{width:'50%',height:'320px', paddingTop:'30px'}}><img src={tutor2} alt="" /></div>
                  <div style={{width:'50%',height:'320px', paddingTop:'70px', textAlign:'start'}}>
                    <button>business statistics</button>
                    <h3>john abraham</h3>
                    <p>10 year in business statistics</p>
                     
                  </div>
                </div>
              </div>



              <div className="slide-div2">

                <div style={{ background: "#00B1A8", display:'flex', borderRadius:'40px' }}>
                  <div style={{width:'50%',height:'320px', paddingTop:'30px'}}><img src={tutor2} alt="" /></div>
                  <div  style={{width:'50%',height:'320px', paddingTop:'70px', textAlign:'start'}}>
                    <button>business statistics</button>
                    <h3>john abraham</h3>
                    <p>10 year in business statistics</p>
                     
                  </div>
                </div>

                <div style={{ background: "#83CBCB", display:'flex', borderRadius:'40px' }}>
                <div style={{width:'50%',height:'320px', paddingTop:'30px'}}><img src={tutor1} alt="" /></div>
                  <div style={{width:'50%',height:'320px', paddingTop:'70px', textAlign:'start'}}>
                    <button>financial accounting</button>
                    <h3>ayisha meharin</h3>
                    <p>8 year in financial accounting</p>
                     
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="swiper-tutor-div">
              <div className="slide-div1">

                <div style={{ background: "#E2B384", display:'flex', borderRadius:'40px'}}>
                  <div style={{width:'50%',height:'320px', paddingTop:'30px'}}><img src={tutor1} alt="" /></div> 
                  <div style={{width:'50%',height:'320px', paddingTop:'70px', textAlign:'start'}}>
                    <button>financial accounting</button>
                    <h3>Ayisha Meharin</h3>
                    <p>8 year in financial accounting</p>
                     
                  </div>
                </div>

                <div style={{ background: "#6C8BB0", display:'flex', borderRadius:'40px'  }}>
                    <div style={{width:'50%',height:'320px', paddingTop:'30px'}}><img src={tutor2} alt="" /></div>
                  <div style={{width:'50%',height:'320px', paddingTop:'70px', textAlign:'start'}}>
                    <button>business statistics</button>
                    <h3>john abraham</h3>
                    <p>10 year in business statistics</p>
                     
                  </div>
                </div>
              </div>



              <div className="slide-div2">

                <div style={{ background: "#00B1A8", display:'flex', borderRadius:'40px' }}>
                  <div style={{width:'50%',height:'320px', paddingTop:'30px'}}><img src={tutor2} alt="" /></div>
                  <div  style={{width:'50%',height:'320px', paddingTop:'70px', textAlign:'start'}}>
                    <button>business statistics</button>
                    <h3>john abraham</h3>
                    <p>10 year in business statistics</p>
                     
                  </div>
                </div>

                <div style={{ background: "#83CBCB", display:'flex', borderRadius:'40px' }}>
                <div style={{width:'50%',height:'320px', paddingTop:'30px'}}><img src={tutor1} alt="" /></div>
                  <div style={{width:'50%',height:'320px', paddingTop:'70px', textAlign:'start'}}>
                    <button>financial accounting</button>
                    <h3>ayisha meharin</h3>
                    <p>8 year in financial accounting</p>
                     
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="swiper-tutor-div">
              <div className="slide-div1">

                <div style={{ background: "#E2B384", display:'flex', borderRadius:'40px'}}>
                  <div style={{width:'50%',height:'320px', paddingTop:'30px'}}><img src={tutor1} alt="" /></div> 
                  <div style={{width:'50%',height:'320px', paddingTop:'70px', textAlign:'start'}}>
                    <button>financial accounting</button>
                    <h3>Ayisha Meharin</h3>
                    <p>8 year in financial accounting</p>
 
                  </div>
                </div>

                <div style={{ background: "#6C8BB0", display:'flex', borderRadius:'40px'  }}>
                    <div style={{width:'50%',height:'320px', paddingTop:'30px'}}><img src={tutor2} alt="" /></div>
                  <div style={{width:'50%',height:'320px', paddingTop:'70px', textAlign:'start'}}>
                    <button>business statistics</button>
                    <h3>john abraham</h3>
                    <p>10 year in business statistics</p>
                     
                  </div>
                </div>
              </div>



              <div className="slide-div2">

                <div style={{ background: "#00B1A8", display:'flex', borderRadius:'40px' }}>
                  <div style={{width:'50%',height:'320px', paddingTop:'30px'}}><img src={tutor2} alt="" /></div>
                  <div  style={{width:'50%',height:'320px', paddingTop:'70px', textAlign:'start'}}>
                    <button>business statistics</button>
                    <h3>john abraham</h3>
                    <p>10 year in business statistics</p>
                     
                  </div>
                </div>

                <div style={{ background: "#83CBCB", display:'flex', borderRadius:'40px' }}>
                <div style={{width:'50%',height:'320px', paddingTop:'30px'}}><img src={tutor1} alt="" /></div>
                  <div style={{width:'50%',height:'320px', paddingTop:'70px', textAlign:'start'}}>
                    <button>financial accounting</button>
                    <h3>ayisha meharin</h3>
                    <p>8 year in financial accounting</p>
                     
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="swiper-tutor-div">
              <div className="slide-div1">

                <div style={{ background: "#E2B384", display:'flex', borderRadius:'40px'}}>
                  <div style={{width:'50%',height:'320px', paddingTop:'30px'}}><img src={tutor1} alt="" /></div> 
                  <div style={{width:'50%',height:'320px', paddingTop:'70px', textAlign:'start'}}>
                    <button>financial accounting</button>
                    <h3>Ayisha Meharin</h3>
                    <p>8 year in financial accounting</p>
                     
                  </div>
                </div>

                <div style={{ background: "#6C8BB0", display:'flex', borderRadius:'40px'  }}>
                    <div style={{width:'50%',height:'320px', paddingTop:'30px'}}><img src={tutor2} alt="" /></div>
                  <div style={{width:'50%',height:'320px', paddingTop:'70px', textAlign:'start'}}>
                    <button>business statistics</button>
                    <h3>john abraham</h3>
                    <p>10 year in business statistics</p>
                     
                  </div>
                </div>
              </div>



              <div className="slide-div2">

                <div style={{ background: "#00B1A8", display:'flex', borderRadius:'40px' }}>
                  <div style={{width:'50%',height:'320px', paddingTop:'30px'}}><img src={tutor2} alt="" /></div>
                  <div  style={{width:'50%',height:'320px', paddingTop:'70px', textAlign:'start'}}>
                    <button>business statistics</button>
                    <h3>john abraham</h3>
                    <p>10 year in business statistics</p>
                     
                  </div>
                </div>

                <div style={{ background: "#83CBCB", display:'flex', borderRadius:'40px' }}>
                <div style={{width:'50%',height:'320px', paddingTop:'30px'}}><img src={tutor1} alt="" /></div>
                  <div style={{width:'50%',height:'320px', paddingTop:'70px', textAlign:'start'}}>
                    <button>financial accounting</button>
                    <h3>ayisha meharin</h3>
                    <p>8 year in financial accounting</p>
                     
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>


      <div className="top-instructors-mobile-swiper">
      <Swiper
          slidesPerView={1}
          spaceBetween={0}
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
          modules={[  Pagination]}
          className="mySwiper"
        >
          
            {instructorData.map((item) => (
              <SwiperSlide>
              <div className="instuctors-total-div" style={{backgroundColor: colorArr[getRandomInt()]}}>
                <button>{item.department}</button>
                <div className="instructors-img-div">
                    <img src={item.image} alt="" />
                </div>
                <div className="instructors-details-div">    
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <a href="">know more</a>
                </div>
              </div>
              </SwiperSlide>
            ))}   
          
        </Swiper>
      </div>
    </div>
  );
};

export default HomeSwiper3;
