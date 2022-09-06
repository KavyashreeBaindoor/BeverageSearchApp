import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext()

const AppProvider = (props) => {
  //states
  const [loading,setLoading]=useState(false);
   //want to display some drinks on first load
  const [searchVal,setSearchVal]=useState("A");
  const [drinks1,setDrinks1]=useState([])

  //modifying functions
  const fetchdrinks=async()=>{
    setLoading(true)
    try{
const res=await fetch(`${url}${searchVal}`)
const data=await res.json();
// console.log(data)//{drinks: Array(25)}
const {drinks}=data;
if(drinks){
const newDrinks=drinks.map((prod)=>{
const {idDrink,strDrink,strDrinkThumb,strGlass,strInstructions}=prod;
return {id:idDrink,name:strDrink,image:strDrinkThumb,glass:strGlass,inst:strInstructions}
})
setDrinks1(newDrinks)
}else{
  //searchval typed gibberish --fetch(url) {drinks:null}
  setDrinks1([])
}
setLoading(false)
    }
    catch(error){
setLoading(false)
    }
}

    useEffect(()=>{
      fetchdrinks()
    },[searchVal])

  return <AppContext.Provider value={{
    loading,drinks1,setSearchVal,searchVal
  }}>
         {props.children}
         </AppContext.Provider>
}



export { AppContext, AppProvider }