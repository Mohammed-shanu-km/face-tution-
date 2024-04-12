import React from 'react'
import './HomeStartLearning.css'
import image from '../../assets/Other 07.png'
import ellipse from '../../assets/Ellipse 3.png'
import { FaCircleCheck } from "react-icons/fa6";

const HomeStartLearning = () => {
  return (
    <div className='start-learning-div'>
        <div className='start-learning-text-div'>
            <h1>Its Easy To Start <span>Learning</span></h1>
            <p id='start-learning-p'>Provides You With Latest Online Learning System And Material That Help Your Knowledge Growing,</p>
            <div className='options'><FaCircleCheck size={28} color='#2FDB89' id='tick'/><p>Create Account</p></div>
            <div className='options'><FaCircleCheck size={28} color='#2FDB89' id='tick'/><p>Purchase Account</p></div>
            <div className='options'><FaCircleCheck size={28} color='#2FDB89' id='tick'/><p>Start Learning</p></div>
            <button>Get The App</button>
        </div>

        <div className='start-learning-image-div'>
            <img src={ellipse} alt="" id='ellipse' />
            <img src={image} alt="" id='computer'/>
        </div>
    </div>
  )
}

export default HomeStartLearning