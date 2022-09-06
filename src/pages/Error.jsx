import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <>
    <section className='error'>
         <div className='container'>
                  <h1>Invalid address typed</h1>
                  <Link to="/" className='btn'>Go Back</Link>

         </div>
    </section>
    
    </>
  )
}

export default Error