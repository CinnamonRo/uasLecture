import React from "react";
import "../css/CardStyle.css";

export default function Card(props) {
  console.log(props.weatherLogo, "loso");
  return (
    <div className="Card">
      <div className="flex justify-center">
        <a
          href="/"
          className="rounded-3xl inline-block overflow-hidden shadow-xl max-w-xs cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-102 duration-300"
        >
          <div className="relative group w-full overflow-hidden bg-black h-32 rounded-t-3xl">
            <img
              src={props.imageSrc}
              alt="kota"
              className="object-cover w-full h-full transform duration-700 backdrop-opacity-100"
            />
            <div className="absolute bg-gradient-to-t from-black w-full h-full flex items-end justify-center -inset-y-0">
              <h1 className="font-bold text-2xl text-white mb-2">
                {props.title}
              </h1>
            </div>
          </div>
          <div className="bg-white">
            <div className="text-center px-3 pb-6 pt-2">
              <p className="mt-2 font-sans font-light text-slate-700">
                {props.content}
              </p>
            </div>
            <div className="flex justify-center pb-3 text-slate-700">
              <div className="text-center mr-3 border-r pr-3 last:border-r-0">
                <h2 className="font-bold">Weather</h2>
                <div className="flex items-center mx-2">
                  <img
                    className="w-10 h-10"
                    src={props.apiwLogo}
                    alt={props.apiwAlt}
                  />
                  <span>{props.apiwDesc}</span>
                </div>
              </div>
              <div className="text-center mr-3 border-r pr-3 last:border-r-0">
                <h2 className="font-bold">Temp</h2>
                <span>{props.apiTemp}</span>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
