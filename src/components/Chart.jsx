import React, { useEffect, useState } from 'react'

const Chart = () => {
 const [dailyData, setDailyData] = useState({})
 
 useEffect(() => {
  const fetchDailyData = async () => {
   const response = await fetch("https://covid19.mathdro.id/api/daily")
   const data = await response.json();
   console.log(data)
  }
  fetchDailyData()
 }, [])

 return (
  <div>
   Chart
  </div>
 )
}

export default Chart