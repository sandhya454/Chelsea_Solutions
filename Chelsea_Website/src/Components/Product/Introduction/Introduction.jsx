import React from 'react';
import './Introduction.css';
import BackgroundImage from '../../../assets/Images/Introduction/Bcakground_Vector.png';
import Iphone from '../../../assets/Images/Introduction/Introduction_Mobile.png';
import Screen1 from '../../../assets/Images/Introduction/Screen1.png';
import Screen2 from '../../../assets/Images/Introduction/Screen2.png';
import {Icon} from '@iconify/react';

function Introduction() {
  return (
    <div className='IntroductionPage'>
        {/* <img src={BackgroundImage} alt="BackgroundImage" className='BackgroundImage' /> */}
        <div className='IntroductionOverview'>
                 <div className='MobileScreen'>
                    {/* <img src={Iphone} alt="IPhone" className='Iphone' />
                    <img src={Screen1} alt="Screen" className='Screen1' />
                    <img src={Screen2} alt="Screen" className='Screen2' /> */}
                    <img src={Iphone} alt="Iphone" className='Iphone' />
                 </div>
                 <div className='IntroductionContent'> 
                            <div className='Content'>
                                <h3>CALLSHEETS</h3>
                                <h2>Introducing Callsheets </h2>
                                <p>Meet Callsheets, the app that simplifies scheduling for actors, directors, and production teams.
                                  Manage your schedule and showcase achievements effortlessly. Stay organized and take your career to 
                                  new heights with Callsheets.</p>
                                <h4>Features</h4>
                                <ul>
                                    <li><div><Icon icon="mdi:tick" className='Icons' /></div> <div>User Friendly</div></li>
                                    <li><div><Icon icon="mdi:tick" className='Icons'/></div> <div>Unlimited Access</div></li>
                                    <li><div><Icon icon="mdi:tick" className='Icons'/></div> <div>Effecient Scheduling</div></li>
                                    <li><div><Icon icon="mdi:tick" className='Icons' /></div> <div>Fully Responsive</div></li>

                                </ul>
                            </div>
                 </div>
        </div>
        
    </div>
  )
}

export default Introduction