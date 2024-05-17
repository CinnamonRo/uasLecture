import React from "react";

function CurrencyRow({
  currencyOptions,
  selectedCurrency,
  onChangeCurrency,
  amount,
  onAmountChange,
  disabled,
}) {
  return (
    <div className="flex flex-col space-y-6 p-6 max-w-md mx-auto bg-white shadow-md rounded-xl">
      <input
        className="input p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out"
        type="number"
        value={amount}
        onChange={onAmountChange}
        disabled={disabled}
        placeholder="Enter amount"
      />
      <select
        value={selectedCurrency}
        onChange={onChangeCurrency}
        disabled={disabled}
        className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out bg-gray-50"
      >
        {currencyOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CurrencyRow;
