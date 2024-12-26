
import "./SearchBox.css" 
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from "react";

export default function SearchBox({updateInfo}){
  let [city,setCity]=useState("");

  let API_URL="https://api.openweathermap.org/data/2.5/weather";

  let API_kEY ="6bf8816e1149d5acbee2361d5a70f000";

let getWeatherInfo =async ()=>{
  let response = await fetch(`${API_URL}?q=${city}&appid=${API_kEY}&units=metric`);
  let jsonResponse = await response.json();
  console.log(jsonResponse)

  let result={
    feelsLike:jsonResponse.main.feels_Like,
    humidity:jsonResponse.main.humidity,
    temp:jsonResponse.main.temp,
    tempMax:jsonResponse.main.temp_max,
    tempmin:jsonResponse.main.temp_min,
    weather:jsonResponse.weather[0].description,
  }
console.log(result);
return result;
}
  let handleChange =(e)=>{
    setCity(e.target.value)
   
    }

  let handleSubmit =async(e)=>{
    e.preventDefault();
    console.log(city)
  setCity("");
  let newInfo= await getWeatherInfo();
  updateInfo(newInfo)
  }

 return(
    <div className="searchbox">
    <h1>Search For the Weather</h1>
    <form onSubmit={handleSubmit}>
        <TextField id="outlined-basic" label="City" variant="outlined" value={city} onChange={handleChange}/>
    <br></br>
    <br></br>
    <Button variant="contained"type="submit">Search</Button>
    </form>
  
    </div>
  )

}