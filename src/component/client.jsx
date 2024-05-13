import React from "react";
import { useEffect } from "react";
// import { useEffect } from "react";
import { useState } from "react";
import Card from "./card";

const Client = (props) => {
  const [apiInfo, setApiInfo] = useState(null);
  //   const cityName = '';
  const apiKey = "f21b4c899cccd9e952907f3ed4257ac0";
  const url = `http://api.weatherapi.com/v1/current.json?key=3b52f5ead5cd41a99fc23500241305&q=${props.cityName}&aqi=no`;
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
          apiwLogo={apiInfo.current.condition.icon}
          apiwAlt={apiInfo.current.condition.text}
          apiwDesc={apiInfo.current.condition.text}
          apiTemp={apiInfo.current.temp_c + "°C"}
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
