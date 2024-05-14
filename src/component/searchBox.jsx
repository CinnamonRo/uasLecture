import React, { useState } from "react";

export default function Search() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <div className="relative flex">
        <button
          className="relative z-[2] -ms-0.5 flex items-center rounded-e px-5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
          type="button"
          id="button-addon4"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="[&>svg]:h-5 [&>svg]:w-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </span>
          <span
            className="ml-3 text-black"
            style={{
              fontSize: "14px",
              fontFamily: "Arial, sans-serif",
              fontWeight: "bold",
            }}
          >
            Weather <br></br>Checker
          </span>
        </button>
        {isOpen && (
          <div>
            <input
              className="py-2 rounded text-center"
              type="search"
              placeholder="Enter City (Ex: Bandung)"
              style={{ outline: "none", fontFamily: "Arial, sans-serif" }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
