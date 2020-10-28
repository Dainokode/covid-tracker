import React, {useEffect, useState} from 'react'
import {Cards, CountryChoice, Chart} from "./components/exports";
import "./styles/main.scss";
import 'font-awesome/css/font-awesome.min.css';

const App = () => {
  const [data, setData] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://covid19.mathdro.id/api");
        const data = await response.json();

        const customData = {
          confirmed: data.confirmed,
          recovered: data.recovered,
          deaths: data.deaths,
          lastUpdate: data.lastUpdate,
        }

        setData(customData)
        
      } catch (error) {
        console.log(error)
      }
    }
    fetchData();
  }, [])

  return (
    <div className="container">
    <h1>Covid-19 <i className="fas fa-viruses"></i> Tracker</h1>
      <Cards data={data}/>
      <CountryChoice />
      <Chart />
    </div>
  )
}

export default App

