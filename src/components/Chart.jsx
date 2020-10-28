import React, { useEffect, useState } from 'react'
import {Line, Bar} from "react-chartjs-2";

const Chart = ({data: {confirmed, recovered, deaths, lastUpdate}, country}) => {
 const [dailyData, setDailyData] = useState([])
 
 useEffect(() => {
  const fetchDailyData = async () => {
   try {
    const response = await fetch("https://covid19.mathdro.id/api/daily")
    const data = await response.json();
   
    const customData = data.map(dailyData => ({
     confirmed: dailyData.confirmed.total,
     deaths: dailyData.deaths.total,
     date: dailyData.reportDate
    }))

   setDailyData(customData)

   } catch (error) {
    console.log(error)
   }
  }
  fetchDailyData()
 }, [])

 const chart = (
  dailyData !== 0 ? (
   <Line 
   data={{
    labels: dailyData.map(({date}) => date),
    datasets: [{
     data: dailyData.map(({confirmed}) => confirmed),
     label: "Infected",
     borderColor: "#ff0000",
     fill: true
    }, {
     data: dailyData.map(({deaths}) => deaths),
     label: "Deaths",
     borderColor: "#000",
     fill: true
    }]
   }}
   />
  ) : "Loading..."
 )

 const barChart = (
  confirmed ? (
  <Bar 
  data={{
   labels: ["Infected", "Recovered", "Deaths"],
   datasets: [{
    label: "People",
    backgroundColor: [
     "#ff0000",
     "#0dc20d",
     "#000"
    ],
    data: [confirmed.value, recovered.value, deaths.value]
   }]
  }}
  options={{
   legend: {display: false},
   title: {display: true, text: `Current situation in ${country}`}
  }}
  />
  ) : "null"
 )

 return (
  <div className="chart-container">
   {country ? barChart : chart}
  </div>
 )
}

export default Chart