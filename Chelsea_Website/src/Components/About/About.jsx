import React,{useEffect} from 'react'
import Details from '../Product/Details/Details'
import AboutImage from '../../assets/Images/people-with-laptops-office.jpg'
import MissionImg from '../../assets/Images/18774.jpg'
import VissonImg from '../../assets/Images/20943892.jpg'
import './About.css'
function About() {
    useEffect(() => {
		window.scrollTo(0, 0); 
	}, []);
  return (
    <div className='AboutMainCont'>
        <Details page={'About Us'}/> 
        <div className='AboutUsCont'>
            <div className='AboutContent'>
                <h2>Where innovation ignites possibility</h2>
                <p>Welcome to Chelsea Solutions, where cutting-edge technology meets creative solutions. We specialize in developing apps, providing state-of-the-art software solutions, harnessing the power of cloud computing, and exploring the depths of data science. As pioneers in the realm of the latest tech trends, our mission is to revolutionize industries and empower businesses with the tools they need to thrive in a digital world. Join us on this journey of innovation and transformation as we shape the future together.
</p>            
                    <button>Read More</button>
            </div>
            <div className='AboutUsImageCont'>
                    <img src={AboutImage} className='aboutUsImg'/>
            </div>
        </div>

        <div className='MissionMainCont'>
            <img src={MissionImg}/>
            <div>
                <h2>Mission</h2>
                <p>our mission is to revolutionize the digital landscape by providing exceptional software solutions, cloud services, and data science expertise. We are committed to empowering businesses of all sizes to thrive in an ever-evolving world, by delivering innovative technologies that drive efficiency, productivity, and success.</p>
            </div>
            


        </div>
        <div className='VissionMainCont'>
           
            <div>
                <h2>Vision</h2>
                <p>Our vision is to be the leading force in shaping the future of technology, where every business has access to cutting-edge tools and insights that propel them towards unprecedented growth and success. We envision a world where digital transformation is not just a possibility, but a reality for all, creating opportunities and driving positive change on a global scale.</p>
            </div>
            <img src={VissonImg}/>
            


        </div>
    </div>
  )
}

export default About