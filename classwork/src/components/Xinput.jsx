import { useState } from "react";
function Xinput({handleval,syn}){
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
export default Xinput;