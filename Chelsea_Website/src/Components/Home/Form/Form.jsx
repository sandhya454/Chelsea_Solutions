import React from 'react';
import './Form.css';
import { Icon } from '@iconify/react';

function Form() {
  return (
    <div className='HomePageForm'>
        <div className='FormCard'> 
            <div className="Form">
                <div className='Content'>
                <h2>ANY QUESTIONS?</h2>
                <p>We have several powerful plans to showcase your business and get discovered.</p> 
                </div>
              
                <form action="">
                    <div>
                    <div>
                        <input type="text" placeholder='Name' />
                    </div>
                    <div>
                        <input type="email" placeholder='Email' />
                    </div>
                    <div>
                        <input type="text" placeholder='Subject' />
                    </div>
                    <div>
                       <textarea name="" id="" cols="52" rows="5" placeholder='Message'></textarea>
                    </div>
                    <div className='btn'>
                        <button>Send Messsage</button>
                    </div>
                    </div>
                </form>
            </div>

            <div className='LocationDetails'>
                <h2>Frequently Asked Questions</h2>
                <div className='Details'>
                    <div className='icons'><Icon icon="ion:location-sharp" className='icon' /></div>
                    <div className='Content'>
                        <h3>Location</h3>
                        <p>We have several powerful plans to showcase your business and get discovered.</p>
                    </div>
                </div>
                <div className='Details'>
                    <div className='icons'><Icon icon="mdi:phone" className='icon' /></div>
                    <div className='Content'>
                        <h3>Phone</h3>
                        <p>919082598475,91827837574</p>
                    </div>
                </div>
                <div className='Details'>
                    <div className='icons'><Icon icon="ic:baseline-mail" className='icon' /></div>
                    <div className='Content'>
                        <h3>Email</h3>
                        <p>ramki@stepnext.com</p>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Form;