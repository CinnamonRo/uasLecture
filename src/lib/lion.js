import React from "react";
// import { useEffect } from "react";
import { useState } from "react";

const Client = () => {
  const [suhu, setSuhu] = useState(null);

  const getSuhu = async () => {
    const url = "https://api.bmkg.go.id/api/lokasi";
    const apiKey = "satuduatiga123";
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: { apiKey: apiKey },
      });
      if (!response.ok) {
        throw new Error("error");
      }
      const data = await response.json();
      setSuhu(data);
      console.log(suhu);
    } catch (Error) {
      console.log("error");
    }
  };
  getSuhu();
  console.log(suhu, "ini suhu");
  return <div></div>;
};

export default Client;
