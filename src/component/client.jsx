import React from "react";
import { useEffect } from "react";
// import { useEffect } from "react";
import { useState } from "react";

const Client = () => {
  const [weatherInfo, setWeatherInfo] = useState(null);


    const apiKey = "f21b4c899cccd9e952907f3ed4257ac0";
    const url =`https://api.openweathermap.org/data/2.5/weather?lat=-6.905977&lon=107.613144&appid=${apiKey}`;
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
  </div>;
};

export default Client;
