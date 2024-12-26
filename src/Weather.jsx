import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

export default function Weather(){
  
    let[weatherInfo,setWeatherInfo]= useState({
    city:"Pune",
    weather:"haze",
    temp:30.5,
    tempMin:30.5,
    tempMax:33,
    feelsLike:20,
    humidity:23,
    })
    let updateInfo = (newInfo)=>{
      setWeatherInfo(newInfo)
    }
    return(
    <>
   <SearchBox updateInfo={updateInfo}/>
   <InfoBox info={weatherInfo}/>
   </>
  )
}