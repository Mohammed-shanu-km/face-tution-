import React from 'react'
import './Footer.css'
import playstoreicon from '../../assets/Frame 46.png'
import appstoreicon from '../../assets/Frame 47.png'
import footerlogo from '../../assets/logo footer2.jpg'
import { BsPatchCheck } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { TfiFacebook } from "react-icons/tfi";
import { FaXTwitter } from "react-icons/fa6";
import { BsWhatsapp } from "react-icons/bs";

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-left'>
            <img src={footerlogo} alt="" />
        </div>

        <div className='social-media-div'>
                <div className='social-icon-div'><TfiFacebook className='social-icon' /></div>
                <div className='social-icon-div'><BsWhatsapp   className='social-icon'/></div>
                <div className='social-icon-div'><BsInstagram className='social-icon'/></div>
                <div className='social-icon-div'><FaXTwitter className='social-icon'/></div>
        </div>

        <div className='footer-right'> 
             <ul>
                <li><BsPatchCheck className='footer-icon'/>About Us</li>
                <li><BsPatchCheck className='footer-icon'/>Contact Us</li>
                <li><BsPatchCheck className='footer-icon'/>Privacy policy</li>
                <li><BsPatchCheck className='footer-icon'/>Feedback</li>
             </ul>
        </div>

        
    </div>
  )
}

export default Footer