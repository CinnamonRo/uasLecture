import React from "react";

function WeatherCard(props) {
  return (
    <div className=" py-5 mx-auto flex flex-col justify-center">
      <div className="bg-blue-200 rounded-lg p-4 border-2 mx-auto">
        <p className="text-center font-sans font-semibold text-4xl">
          {props.loct}'s Weather
        </p>
      </div>
      <div className="hover:-translate-y-2 border-lg ease-in-out scale-110  pt-10 duration-200 flex items-center justify-center">
        <div
          style={{
            backgroundImage:
              "linear-gradient(to top, #5a3b87, #604895, #6654a2, #6c61b0, #726ebd, #747ac8, #7787d2, #7a93dc, #7ca1e4, #81afeb, #89bcf1, #93c9f6)",
          }}
          className="border-2 flex flex-col rounded p-12 w-full md:max-w-sm  "
        >
          <div className="font-bold text-white text-xl ">{props.loct}</div>
          <div className="text-sm text-white">{props.date}</div>
          <div className="mt-6 text-6xl self-center inline-flex items-center justify-center rounded-lg text-indigo-400 h-24 w-24">
            <img className="h-32 w-32" src={props.img} alt={props.imgAlt} />
          </div>
          <div className="flex flex-row items-center justify-center mt-6">
            <div className="font-medium text-6xl">{props.cDegree}</div>
            <div className="flex flex-col items-center ml-6">
              <div className="font-bold">{props.imgAlt}</div>
              <div className="mt-1">
                <span className="text-sm">
                  <i className="far fa-long-arrow-up"></i>
                </span>
                <span className="text-sm font-light text-white">
                  {props.flC}
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-between mt-6">
            <div className="flex flex-col items-center">
              <div className="font-bold text-sm">Wind</div>
              <div className="text-sm text-white">{props.windKmh}</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="font-bold text-sm">Humidity</div>
              <div className="text-sm text-white">{props.humidity}</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="font-bold text-sm">Visibility</div>
              <div className="text-sm text-white">{props.visibility}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;
