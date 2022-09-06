import React from 'react';
import { Link } from 'react-router-dom';

const SingleBeverage = ({id,name,glass,image}) => {
  return (
  <>
  
  <article className='drink1'>
    <img src={image} alt="" />
    <div className='drink1-footer'>
      <h3>{name}</h3>
      <h4>{glass}</h4>
<Link to={`/singledrink/${id}`} className='btn'>More Details</Link>
     </div>
  </article>
  
  </>
  )
}

export default SingleBeverage