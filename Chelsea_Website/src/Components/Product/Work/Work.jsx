import React from 'react';
import './Work.css';
import BackgroundImage from '../../../assets/Images/Work/Background_Image.png';
import Mobile from '../../../assets/Images/Work/Mobiles.png';
import Login from '../../../assets/Images/Work/Login_Vector.png';
import FaceTesting from '../../../assets/Images/Work/Face_Recognization.png';
import Schedules from '../../../assets/Images/Work/Schedules.png';
import CheckMark from '../../../assets/Images/Work/Check_Mark.png';

function Work() {
  return (
    <div className='WorkProcess'>
        <img src={BackgroundImage} alt="BackGroundImage" className='BackgroundImage' />
        <div className='Explanation'>
            <div className='MobileImages'>
                <img src={Mobile} alt="Mobile" className='Mobile' />
            </div>
            <div className='Content'>             
                <div className='Question'>
                        <h3>How it work?</h3>
                        <p>Callsheets streamlines actors' and directors' schedules in one app,
                            featuring achievement showcases and collaboration tools for seamless career management.</p>
                </div>
                <div className='Card'>
                    <div className='SectionOne'>
                        <div className='SubSections'>
                            <img src={Login} alt="Login" className='LoginVector' />
                            <h3>LOGIN FIRST</h3>
                            <p>Sign up to manage your schedule, showcase achievements, and collaborate seamlessly. </p>
                        </div>
                        <div className='SubSections'>
                            <img src={FaceTesting} alt="FaceTesting" className='FaceTesting' />
                            <h3>FACE TESTING</h3>
                            <p>Streamline login on Callsheets with facial recognition technology for secure, hassle-free access using your unique facial features.</p>
                        </div>
                        <div className='SubSections'>
                            <img src={Schedules} alt="Schedules" className='Schedules' />
                            <h3>ADD SCHEDULES</h3>
                            <p>Add auditions, rehearsals, and shoots effortlessly in Callsheets. Stay organized with just a few taps. </p>
                        </div>
                        <div className='SubSections'>
                            <img src={CheckMark} alt="CheckMark" className='Checkmark' />
                            <h3>GET BETTER</h3>
                            <p>Level up your skills with Callsheets and unlock new opportunities in the entertainment industry. </p>
                        </div>
                    </div>
                   
                 

                </div>


             

            </div>
        </div>

    </div>
  )
}

export default Work