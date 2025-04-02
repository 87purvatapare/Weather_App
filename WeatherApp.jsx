import React, { useState } from 'react';
import Searchbox from './Searchbox';
import Infobox from './Infobox';
import "./WeatherApp.css"      
//import Button from "@mui/material/Button";
//import ShareIcon from "@mui/icons-material/Share";


function WeatherApp() {
 const [weatherInfo,setWeatherInfo] = useState({

        city:"Delhi",
        feelslike:24.84,
        temp:25.05,
        tempMin:25.05,
        tempMax:25.05,
        humidity:47,
        weather:"haze",
 });
 
let updateInfo=(newInfo)=>{
  setWeatherInfo(newInfo

  );
}


  return (
    <div style={{textAlign:"center"}}>
    <div classname="weather"> </div>
        <h2>Weather App By Purva Tapare </h2>
        <Searchbox updateInfo={updateInfo}/>
        <Infobox info={weatherInfo}/>
    </div>
  )
}

export default WeatherApp;