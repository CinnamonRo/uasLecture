import React from "react";
import "../css/CardStyle.css";

export default function Card(props) {
  return (
    <div className="Card">
      <div class="flex justify-center">
    <a class="rounded-3xl inline-block overflow-hidden shadow-xl max-w-xs cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-102 duration-300">
        <div class="relative group w-full overflow-hidden bg-black h-32 rounded-t-3xl">
            <img
            src={props.imageSrc}
            class="object-cover w-full h-full transform duration-700 backdrop-opacity-100"
            />
            <div class="absolute bg-gradient-to-t from-black w-full h-full flex items-end justify-center -inset-y-0"><h1 class="font-bold text-2xl text-white mb-2">{props.title}</h1></div>
        </div>
        <div class="bg-white">
            <div class="text-center px-3 pb-6 pt-2">
                <p class="mt-2 font-sans font-light text-slate-700">
                   {props.content}
                </p>
            </div>
            <div class="flex justify-center pb-3 text-slate-700">
                <div class="text-center mr-3 border-r pr-3 last:border-r-0">
                    <h2>Population</h2>
                    <span>286k</span>
                </div>
                <div class="text-center mr-3 border-r pr-3 last:border-r-0">
                    <h2>Area</h2>
                    <span>9.78 km²</span>
                </div>
            </div>
        </div>
    </a>

      </div>
    </div>
  );
}
