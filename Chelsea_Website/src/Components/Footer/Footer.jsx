import React from 'react';
import './Footer.css';
import FooterImage from '../../assets/Images/Footer/FooterMobile.png';
import googlePlay from '../../assets/Images/Hero/Play_Store.png';
import Apple from '../../assets/Images/Hero/Apple_Store.png';
import logo from '../../assets/Images/Callsheetlogo.png';
import FooterBg from '../../assets/Images/Footer/Footer_Bg.png';
import leftCircle from '../../assets/Images/Footer/LeftCircle.png';
import TopCircle from '../../assets/Images/Footer/TopCircle.png';
import SolidCircle from '../../assets/Images/Footer/SolidCircle.png';
import SmallCircle from '../../assets/Images/Footer/SmallCircle.png';
// import FooterBg from '../../assets/Images/Footer/Footer_Blue_Bg.png';
import {useNavigate} from 'react-router-dom'
function Footer() {
    const navigate=useNavigate()
  return (
    <div className='FooterCont'>
            <div className='FooterContainer'>
              
                <div className='FooterImages'>
                {/* <img src={FooterBg} alt="FooterBg" className='FooterBg' /> */}
                    <div>
                        <img src={FooterImage} alt="FooterImage" className='FooterImage' />
                        {/* <img src={leftCircle} alt="leftCircle" className='LeftCircle' />
                        <img src={TopCircle} alt="TopCircle" className='TopCircle' />
                        <img src={SolidCircle} alt="SolidCircle" className='SolidCircle' />
                        <img src={SmallCircle} alt="SmallCircle" className='SmallCircle' /> */}

                    </div>
                </div>
                <div className='FooterContent'>
                            <div className='Content'>
                            <h2>Lets Download Callsheets Mobile App Free</h2>
                            <p>Discover a new way to simplify your life with our amazing app.</p>
                             <img src={googlePlay} alt="googlePlay" className='GooglePlay' /> 
                             <img src={Apple} alt="Apple" className='Apple'/>
                            </div>
                               
                </div>

            </div> 
        <div className='FooterItems'>
            <img src={FooterBg} alt="FooterBg"  className='FooterBg'/>
            <div className='Footerlogo'>
                <img src={logo} alt="logo" className='Logo' />
                <p>Chelsea Solutions, where cutting-edge technology meets creative solutions. 
                    We specialize in developing apps, providing state-of-the-art software 
                    solutions, harnessing the power of cloud computing, and exploring the depths of data science.</p>
            </div>
            <div className='Useful'>              
                <ul> 
                    <li> <h3>Useful Links</h3></li>
                    <li>Download App</li>
                    <li>Registration</li>
                  
                    <li onClick={()=>{navigate('terms-and-conditions')}}>Terms & Conditions</li>
                    <li onClick={()=>{navigate('privacy-policy')}}> Privacy Policy</li>
                </ul>
            </div>
            <div className='Useful'>              
                <ul>
                    <li><h3>Features</h3></li>
                    <li>Paid Features</li>
                    <li>Management</li>
                    <li>Tracking</li>
                    <li>Invoice</li>
                </ul>
            </div>
            <div className='Useful'>               
                <ul>
                    <li><h3>Explore</h3></li>
                    <li onClick={()=>{navigate('about-us')}}>About Us</li>
                    <li onClick={()=>{navigate('contact-us')}}>Contact Us</li>
                    <li onClick={()=>{navigate('about-us')}}>Our Mission</li>
                    <li onClick={()=>{navigate('product-details')}}>How It Work</li>
                    <li>Policy</li>
                </ul>
            </div>
         
        </div>
     

    </div>
  )
}

export default Footer;