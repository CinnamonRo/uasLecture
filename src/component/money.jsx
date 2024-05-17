import React, { useState, useEffect } from "react";

function MoneyExchange() {
  const apiKey = "cur_live_UpKOaTnGG2xbpTsjNOXCfK86nHJ5eJbwAm6WplXh";
  const url = `https://api.currencyapi.com/v3/latest?apikey=${apiKey}&currencies=EUR%2CUSD%2CCAD%2CIDR`;

  const [apiInfo, setApiInfo] = useState(null);
  //   const cityName = '';

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
  console.log(apiInfo.data);

  return (
    <div />
    // <div className="container mx-auto p-12">
    //   <h1 className="text-3xl text-center mb-6">Money Exchange</h1>
    //   <form className="flex flex-col space-y-4">
    //     <label htmlFor="amount">Amount:</label>
    //     <input
    //       type="text"
    //       id="amount"
    //       name="amount"
    //       className="border border-gray-300 rounded px-4 py-1"
    //       value={amount}
    //       onChange={(e) => setAmount(e.target.value)}
    //     />
    //     <label htmlFor="from">From:</label>
    //     <select
    //       id="from"
    //       name="from"
    //       className="border border-gray-300 rounded px-4 py-1"
    //       value={fromCurrency}
    //       onChange={(e) => setFromCurrency(e.target.value)}
    //     >
    //       {Object.keys(exchangeRates).map((currency) => (
    //         <option key={currency} value={currency}>
    //           {currency}
    //         </option>
    //       ))}
    //     </select>
    //     <label htmlFor="to">To:</label>
    //     <select
    //       id="to"
    //       name="to"
    //       className="border border-gray-300 rounded px-4 py-1"
    //       value={toCurrency}
    //       onChange={(e) => setToCurrency(e.target.value)}
    //     >
    //       {Object.keys(exchangeRates).map((currency) => (
    //         <option key={currency} value={currency}>
    //           {currency}
    //         </option>
    //       ))}
    //     </select>
    //     <button
    //       type="button"
    //       className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    //       onClick={handleConvert}
    //     >
    //       Convert
    //     </button>
    //   </form>
    //   <div id="result" className="mt-6 text-xl font-bold">
    //     {result}
    //   </div>
    // </div>
  );
}

export default MoneyExchange;
