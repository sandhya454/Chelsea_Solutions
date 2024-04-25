import React from 'react';
import './Features.css';
import FeaturesImage from '../../../assets/Images/Features/Features_Bg.png';
import FeaturesMobile from '../../../assets/Images/Features/Features_Mobile.png';

function Features() {
  return (
    <div className='FeaturesCont'>
        <div className='FeaturesBgImage'>
            <img src={FeaturesImage} alt="FeaturesImage" className='FeaturesImage' />
        </div> 
        <div className='FeaturesExpalanation'>
            <div className='Designs'>
                <div>
                   <div className='FeatureHeading'> <h3>Modern Design</h3>
                   <div className='FeatureNumber'><div ><p className='Number'>1</p></div> </div>
             
                       </div>
                    <p>It is a long established fact that a reader will be distracted content of a page when looking at its.
                         It is a long established fact that a reader will be distracted content of a page when looking at its.</p>

                </div>
                <div>
                   <div className='FeatureHeading'> <h3>Modern Design</h3>
                   <div className='FeatureNumber'><div ><p className='Number'>2</p></div> </div>
             
                       </div>
                    <p>It is a long established fact that a reader will be distracted content of a page when looking at its.
                         It is a long established fact that a reader will be distracted content of a page when looking at its.</p>

                </div>
            </div>
            <div className='Designs'>
            <div>
                   <div className='FeatureHeading'> <h3>Modern Design</h3>
                   <div className='FeatureNumber'><div ><p className='Number'>3</p></div> </div>
             
                       </div>
                    <p>It is a long established fact that a reader will be distracted content of a page when looking at its.
                         It is a long established fact that a reader will be distracted content of a page when looking at its.</p>

                </div>
                <div>
                   <div className='FeatureHeading'> <h3>Modern Design</h3>
                   <div className='FeatureNumber'><div ><p className='Number'>4</p></div> </div>
             
                       </div>
                    <p>It is a long established fact that a reader will be distracted content of a page when looking at its.
                         It is a long established fact that a reader will be distracted content of a page when looking at its.</p>

                </div>
                <div>
                   <div className='FeatureHeading'> <h3>Modern Design</h3>
                   <div className='FeatureNumber'><div ><p className='Number'>5</p></div> </div>
             
                       </div>
                    <p>It is a long established fact that a reader will be distracted content of a page when looking at its.
                         It is a long established fact that a reader will be distracted content of a page when looking at its.</p>

                </div>
            </div>
            <div className='Designs'>
                <h2>Popular Features That Blows Your Mind</h2>
                <img src={FeaturesMobile} alt="FeaturesMobile" className='FeaturesMobile' />
            </div>
        </div>
    </div>
  )
}

export default Features;