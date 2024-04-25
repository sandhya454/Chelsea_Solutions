import React, { useState,useEffect } from 'react';
import './Navbar.css';
import logo from '../../assets/Images/Callsheetlogo.png';
import {useNavigate} from 'react-router-dom';

function Navbar() {
  const [scrolled,setScrolled]=useState(false);
  const navigate=useNavigate();
  const goTo=(page)=>{
        navigate(page)
  }
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };
    window.addEventListener('scroll', handleScroll);    
    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  
  return (
   <div className={`NavbarMainCont ${scrolled ? 'scrolled':""}`}>
    <div className='NavDesktop'>
        <div className='NavImg'>
            <img src={logo} alt="logo"  className='NavLogo' onClick={()=>{goTo("/")}}/>
            {/* <p>Solutions</p> */}
        </div>
        <div className='NavItems'>
          <ul>
            <li onClick={()=>goTo("/")}>Home</li>
            <li onClick={()=>{goTo("/product-details")}}>Product Details</li>
            <li onClick={()=>{goTo("contact-us")}}>About Us</li>
            <li onClick={()=>{goTo("blogs")}}>Blogs</li>
            <li onClick={()=>{goTo("contact-us")}}>ContactUs</li>
          </ul>       
        </div>
    </div>
    <div className='NavMobile'>
    </div>        
   </div>
  )
}

export default Navbar