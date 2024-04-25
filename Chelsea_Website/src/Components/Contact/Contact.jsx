import React from 'react'
import Details from '../Product/Details/Details';
import './Contact.css'
import Form from '../Home/Form/Form';

function Contact() {
  return (
    <div className='ContactMainCont'>
        <Details page={'Contact Us'}/>
        <div className='ContactUsCont'>

        <Form/>
        </div>
    </div>
  )
}

export default Contact