import React from 'react'
import Details from './Details/Details'
import Introduction from './Introduction/Introduction';
import Installation from './Installation/Installation';
import Work from './Work/Work';

function ProductDetails() {
  return (
 <>
    <Details page={'Product Details'}/>
    <Introduction/>
    <Installation/>
    <Work/>
 </>
  )
}

export default ProductDetails;
