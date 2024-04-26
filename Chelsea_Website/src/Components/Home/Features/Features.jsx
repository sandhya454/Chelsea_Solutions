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
                   <div className='FeatureHeading'> <h3>Stay Informed</h3>
                   <div className='FeatureNumber'><div ><p className='Number'>1</p></div> </div>
             
                       </div>
                    <p>Stay informed with personalized notifications in our app, ensuring timely updates on 
                        schedule changes and important details for each team member.</p>

                </div>
                <div>
                   <div className='FeatureHeading'> <h3>Unlimited Access</h3>
                   <div className='FeatureNumber'><div ><p className='Number'>2</p></div> </div>
             
                       </div>
                    <p>Streamline scheduling: Assign roles, scenes, and call times easily, 
                        ensuring everyone is prepared and on time.</p>

                </div>
            </div>
            <div className='Designs'>
            <div>
                   <div className='FeatureHeading'> <h3>User Friendly</h3>
                   <div className='FeatureNumber'><div ><p className='Number'>3</p></div> </div>
             
                       </div>
                    <p>Accessible and User-Friendly: Our app is designed with a user-friendly interface,
                         making it easy for everyone, regardless of technical expertise, to navigate and utilize its features.</p>

                </div>
                <div>
                   <div className='FeatureHeading'> <h3>Efficient Scheduling</h3>
                   <div className='FeatureNumber'><div ><p className='Number'>4</p></div> </div>
             
                       </div>
                    <p>Our app simplifies scheduling, enabling directors to assign roles, scenes,
                         and call times efficiently, ensuring everyone is on schedule.  </p>

                </div>
                <div>
                   <div className='FeatureHeading'> <h3>Fully Responsive</h3>
                   <div className='FeatureNumber'><div ><p className='Number'>5</p></div> </div>
             
                       </div>
                    <p>Efficient communication tools in our app keep your team connected and organized, 
                        from sharing updates to discussing scene details.</p>

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