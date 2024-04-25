import React from 'react';
import './VideoSection.css';
import VideoBackground from '../../../assets/Images/VideoSection/Video_Background.png';
import VideoPlay from '../../../assets/Images/VideoSection/VideoPlay.png'
function VideoSection() {
  return (
    <div className='VideoSection'>
        <img src={VideoBackground} alt="VideoBackGround" className='VideoBackground' />
        <div className='Content'>
            <div>
            <img src={VideoPlay} alt="VideoPlay" className='VideoPlay' />
            <h2>Crafted with detail for a Callsheets Screenshot video view  </h2>
            <p>Callsheets Screenshots</p>
            </div>         
        </div>
    </div>
  )
}

export default VideoSection