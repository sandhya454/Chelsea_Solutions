import React from 'react';
import './Explain.css';
import Cloud from '../../../assets/Images/Explain/Cloud.png';
import hands from '../../../assets/Images/Explain/Hand.png';
import Clock from '../../../assets/Images/Explain/Clock.png';
import Globe from '../../../assets/Images/Explain/Globe.png';
import Mobile from '../../../assets/Images/Explain/Explain.png';
// import BlueVector from '../../../assets/Images/Explain/Blue_Vector.png';
// import BackgroundVector from '../../../assets/Images/Explain/Background_Vector.png';
// import BlueTriangle from '../../../assets/Images/Explain/Blue_Triangle.png';
// import TriangleWave from '../../../assets/Images/Explain/Triangle_Wave.png';
// import GroupCricle from '../../../assets/Images/Explain/Group_Circle.png';
import { Icon } from '@iconify/react';




function Explain() {
  return ( 
    <div className='ExplanationCont'>
        <div className='AppInstall'>
            <div className='Cloud'>
                <img src={Cloud} alt="Cloud" className='Cloud_Vector' />
                <h2>100K</h2>
                <p>Active Installation</p>
            </div>
            <div className='Hand'>
                <img src={hands} alt="Hands" className='Hand_Vector' />
                <h2>100K</h2>
                <p>5 star Feedback</p>
            </div>
            <div className='Clock'>
                <img src={Clock} alt="Clock" className='Clock_Vector'/>
                <h2>100K</h2>
                <p>All Time Download</p>
            </div>
            <div className='Globe'>
                <img src={Globe} alt="Globe" className='Globe_Vector' />
                <h2>100k</h2>
                <p>Countries</p>
            </div> 
        </div>
        <div className='AppExplanation'>
            <div className='MobileImage'>
                <img src={Mobile} alt="Mobile" className='Mobile'/>
                {/* <img src={BackgroundVector} alt="BackgroundVector" className='Background-Vector' />
                <img src={BlueVector} alt="BlueVector" className='BlueVector' />
                <img src={BlueTriangle} alt="BlueTriangle" className='BlueTriangle'/>
                <img src={TriangleWave} alt="TriangleWave" className='TriangleWave' />
                <img src={GroupCricle} alt="GroupCircle" className='GroupCircle' /> */}
               

            </div>
            <div className='ExplanationContent'>
                <div className=''> 
                        <h3>THE APP SIMPLIFIES</h3> 
                        <h2>The Most Effective App for Your Future Projects</h2>
                        <ul>
                            <li> <div className='arrow'><Icon icon="fa6-regular:circle-dot" className='icon'/></div> <div>Organize auditions, rehearsals, and shoots efficiently.</div> </li>
                            <li> <div className='arrow'><Icon icon="fa6-regular:circle-dot" className='icon'/></div> <div>Highlight awards, past work, and accolades.</div> </li>                                                    
                             <li> <div className='arrow'><Icon icon="fa6-regular:circle-dot" className='icon'/></div> <div>Coordinate with agents, managers, and teams seamlessly.</div> </li> 
                            <li> <div className='arrow'><Icon icon="fa6-regular:circle-dot" className='icon'/></div> <div>Stay informed with customizable reminders and alerts.</div> </li>                                                    
                            <li> <div className='arrow'><Icon icon="fa6-regular:circle-dot" className='icon'/></div> <div> Easy navigation and intuitive design for professionals.</div> </li>                             
                            </ul>
                </div>
               
            </div>
        </div>


    </div>
  )
}

export default Explain;