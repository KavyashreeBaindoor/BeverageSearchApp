import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// importing components
import Navbar from "./components/Navbar"

// importing pages
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error";
import SingleBeverageDetails from "./pages/SingleBeverageDetails"

function App() {
  return (
   <>
   <BrowserRouter>
   <Navbar/>
   <Routes>
         <Route path="/" element={<Home/>}/>  
         <Route path="/about" element={<About/>}/>
         <Route path="/singledrink/:prodid" element={<SingleBeverageDetails/>}/>
         <Route path="*" element={<Error/>}/>
   </Routes>
   </BrowserRouter>
   </>
  )
}

export default App