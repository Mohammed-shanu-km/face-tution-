import React from 'react'
import './HomeHero.css'
import heroimg from '../../assets/Frame 7.png'
import mobileheroimg from '../../assets/Frame 7b.png'
import heroimgfinal from '../../assets/Frame final.png'
import heroimgfinal2 from '../../assets/Frame final2.png'
import heroimgfinal3 from '../../assets/Frame final3.png'
import heroimgfinal4 from '../../assets/Frame final3.png'

const HomeHero = () => {
  return (
    <div className='home-hero-div'>
      <div className="home-hero">
        <div className='home-hero-text'>
          <h1>Lets Explore <br /> Magical Way <br /> To <span>Learn.</span> </h1>
          <p>provides you with latest online learning system <br /> and material that help your knowledge growing,</p>
          <a href="" className='seeAllCourses'>see all courses</a>
           
        </div>

        <div className='home-hero-image'>
          <img src={heroimgfinal4} alt="" />
          <img src={heroimgfinal3} alt="" id='mobilehero-img'/>
        </div>
      </div>
    </div>
  )
}

export default HomeHero