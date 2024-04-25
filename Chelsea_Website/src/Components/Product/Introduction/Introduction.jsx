import React from 'react';
import './Introduction.css';
import BackgroundImage from '../../../assets/Images/Introduction/Bcakground_Vector.png';
import Iphone from '../../../assets/Images/Introduction/Iphone.png';
import Screen1 from '../../../assets/Images/Introduction/Screen1.png';
import Screen2 from '../../../assets/Images/Introduction/Screen2.png';
import {Icon} from '@iconify/react';

function Introduction() {
  return (
    <div className='IntroductionPage'>
        <img src={BackgroundImage} alt="BackgroundImage" className='BackgroundImage' />
        <div className='IntroductionOverview'>
                 <div className='MobileScreen'>
                    <img src={Iphone} alt="IPhone" className='Iphone' />
                    <img src={Screen1} alt="Screen" className='Screen1' />
                    <img src={Screen2} alt="Screen" className='Screen2' />
                 </div>
                 <div className='IntroductionContent'>
                            <div className='Content'>
                                <h3>CALLSHEETS</h3>
                                <h2>Introduction Of Projetcs Overview</h2>
                                <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to 
                                    demonstrate the visual form of a document or a typeface without relying on meaningful content.
                                     Lorem ipsum may be used as a placeholder before the final copy is available.</p>
                                <h4>Project Intention</h4>
                                <ul>
                                    <li><div><Icon icon="mdi:tick" className='Icons' /></div> <div>In Publishing and graphic design</div></li>
                                    <li><div><Icon icon="mdi:tick" className='Icons'/></div> <div>In Publishing and graphic design</div></li>
                                    <li><div><Icon icon="mdi:tick" className='Icons'/></div> <div>In Publishing and graphic design</div></li>
                                    <li><div><Icon icon="mdi:tick" className='Icons' /></div> <div>In Publishing and graphic design</div></li>

                                </ul>
                            </div>
                 </div>
        </div>
        
    </div>
  )
}

export default Introduction