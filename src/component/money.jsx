import React, { useState, useEffect } from "react";
import CurrencyRow from "../component/moneyCard";

// Define your API key here
//new cur_live_88vxDKAklOFrAgpAsyEr0uP2X8ewjR5hp9MskmXf
const apiKey = "cur_live_UpKOaTnGG2xbpTsjNOXCfK86nHJ5eJbwAm6WplXh";

function MoneyExchange() {
  const url = `https://api.currencyapi.com/v3/latest?apikey=${apiKey}&currencies=EUR%2CUSD%2CCAD%2CIDR`;

  const [currencyOptions, setCurrencyOptions] = useState([]);
  const [fromCurrency, setFromCurrency] = useState("USD"); // Default to USD
  const [exchangeRates, setExchangeRates] = useState({});
  const [amount, setAmount] = useState(1);
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const firstCurrency = Object.keys(data.data)[0];
        setCurrencyOptions([...Object.keys(data.data)]);
        setFromCurrency(firstCurrency);
        setExchangeRates(data.data);
      });
  }, [url]);

  function handleFromAmountChange(e) {
    setAmount(e.target.value);
    setAmountInFromCurrency(true);
  }

  function convertCurrency(amount, fromRate, toRate) {
    if (!fromRate || !toRate) return "";
    return (amount / fromRate) * toRate;
  }

  let toAmount = "",
    fromAmount = amount;
  if (exchangeRates[fromCurrency] && exchangeRates["IDR"]) {
    if (amountInFromCurrency) {
      toAmount = convertCurrency(
        amount,
        exchangeRates[fromCurrency].value,
        exchangeRates["IDR"].value
      );
    } else {
      fromAmount = convertCurrency(
        amount,
        exchangeRates["IDR"].value,
        exchangeRates[fromCurrency].value
      );
    }
  }

  return (
    <>
      <h1 className="text-center text-2xl font-white font-sans font-bold py-3">
        Convert To Local Money
      </h1>
      <CurrencyRow
        currencyOptions={currencyOptions}
        selectedCurrency={fromCurrency}
        onChangeCurrency={(e) => setFromCurrency(e.target.value)}
        amount={fromAmount}
        onAmountChange={handleFromAmountChange}
        disabled={false}
      />
      <div className="text-center text-2xl font-white font-sans font-bold">
        =
      </div>
      <CurrencyRow
        currencyOptions={["IDR"]}
        selectedCurrency="IDR"
        amount={toAmount}
        onAmountChange={() => {}} // Provide a dummy handler
        disabled={true}
      />
    </>
  );
}

export default MoneyExchange;
