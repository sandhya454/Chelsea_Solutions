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
                        <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly 
                            used to demonstrate the visual form of a document or a typeface without
                             relying on meaningful content. Lorem</p>
                </div>
                <div className='Card'>
                    <div className='SectionOne'>
                        <div className='SubSections'>
                            <img src={Login} alt="Login" className='LoginVector' />
                            <h3>LOGIN FIRST</h3>
                            <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly
                                 used to demonstrate the visual form of a document or a typeface </p>
                        </div>
                        <div className='SubSections'>
                            <img src={FaceTesting} alt="FaceTesting" className='FaceTesting' />
                            <h3>FACE TESTING</h3>
                            <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly
                                 used to demonstrate the visual form of a document or a typeface </p>
                        </div>
                        <div className='SubSections'>
                            <img src={Schedules} alt="Schedules" className='Schedules' />
                            <h3>ADD SCHEDULES</h3>
                            <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly
                                 used to demonstrate the visual form of a document or a typeface </p>
                        </div>
                        <div className='SubSections'>
                            <img src={CheckMark} alt="CheckMark" className='Checkmark' />
                            <h3>GET BETTER</h3>
                            <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly
                                 used to demonstrate the visual form of a document or a typeface </p>
                        </div>
                    </div>
                   
                 

                </div>


             

            </div>
        </div>

    </div>
  )
}

export default Work