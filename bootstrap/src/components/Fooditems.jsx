import Items from "./Items";

function Fooditems({fooditems}){
    
    return(
        <>
           <ul className="list-group">
        {
          fooditems.map((item) => (
           <Items key={item} fooditems={item}></Items>
          ))
        }


      </ul>
        </>
    )
}
export default Fooditems;