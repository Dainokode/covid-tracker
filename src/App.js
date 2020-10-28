import React from 'react'
import {Cards, CountryChoice, Chart} from "./components/exports";
import "./styles/main.scss";

const App = () => {
  return (
    <div>
      <Cards />
      <CountryChoice />
      <Chart />
    </div>
  )
}

export default App

