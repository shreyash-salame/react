import { useEffect, useState } from "react";
import axios from "axios"
import "./App.css"
function App() {
  const [countries, setCountries] = useState([])
  const [filtered,setFiltered]=useState([])
  const [search,setsearch]=useState("")

  const getcountries = () => {
    axios.get("https://restcountries.com/v3.1/all")
      .then((res) => {
        setCountries(res.data);
        setFiltered(res.data)
      })
  }
  useEffect(getcountries, [])

  useEffect(()=>{
    if(search){
    let _countries=[...countries];
    _countries=_countries.filter(country=>country.name.common.toLowerCase().startsWith(search.toLowerCase()));
    setFiltered(_countries)
    }else{
      setFiltered(countries)
    }
  },[search])

  return (
    <>
      <div><input value={search} onChange={(e)=>{setsearch(e.target.value)}}/></div>
      <table>
        <thead>
          <tr>
          <th>country</th>
          <th>flag</th>
          <th>population</th>
          </tr>
        </thead>
        <tbody>
          {
            filtered.map((country, index) => {
              return (
                <tr key={index}>
                  <td>{country.name.common}</td>
                  <td><img src={country.flags.png} style={{ width: "50px" }} /></td>
                  <td>{country.population}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>


    </>
  )
}
export default App;