import React from 'react';
import { AppContext } from '../context';
import { useContext } from 'react';
import SingleBeverage from './SingleBeverage';

const BeverageList = () => {
        const {drinks1,loading}= useContext(AppContext);
        console.log(drinks1);
        

        if(loading){
         return (
                  <>
                  <h1 className='title'>Loading....</h1>
                  </>
         )
        }
        if(drinks1.length===0){
         return (
                  <>
                  <h1>Your search did not match the available drinks</h1>
                  </>
         )
        }
          return (
               <>
   <section>
         
         <div className='drink'>
{drinks1.map((prod)=>{
         return (<>
         <SingleBeverage key={prod.id} {...prod}/>
         
         </>)
})}
         </div>
   </section>
               </>
  )
}

export default BeverageList