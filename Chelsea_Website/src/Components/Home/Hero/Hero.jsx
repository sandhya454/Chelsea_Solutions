import React from 'react';
import './Hero.css';
import applestore from '../../../assets/Images/Hero/Apple_Store.png';
import googlestore from '../../../assets/Images/Hero/Play_Store.png';
import Mobile from '../../../assets/Images/Hero/Hero_IPhone.png';
import pyramid from '../../../assets/Images/Hero/Pyramid.png';
import circle from '../../../assets/Images/Hero/Circle.png';
import triangle from '../../../assets/Images/Hero/Triangle.png';
import WhiteCircle from '../../../assets/Images/Hero/White_Circle.png';
import SemiCircleGradient from '../../../assets/Images/Hero/Semi_Circle_Gradient.png';
import CircleGradient from '../../../assets/Images/Hero/Circle_Gradient.png';
import HeroBg from '../../../assets/Images/Hero/hero_bg.png';


export const Hero = () => { 
  return (
      <div className='HeroContainer'>
        {/* <img src={HeroBg} className='HeroBg'/> */}
        <div className='HeroContent'>         
          <div className='Content'>
            {/* <img src={pyramid} alt="pyramid" className='Pyramid_Vector' />
            <img src={circle} alt="circle" className='Circle_Vector'/>
            <img src={triangle} alt="triangle"  className='Triangle_Vector'/> */}
                <h2>Take Your Projects to the Next Level with the  <br/> <span>Callsheets Mobile App</span></h2>
                <p>Empower your acting and directing journey with Callsheets: schedule
                  management and achievement showcase, all in one app..</p>
                <div>
                    <img src={applestore} alt="applestore" />
                    <img src={googlestore} alt="googlestore" />
                </div>
          </div>
          <div className='HeroImg'>
            <img src={Mobile} alt="Mobile" className='Mobiles' />
            {/* <img src={WhiteCircle} alt="WhiteCircle" className='White_Circle' />
            <img src={SemiCircleGradient} alt="SemiCircleGradient" className='Semi_Circle' />
            <img src={CircleGradient} alt="CircleGradient"  className='Circle_Gradient'/> */}
          </div>
      </div>
   
    </div>
  )
}
