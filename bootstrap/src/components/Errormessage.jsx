function Errormessage({fooditems }){
 
    return(
        <>
        {fooditems.length === 0 ? <h3>i am still hungary</h3> : null}
        {/* {fooditems.length === 0 && <h3>i am still hungary</h3>} */}
        </>
    )
}
export default Errormessage