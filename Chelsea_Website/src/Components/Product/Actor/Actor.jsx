import React from 'react';
import './Actor.css';
import ActorOne from '../../../assets/Images/Actors/Actor_Screen.png';
import ActorTwo from '../../../assets/Images/Actors/ActorTwo.png';
import ActorThree from '../../../assets/Images/Actors/ActorThree.png';
import DirectorOne from '../../../assets/Images/Actors/Director_Screen.png';
import DirectorTwo from '../../../assets/Images/Actors/DirectorTwo.png';
import DirectorThree from '../../../assets/Images/Actors/DirectorThree.png';
function Actor() {
  return (
    <div className='ScreenExplanation'>
        <div className='ActorScreen'>
            <div className='Actors'>
            <div className='Content'>
                <div className='Text'>
                <h2> <span>Actor</span> Screens</h2>
                <p>The actor screens in Callsheets offer a one-stop solution for managing schedules,
                     showcasing achievements, and collaborating effectively. From viewing upcoming events
                      to accessing call sheets and receiving notifications, Callsheets simplifies the actor's 
                      workflow, ensuring seamless communication and organization.</p>
                </div>
            </div>
            <div className='Images'>
                {/* <img src={ActorOne} alt="ActorOne" className='ActorOne' />
                <img src={ActorTwo} alt="ActorTwo" className='ActorTwo' />
                <img src={ActorThree} alt="ActorThree" className='ActorThree' /> */}
                <img src={ActorOne} alt="ActorOne" className='ActorOne' />
            </div>
            </div>
        </div>
        <div className='DirectorScreen'>
                <div className='Directors'>
                <div className='Images'>
                    <img src={DirectorOne} alt="DirectorOne" className='DirectorOne' width={600} />
                    {/* <img src={DirectorTwo} alt="DirectorTwo" className='DirectorTwo' />
                    <img src={DirectorThree} alt="DirectorThree" className='DirectorThree' /> */}
                </div>           

           <div className='Content'>           
                    <div className="Text">
                        <h2> <span>Director</span> Screen</h2>
                        <p>Director screens in Callsheets offer a complete toolkit for efficient production management. 
                            From scheduling and scene breakdowns to communication and call sheet distribution,
                             directors have everything they need for seamless collaboration and successful productions.</p>
                     </div>
           
            </div>
            </div>          
           
        </div>
    </div>
  )
}

export default Actor