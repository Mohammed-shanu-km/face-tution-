import React, { useState } from 'react'
import './Header.css'
import { IoSearch } from "react-icons/io5";
import logo from '../../assets/logo (4).png'
import logonoBG from '../../assets/logo__4_-removebg-preview.png'
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineClose } from "react-icons/md";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    console.log(isMobileMenuOpen);
  };

  return (
      <div className='header'>
        <nav className="navbar">
          <div className='mobile-header'>
            <a href='/'>
              <img src={logonoBG} alt="" />
            </a>
            {isMobileMenuOpen ? <MdOutlineClose size={30} onClick={toggleMobileMenu} /> : <RxHamburgerMenu size={35} id='hamburger-icon' onClick={toggleMobileMenu}/>}
          </div>
          <div className={`nav-links-div ${isMobileMenuOpen ? 'mobile-menu' : ''}`}>
            <ul className='nav-links'>
                <li><a href="#">HOME</a></li>
                <li><a href="#">COURSES</a></li>
                <li><a href="#">FEATURES</a></li>
                <li><a href="#">INSTRUCTORS</a></li>
                <li><a href="#">TESTIMONIALS</a></li>
            </ul>
          </div>
        </nav>
      </div>
  )
}

export default Header