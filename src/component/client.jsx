import React from "react";
import { useEffect } from "react";
// import { useEffect } from "react";
import { useState } from "react";
import Card from "./card";

const Client = (props) => {
  const [apiInfo, setApiInfo] = useState(null);
  //   const cityName = '';
  const apiKey = "f21b4c899cccd9e952907f3ed4257ac0";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${props.cityName}&appid=${apiKey}`;
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
        <Card
          title={props.title}
          content={props.content}
          imageSrc={props.imageSrc}
          buttonText={props.buttonText}
          apiwLogo={`http://openweathermap.org/img/w/${apiInfo.weather[0].icon}.png`}
          apiwAlt={apiInfo.name}
          apiwDesc={apiInfo.weather[0].description}
          apiTemp={Math.floor(apiInfo.main.temp) / 10 + "°C"}
        ></Card>
      ) : (
        <Card
          title={props.title}
          content={props.content}
          imageSrc={props.imageSrc}
          buttonText={props.buttonText}
          apiwLogo="/images/othersLogo/sad.png"
          apiwAlt="sad"
          apiwDesc="Sorry, we couldn't get any information"
          apiTemp="Sorry, we couldn't get any information"
        />
      )}
    </div>
  );
};

export default Client;
