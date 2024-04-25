import React from 'react';
import {Icon} from '@iconify/react';
import './Details.css';
import BlueRectangle from '../../../assets/Images/Product_Details/Blue_Rectangle_Vector.png';
import BlueVector from '../../../assets/Images/Product_Details/Blue_Vector.png';
import Star from '../../../assets/Images/Product_Details/Star.png';
import Triangle from '../../../assets/Images/Product_Details/Triangle.png'

function Details() {
  return (
    <div className='ProductDetails'>
        <div className='Details'>
            <div className='Content'>
            <h2>Product Details</h2>
            <div className='SubContent'>
                <p>Home</p>
                <p><Icon icon="fe:arrow-right" /></p>
                <p>Product Details</p>
            </div>           
            </div>
          
        </div> <div className='Images'>
                <img src={BlueRectangle} alt="BlueRectangle" className='BlueRectangle' />
                <img src={BlueVector} alt="BlueVector" className='BlueVector' />
                <img src={Star} alt="Star" className='Star' />
                <img src={Triangle} alt="Triangle" className='Triangle' />
                </div>

    </div>

  )
}

export default Details