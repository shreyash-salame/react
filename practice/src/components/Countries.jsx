import axios from "axios";
import { useEffect, useState } from "react";

export default function Countries() {

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then(res => {
        setCountries(res.data);
      })
  }, [])

  return (
    <>
    <table>

      <tr>
        <th>Flag</th>
        <th>Country</th>
        <th>Population</th>
      </tr>

      <tbody>
        {
          countries.map((country, index) => {
            return (
              <tr key={index}>
                <td><img src={country.flags.png} width={200} /></td>
                <td>{country.name.common}</td>
                <td>{country.population}</td>
                <br />
              </tr>
            )
          })
        }
      </tbody>
    </table>
    </>
  )
}