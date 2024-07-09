function Random(){
    let num=Math.floor(Math.random()*100)
    return(
        <>
        <p style={{"backgroundColor":"red"}}>this is a random number :{num}</p>
        </>
    )
}
export default Random;