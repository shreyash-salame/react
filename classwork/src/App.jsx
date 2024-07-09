import Yinput from "./components/Yinput"
import Xinput from "./components/Xinput";
import { useState } from "react";
import "./App.css"
function App(){
  const [syn,setsyn]=useState('')
 const handleval=(val)=>{
  setsyn(val);
 }
  return(
    <>
    <div>value</div>
    <Xinput handleval={handleval} syn={syn}/>
    <br/>
    <Yinput handleval={handleval} syn={syn}/>

    </>
  )
}
export default App;