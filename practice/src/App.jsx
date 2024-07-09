import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Pokemon from "./components/Pokemon"

export default function App() {

  const [countries, setCountries] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");
  const [order, setorder] = useState(1)

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(res => {
        setCountries(res.data);
        setFiltered(res.data);
      })
      .catch(err => console.error("Error fetching countries: ", err));
  }, []);

  useEffect(() => {
    if (search) {
      let _countries = countries.filter(country => {
        let countryName = country.name.common.toLowerCase();
        let searchName = search.toLowerCase();
        return countryName.startsWith(searchName);
      });
      setFiltered(_countries);
    } else {
      setFiltered(countries);
    }
  }, [search, countries]);


  const sortcountries = () => {
    let _countries = [...countries]
    if (order === 1) _countries.sort((a, b) => b.population - a.population)
    else if (order === 2) _countries.sort((a, b) => a.population - b.population)
    setFiltered(_countries)
    setorder((order + 1) % 3)
  }


  return (
    <>
      {/* <div className="search">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for a country..."
        />
      </div>

      <table>
        <thead>
          <tr>
            <th>Country</th>
            <th>Flag</th>
            <th onClick={sortcountries}>Population</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((country, index) => (
            <tr key={index}>
              <td>{country.name.common}</td>
              <td><img src={country.flags?.png || ''} alt={`${country.name.common} flag`} width={50} /></td>
              <td>{country.population.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table> */}
      <Pokemon/>

    </>
  );
}
