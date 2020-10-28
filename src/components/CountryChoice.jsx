import React, { useEffect, useState } from 'react'

const CountryChoice = ({handleCountryChange}) => {
 const [countries, setCountries] = useState([]);

 useEffect(() => {
  const fetchCountries = async () => {
   try {
    const response = await fetch("https://covid19.mathdro.id/api/countries")
    const data = await response.json();
    const countryName = data.countries.map(country => country.name);
    setCountries(countryName);
   } catch (error) {
    console.log(error)
   }
  }
  fetchCountries();
 }, [setCountries])

 return (
  <div className="custom-select">
   <select className="select" onChange={e => handleCountryChange(e.target.value)}>
    <option value="global">Global</option>
    {countries.map((country, index) => (<option key={index} value={country}>{country}</option>))}
   </select>
  </div>
 )
}

export default CountryChoice