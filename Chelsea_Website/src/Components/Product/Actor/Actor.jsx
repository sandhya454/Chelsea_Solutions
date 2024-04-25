import React from 'react';
import './Actor.css';
import ActorOne from '../../../assets/Images/Actors/ActorOne.png';
import ActorTwo from '../../../assets/Images/Actors/ActorTwo.png';
import ActorThree from '../../../assets/Images/Actors/ActorThree.png';
import DirectorOne from '../../../assets/Images/Actors/DirectorOne.png';
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
                <p>simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type
                    specimen book. It has survived not only five centuries, but also the leap into
                    electronic typesetting, remaining essentially</p>
                </div>
            </div>
            <div className='Images'>
                <img src={ActorOne} alt="ActorOne" className='ActorOne' />
                <img src={ActorTwo} alt="ActorTwo" className='ActorTwo' />
                <img src={ActorThree} alt="ActorThree" className='ActorThree' />
            </div>
            </div>
        </div>
        <div className='DirectorScreen'>
          
                <div className='Images'>
                    <img src={DirectorOne} alt="DirectorOne" className='DirectorOne' />
                    <img src={DirectorTwo} alt="DirectorTwo" className='DirectorTwo' />
                    <img src={DirectorThree} alt="DirectorThree" className='DirectorThree' />
                </div>           

           <div className='Content'>           
                    <div className="Text">
                        <h2> <span>Director</span> Screen</h2>
                        <p>simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type
                            specimen book. It has survived not only five centuries, but also the leap into
                            electronic typesetting, remaining essentially</p>
                     </div>
           
            </div>          
           
        </div>
    </div>
  )
}

export default Actor