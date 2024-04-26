import React from 'react';
import './Installation.css';
import GooglePlay from '../../../assets/Images/Hero/Play_Store.png';
import AppleStore from '../../../assets/Images/Hero/Apple_Store.png';
import HandMobile from '../../../assets/Images/Introduction/Hand_Phone.png'

function Installation() {
  return (
    <div className='InstallationExp'>
        <div className='Explpanation'>
            <div className='Content'>
                <h2>Installation Process</h2>
                <p>
To get Callsheets on your Android, go to the Google Play Store, search 'Callsheets,' tap 'Install,' then open the app.
 Sign up or log in, set up your profile, and you're ready to manage schedules and showcase achievements with ease..</p>
                <p>Installing Callsheets on your iPhone or iPad is simple. Just open the Apple App Store, search for 'Callsheets,
                  ' tap 'Get,' and let it install. After it's done, open Callsheets, sign up or log in,
                   customize your profile, and start using it to organize your schedule and showcase your achievements smoothly.</p>
                      <img src={GooglePlay} alt="GooglePlay" className='GooglePlay' />
                      <img src={AppleStore} alt="AppleStore" className='AppleStore' />
            </div>
            <div className='Image'>
                <img src={HandMobile} alt="HandMobile" className='HandMobile' />
            </div>
        </div>

    </div>
  )
}

export default Installation