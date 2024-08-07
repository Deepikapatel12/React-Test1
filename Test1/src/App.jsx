import { useState } from "react";
import PatternComponent from "./PatternComponent"
import { BrowserRouter, Routes, Route, Form } from "react-router-dom";
import Home from "./Component/Home";
import Service from "./Service";
import Placement from "./Placement";
import Gallery from "./Gallery";
import ContactUs from "./ContactUs";
import Layout from "./Component/Layout";
import About from "./About";
import Display from "./Component/Display";
import Insert from "./Insert";
import Dependency from "./Dependency";




const App=()=>{
// increment and decrement

const [cnt, setCnt]=useState(0);
    const mydec=()=>{
        if(cnt<=0)
        {
            alert("No Negative Value")
        }
        else{
            setCnt(cnt-15)
        }
    }




  return(
    <>
      <PatternComponent />


<br/>
<br/>
      {/* NAV BAR */}

      <BrowserRouter>
  <Routes>
    <Route path="/" element={<Layout/>}>
    <Route index element={<Home/>}/>
    <Route path="home" element={<Home/>}/>
    <Route path="service" element={<Service/>}/>
    <Route path="about" element={<About/>}/>
  <Route path="placement" element={<Placement/>}/>
  <Route path="gallery" element={<Gallery/>}/>
    <Route path="contact" element={<ContactUs/>}/>
    <Route path="display" element={<Display/>}/>
    <Route path="insert" element={<Insert/>}/>
   
  
    </Route>
  </Routes>
</BrowserRouter>

<br/>
<br/>
<br/>


{/* INCREMENT AND DECREMENT */}

<h1>My Count : {cnt}</h1>
<button onClick={ ()=>{setCnt(cnt+15)}}>Increment</button>
<button onClick={mydec}>Decrement</button>

<br/>
<br/>
<br/>

{/* Dependency */}
<Dependency/>


    </>
  )
}
export default App;