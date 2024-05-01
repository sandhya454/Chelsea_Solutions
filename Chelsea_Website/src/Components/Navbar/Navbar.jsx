import React, { useState,useEffect } from 'react';
import './Navbar.css';
import logo from '../../assets/Images/Callsheetlogo.png';
import {useNavigate} from 'react-router-dom';
import { Icon } from '@iconify/react/dist/iconify.js';

function Navbar() {
  const [scrolled,setScrolled]=useState(false);
  const [toggleClick,setToggleClick]=useState(false)
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

  const handleClick=()=>{
    setToggleClick(!toggleClick)
   }
  return (
    <>
   <div className={`NavbarMainCont ${scrolled ? 'scrolled':""}`}>
    <div className='NavDesktop'>
        <div className='NavImg'>
            <img src={logo} alt="logo"  className='NavLogo' onClick={()=>{goTo("/")}}/>
            <Icon icon="iconamoon:menu-burger-horizontal-bold" className='hamburger' onClick={handleClick} />
            {/* <p>Solutions</p> */}
        </div>
        <div className='NavItems'>
          <ul>
            <li onClick={()=>goTo("/")}>Home</li>
            <li onClick={()=>{goTo("/product-details")}}>Product Details</li>
            <li onClick={()=>{goTo("about-us")}}>About Us</li>
            <li onClick={()=>{goTo("/")}}>Blogs</li>
            <li onClick={()=>{goTo("contact-us")}}>Contact Us</li>
          </ul>       
        </div> 
    </div>
    <div className='NavMobile'>
    
    </div>        
   </div>
   <div className={`mobile_card ${toggleClick ? 'mobile_cards':''}`}>
   <div className='card'>
     <div className='itemss'>
     <div><img src={logo} alt="logo" className='logos' /></div>
     <Icon icon="fluent-emoji-high-contrast:cross-mark" className='cross' onClick={handleClick} />
     </div>
     <div className='lists'>
     <div className='items' >
       <div><Icon icon="dashicons:products" className='mb_icon' />  <a href="#">Product Details</a> </div>
       <Icon icon="icons8:arrows-long-right" className='arrow'/>
     </div>
     <div className='items' >
         <div> <Icon icon="material-symbols:spatial-audio" className='mb_icon' /> <a href="about-us">About Us</a></div>
       <Icon icon="icons8:arrows-long-right" className='arrow'/>
     </div>
     <div className='items' >
        <div>  <Icon icon="material-symbols:workspace-premium"className='mb_icon'  /><a href="#">Blogs</a></div>
       <Icon icon="icons8:arrows-long-right" className='arrow'/>
     </div>
     <div className='items' >
       <div> <Icon icon="tabler:world"className='mb_icon'  /><a href="#">Contact Us</a></div>
       <Icon icon="icons8:arrows-long-right" className='arrow'/>
     </div>
     </div>
   </div>


 </div>
 </>
  )
}

export default Navbar