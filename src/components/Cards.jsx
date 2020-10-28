import React from 'react'
import CountUp from 'react-countup';

const Cards = ({data: {confirmed, recovered, deaths, lastUpdate}}) => {
 if(!confirmed){
  return "Loading..."
 }
 return (
  <div className="cards-container">

   {/* Infected */}
  <div className="card card-1">
   <h2>Infected</h2>
   <h3><CountUp start={0} end={confirmed.value} duration={3} separator={","} /></h3>
   <p>{new Date(lastUpdate).toDateString()}</p>
  </div>

  {/* Recovered */}
  <div className="card card-2">
   <h2>Recovered</h2>
   <h3><CountUp start={0} end={recovered.value} duration={3} separator={","} /></h3>
   <p>{new Date(lastUpdate).toDateString()}</p>
  </div>

  {/* Deaths */}
  <div className="card card-3">
   <h2>Deaths</h2>
   <h3><CountUp start={0} end={deaths.value} duration={3} separator={","} /></h3>
   <p>{new Date(lastUpdate).toDateString()}</p>
  </div>
  
  </div>
 )
}

export default Cards
