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
                <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly
                     used to demonstrate the visual form of a document or a typeface without relying on
                      meaningful content. Lorem</p>
                <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly
                     used to demonstrate the visual form of a document or a typeface without relying on
                      meaningful content. Lorem</p>
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