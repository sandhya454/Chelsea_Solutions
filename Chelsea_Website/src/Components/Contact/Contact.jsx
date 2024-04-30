import React,{useEffect} from 'react'
import Details from '../Product/Details/Details';
import './Contact.css'
import Form from '../Home/Form/Form';
import { Icon } from '@iconify/react';

function Contact() {
  useEffect(() => {
		window.scrollTo(0, 0); 
	}, []);
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