import "./App.css"
import Inputdisplay from "./component/Inputdisplay";
import Button from "./component/Button";
import { useState } from "react";

function App() {
  const [calval, setcalval] = useState('')
  const onbuttonclick = (buttontext) => {
    if (buttontext === "c") {
      setcalval('');
    } else if (buttontext === "=") {
      const result = eval(calval)
      setcalval(result)

    } else {
      const newvalue = calval + buttontext;
      setcalval(newvalue)
    }


  }



  return (
    <>
      <div className="container">
        <Inputdisplay displayvalue={calval} />
        <Button onbuttonclick={onbuttonclick} />
      </div>
    </>
  )
}
export default App;