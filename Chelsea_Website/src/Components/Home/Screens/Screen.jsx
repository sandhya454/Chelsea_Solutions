import React, { useState, useEffect, useRef } from 'react';
import './Screen.css';
import ScreenBg from '../../../assets/Images/Screens/Screen_Bg.png';
import mobile1 from '../../../assets/Images/Screens/Mobile_One.png';
import mobile2 from '../../../assets/Images/Screens/Mobile_Two.png';
import mobile3 from '../../../assets/Images/Screens/Mobile_Three.png';
import mobile4 from '../../../assets/Images/Screens/Mobile_Four.png';
import mobile5 from '../../../assets/Images/Screens/Mobile_Five.png';
import mobile6 from '../../../assets/Images/Screens/Mobile_Six.png';
import mobile7 from '../../../assets/Images/Screens/Mobile_Seven.png';
import mobile8 from '../../../assets/Images/Screens/Mobile_Eight.png';
import mobile9 from '../../../assets/Images/Screens/Mobile_Nine.png';
import mobile10 from '../../../assets/Images/Screens/Mobile_Ten.png';
import mobile11 from '../../../assets/Images/Screens/Mobile_Eleven.png';
import mobile12 from '../../../assets/Images/Screens/Mobile_Twelve.png';
import mobile13 from '../../../assets/Images/Screens/Mobile_Thirteen.png';
import mobile14 from '../../../assets/Images/Screens/Mobile_Fourteen.png';
import mobile15 from '../../../assets/Images/Screens/Mobile_Fifteen.png';

const images = [mobile1, mobile2, mobile3, mobile4, mobile5, mobile6, mobile7, mobile8, mobile9, mobile10, mobile11, mobile12, mobile13, mobile14, mobile15];

function Screen() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imageListRef = useRef(null);
  const [mobileCount,setMobileCount]=useState(0)
  useEffect(()=>{
    if(window.innerWidth<768){
      setMobileCount(2)
  
    }
    else{
      setMobileCount(0)
    }

  },[])



  const [startIndex, setStartIndex] = useState(0);

    const nextBtnHandler = () => {
        setStartIndex((startIndex + 1) % images.length);
    };

    const prevBtnHandler = () => {
        setStartIndex((startIndex - 1 + images.length) % images.length);
    };


  useEffect(() => {
    scrollToActiveImage();
  }, [currentIndex]);

  // const scrollToActiveImage = () => {
  //   console.log("Scrolling to active image");
  //   const imageList = imageListRef.current;
  //   const activeImage = imageList && imageList.querySelector('.image-list img.active');
  //   if (imageList && activeImage) {
  //     console.log("Active Image Found");
  //     const activeIndex = parseInt(activeImage.getAttribute('data-index'), 10);
  //     const containerWidth = imageList.offsetWidth;
  //     const scrollLeft = Math.max(0, (activeIndex * activeImage.offsetWidth) - (containerWidth / 2) + (activeImage.offsetWidth / 2));
  //     imageList.scrollLeft = scrollLeft;
  //     console.log("ScrollLeft:", scrollLeft);
  //   }
  // };



    const scrollToActiveImage=()=>{
      // alert('hi')
    }
  const nextImage = () => {
    if(currentIndex>=images.length-3-mobileCount){

    }
    else{
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1+ images.length) % images.length);
  }; 

  const imageClick = (index) => {
    setCurrentIndex(index);
    const imageList = imageListRef.current;
    const images = imageList && imageList.querySelectorAll('.image-list img');
    if (images) {
      images.forEach((img, i) => {
        img.classList.toggle('active', i === index);
        img.setAttribute('data-index', i);
      });
    }
  };
  const getCircularSublist = (startIndex) => {
    const end = (startIndex + 5-mobileCount) % images.length;
    return end > startIndex ? images.slice(startIndex, end) : [...images.slice(startIndex), ...images.slice(0, end)];
};

const sublist = getCircularSublist(startIndex);
  

  return (
    <div className='MobileScreens'>
      <div className='MobileScreenView'>
        <div className='ScreenContent'>
          <h2>The Most Effective App for Your <br />Future Projects</h2>
          <p>Introducing our revolutionary app for call sheet management in movie shooting, 
            designed to streamline coordination for directors, actors, actresses, and technicians.
             Manage and distribute call sheets effortlessly,
             ensuring smooth operations on set. Key features and benefits include</p>
        </div>
      </div>
      <div className='DisplayScreens'>
        <img src={ScreenBg} alt="ScreenBg" className='ScreenBg' />
        <div className='image-gallery-container'>
          <div ref={imageListRef} className="image-list">
            {sublist.map((image, index) => (
              <img 
                key={index}
                src={image}
                alt={`Image ${index + 1}`}
                className={index === currentIndex+2 ? 'active' : ''}
              />
            ))}
          </div> 
          <div className="navigation-buttons">
            <button onClick={prevBtnHandler} disabled={startIndex === -3-mobileCount}>Previous</button>
            <button onClick={nextBtnHandler} disabled={startIndex === images.length }>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Screen;
