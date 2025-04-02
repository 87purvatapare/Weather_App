import TextField from '@mui/material/TextField'; // 1 st box 
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import  "./Searchbox.css";


function Searchbox({ updateInfo }) {
let [city,setCity] = useState("");
let [error,setError] = useState(false);

const API_URL ="https://api.openweathermap.org/data/2.5/weather";
const API_KEY ="106be5955a578807e333abaaee54208a";
     

    let getWeatherInfo =async()=>{
      try{  let response = await fetch(
          `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
       );
       let jsonResponse = await response.json();
  
       console.log(jsonResponse);
  
       let result = {
        city: city,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity:jsonResponse.main.humidity,
        feelsLike:jsonResponse.main.feels_like,
        weather :jsonResponse.weather[0].description,
       };
       console.log(result);
       return result;
     
      } catch(error){
       throw err;
      }
    };

 let handlChange=(evt)=>{
    setCity(evt.target.value);
 };

let handleSubmit= async (evt)=>
{
  try{  
    evt.preventDefault();
    console.log(city);
    setCity("");
    let newInfo = await getWeatherInfo();
    updateInfo(newInfo);
} catch(err){
  setError(true)

}

  }
 

  return (
    <div className="Searchbox"> 
    <form onSubmit={handleSubmit}> 

   <TextField  id="City" label="City Name" variant="outlined" required  value ={city}onChange={handlChange}/> 
   <br></br>
   <br></br>

   <Button variant="contained" type="Submit"> Search </Button>
   {error && <p style={{color:red}}> No such place exists!</p>}
   </form>                                                                 
     
   </div>
  )
}

export default Searchbox;



