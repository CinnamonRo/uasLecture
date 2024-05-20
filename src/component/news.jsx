import { useEffect, useState } from "react";

function News() {
  const [apiInfo, setApiInfo] = useState(null);
  const [loading, setLoading] = useState(true); // Added loading state
  //   const cityName = '';
  const apiKey = "95622e90f2b84ece81b0d5057b3e75ff";
  const url = `https://newsapi.org/v2/top-headlines?q=city&apiKey=${apiKey}`;
  useEffect(() => {
    const getApiInfo = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("error");
        }
        const data = await response.json();
        setApiInfo(data);
        setLoading(false); // Set loading to false after data is fetched
      } catch (Error) {
        console.log("error");
      }
    };
    getApiInfo();
  }, [apiKey, url]);

  return { apiInfo, loading }; // Return API data and loading state
}

export default News;
