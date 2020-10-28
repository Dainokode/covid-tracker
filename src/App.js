import React, {useEffect, useState} from 'react'
import {Cards, CountryChoice, Chart} from "./components/exports";
import "./styles/main.scss";
import 'font-awesome/css/font-awesome.min.css';

const App = () => {
  const [data, setData] = useState({data: {}, country: ""})

  const fetchData = async (country) => {
      
    let changeUrl = "https://covid19.mathdro.id/api";

    if(country){
      changeUrl = `https://covid19.mathdro.id/api/countries/${country}`;
    }

      try {
        const response = await fetch(changeUrl);
        const data = await response.json();

        const customData = {
          confirmed: data.confirmed,
          recovered: data.recovered,
          deaths: data.deaths,
          lastUpdate: data.lastUpdate,
        }

        return customData;
        
      } catch (error) {
        console.log(error)
      }
    }

    useEffect(() => {
      const fetchedData = async () => {
        const data = await fetchData()
        setData({data})
      }
      
      fetchedData()
    }, [])

  const handleCountryChange = async (country) => {
    const fetchedData = async () => {
      const data = await fetchData(country)
      setData({data, country})
    }
    
    fetchedData()
  }

  return (
    <div className="container">
    <h1>Covid-19 Tracker</h1>
      <Cards data={data.data} />
      <CountryChoice handleCountryChange={handleCountryChange} />
      <Chart data={data.data} country={data.country} />
    </div>
  )
}

export default App

