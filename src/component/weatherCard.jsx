import React from "react";

function WeatherCard(props) {
  return (
    <div className="py-2 mx-auto justify-center">
      <div className="py-3 mx-auto">
        <p className="text-center font-sans font-semibold text-4xl">
          {props.loct}'s Weather
        </p>
      </div>
      <div class="flex items-center justify-center">
        <div class="flex flex-col bg-blue-200 rounded p-4 w-full max-w-xs">
          <div class="font-bold text-xl">{props.loct}</div>
          <div class="text-sm text-gray-500">{props.date}</div>
          <div class="mt-6 text-6xl self-center inline-flex items-center justify-center rounded-lg text-indigo-400 h-24 w-24">
            <img className="h-32 w-32" src={props.img} alt={props.imgAlt} />
          </div>
          <div class="flex flex-row items-center justify-center mt-6">
            <div class="font-medium text-6xl">{props.cDegree}</div>
            <div class="flex flex-col items-center ml-6">
              <div>{props.imgAlt}</div>
              <div class="mt-1">
                <span class="text-sm">
                  <i class="far fa-long-arrow-up"></i>
                </span>
                <span class="text-sm font-light text-gray-500">
                  {props.flC}
                </span>
              </div>
            </div>
          </div>
          <div class="flex flex-row justify-between mt-6">
            <div class="flex flex-col items-center">
              <div class="font-medium text-sm">Wind</div>
              <div class="text-sm text-gray-500">{props.windKmh}</div>
            </div>
            <div class="flex flex-col items-center">
              <div class="font-medium text-sm">Humidity</div>
              <div class="text-sm text-gray-500">{props.humidity}</div>
            </div>
            <div class="flex flex-col items-center">
              <div class="font-medium text-sm">Visibility</div>
              <div class="text-sm text-gray-500">{props.visibility}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;
