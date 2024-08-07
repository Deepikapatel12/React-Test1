import { useEffect,useState } from "react";
const Dependency = () => {
const  [cnt, setCnt]=useState(0)
const [multi,setMulti]=useState(0)
useEffect(()=>{
  setMulti(cnt*2)
},[cnt])

  return ( 
    <>
      <h1>MY DEPENDENCY PROGRAM : </h1>
      <h2>my counter:{cnt}</h2>
      <h2>my multi:{multi}</h2>
      <button onClick={()=>{setCnt(cnt+1)}}>click</button>
    </>
   );
}
 
export default Dependency;