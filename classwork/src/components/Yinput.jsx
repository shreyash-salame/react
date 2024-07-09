import { useState } from "react";
function Yinput({handleval,syn}){
    const [title,setTitle]=useState('')
    const handleChange=(e)=>{
        setTitle(e.target.value)
        handleval(e.target.value)
    }
    return(
        <>
        <input value={title} onChange={handleChange}/>{syn}
        </>
    )
}
export default Yinput;