import React from 'react'
import Header from '../../components/Header/Header'
import HomeHero from '../../container/Home/HomeHero'
import HomeSwiper1 from '../../container/Home/HomeSwiper1'
import HomeSwiper2 from '../../container/Home/HomeSwiper2'
import HomeSwiper3 from '../../container/Home/HomeSwiper3'
import HomeStartLearning from '../../container/Home/HomeStartLearning'
import HomeSwiper4 from '../../container/Home/HomeSwiper4'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <div>
        <Header/>
        <HomeHero/>
        <HomeSwiper1/>
        <HomeSwiper2/>
        <HomeSwiper3/>
        <HomeStartLearning/>
        <HomeSwiper4/>
        <Footer/>
    </div>
  )
}

export default Home