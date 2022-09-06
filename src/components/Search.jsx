import React from 'react';

import { AppContext } from '../context';
import { useContext } from 'react';


const Search = () => {
  //uncontrolled input can be used
  const {searchVal,setSearchVal}=useContext(AppContext);
  const changeHandler=(e)=>{
    setSearchVal(e.target.value)
    }
 
    const submitHandler=(e)=>{
      e.preventDefualt()
    }
  return (
    <>
    <section className='search'>
      <form action="" className='search-form' onSubmit={submitHandler}>
     <div className='form-control'>
      <label for="id" style={{color:"white",fontSize:"2rem"}}>Search Drinks here</label>
      <input type="text" placeholder='search drinks here' id="id" name="name" value={searchVal} onChange={changeHandler}/>
     </div>
      </form>
    </section>
    </>
  )
}

export default Search