import React from "react";
import { useEffect } from "react";
// import { useEffect } from "react";
import { useState } from "react";
import WeatherCard from "./weatherCard";

const WeatherApi = (props) => {
  const [apiInfo, setApiInfo] = useState(null);
  //   const cityName = '';
  const apiKey = "d721d22fabe0487caba74553241405";
  const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${props.city}&aqi=no`;
  useEffect(() => {
    const getApiInfo = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("error");
        }
        const data = await response.json();
        setApiInfo(data);
      } catch (Error) {
        console.log("error");
      }
    };
    getApiInfo();
  }, [apiKey, url]);

  console.log(apiInfo, "ini api");

  return (
    <div>
      {apiInfo ? (
        <WeatherCard
          loct={apiInfo.location.name}
          date={apiInfo.location.localtime}
          img={apiInfo.current.condition.icon}
          imgAlt={apiInfo.current.condition.text}
          cDegree={apiInfo.current.temp_c + "°C"}
          flC={apiInfo.current.feelslike_c + " °C"}
          windKmh={apiInfo.current.wind_kph + "k/h"}
          humidity={apiInfo.current.humidity + "%"}
          visibility={apiInfo.current.vis_km + "km"}
        />
      ) : (
        <p>Error to show data</p>
      )}
    </div>
  );
};

export default WeatherApi;
