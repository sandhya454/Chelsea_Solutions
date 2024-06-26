import React ,{useEffect}from 'react'
import Details from './Details/Details'
import Introduction from './Introduction/Introduction';
import Installation from './Installation/Installation';
import Work from './Work/Work';
import Actor from './Actor/Actor';
import VideoSection from './VideoSection/VideoSection';

function ProductDetails() {
  useEffect(() => {
		window.scrollTo(0, 0); 
	}, []);
  return (
 <>
    <Details page={'Product Details'}/>
    <Introduction/>
    <Installation/>
    <Work/>
    <Actor/>
    {/* <VideoSection/> */}
 </>
  )
}

export default ProductDetails;
