import React from "react";
import { useEffect } from "react";
// import { useEffect } from "react";
import { useState } from "react";

const Client = (props) => {
  const [weatherInfo, setWeatherInfo] = useState(null);
    const apiKey = "f21b4c899cccd9e952907f3ed4257ac0";
    const name = props.name
    const url =`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${apiKey}`; // ini url api
    useEffect(()=>{ 
       const getWeatherInfo = async()=>{
         try {
           const response = await fetch(url);
           if (!response.ok) {
             throw new Error("error");
           }
           const data = await response.json();
           setWeatherInfo(data);

         } catch (Error) {
           console.log("error");
         }
       }
        getWeatherInfo();
    },[apiKey, url]);

    console.log(weatherInfo, "ini api");

  return <div>
{weatherInfo && (
<p>{weatherInfo.base}</p>
)}
{/* {weather ? (<p>{weather.name}</p>):(<p>loading</p>)} */}
  </div>;
};

export default Client;
