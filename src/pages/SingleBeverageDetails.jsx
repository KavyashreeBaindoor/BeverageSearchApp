import React, { useState } from 'react';
import { useParams,Link } from 'react-router-dom';
import { AppContext } from '../context';
import { useContext } from 'react';

const SingleBeverageDetails = () => {
  const {prodid}=useParams();
 const {drinks1}= useContext(AppContext)

  console.log(prodid)

 const product= drinks1.find((item)=>{
    return item.id===prodid
  })
  console.log(product)
 
  return (
    <>
    <div style={{marginTop:"2rem"}}>
     <article className='drink1'>
    <img src={product.image} alt="" />
    <div className='drink1-footer'>
      <h3>{product.name}</h3>
      <h4>{product.glass}</h4>
      <p style={{color:"red"}}>{product.inst}</p>
      <Link to="/" className='btn'>Go back</Link>
     </div>
  </article>
  </div>
    
    </>
  )
}

export default SingleBeverageDetails