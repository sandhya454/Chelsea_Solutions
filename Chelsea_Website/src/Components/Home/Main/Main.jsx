import React from 'react';
import './Main.css';
import { Hero } from '../Hero/Hero'
import Explain from '../Explain/Explain';
import Features from '../Features/Features';
import Screen from '../Screens/Screen';
import Form from '../Form/Form';


function Main() {
  return (
   <>
   <div className='MainCont'>
   <Hero/>
   <Explain/>
   <Features/>
    <Screen/>
    <Form/>
   </div>
  
   </>
  )
}

export default Main;