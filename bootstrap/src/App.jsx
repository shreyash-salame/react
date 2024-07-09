import Errormessage from "./components/Errormessage"
import Fooditems from "./components/Fooditems"


function App() {
  let fooditems = ["Salad", "Green vegie", "Roti", "Dal", "Milk"]
  // let fooditems=[]


  return (
    <>

      <h1>Healthy Food</h1>
      <Errormessage fooditems={fooditems}/>
      <Fooditems fooditems={fooditems}/>
   

    </>
  )
}

export default App
