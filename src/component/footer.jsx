import React from "react";

export default function Footer() {
  return (
    <div>
      <footer
        style={{
          backgroundImage:
            " linear-gradient(to right bottom, #000000, #262025, #3e3c4b, #4a5d74, #4e8397)",
          color: "darkgrey",
        }}
        className="relative bg-blueGray-200 pt-8 pb-6"
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-left lg:text-left">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl fonat-semibold text-blueGray-700">
                Perkenalkan kami:
              </h4>
              <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
                Informatika 2023, Introduction To Technology
              </h5>
              <div className="flex mt-3 lg:mb-0 mb-3">
                <a href="google.com">
                  <img
                    className="bg-white text-lightBlue-400 shadow-lg font-normal h-14 w-14 object-cover items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                    src="/images/creator/fredlies2.jpg"
                    alt=""
                  />
                </a>
                <a href="google.com">
                  <img
                    className="bg-white text-lightBlue-400 shadow-lg font-normal h-14 w-14 object-cover items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                    src="/images/creator/morenos2.jpeg"
                    alt=""
                  />
                </a>
                <a href="google.com">
                  <img
                    className="bg-white text-lightBlue-400 shadow-lg font-normal h-14 w-14 object-cover items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                    src="/images/creator/brayens2.jpeg"
                    alt=""
                  />
                </a>
                <a href="google.com">
                  <img
                    className="bg-white text-lightBlue-400 shadow-lg font-normal h-14 w-14 object-fill items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                    src="/images/creator/gigihs2.jpg"
                    alt=""
                  />
                </a>
              </div>
            </div>

            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                    Created by:
                  </span>
                  <ul className="list-unstyled">
                    <li className="flex pb-2">
                      <img
                        className="h-6 w-6"
                        src="/images/othersLogo/react.png"
                        alt="React Js"
                      />
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 pl-2 text-sm"
                        href="https://react.dev/"
                      >
                        React Js
                      </a>
                    </li>
                    <li className="flex pb-2">
                      <img
                        className="h-6 w-6"
                        src="/images/othersLogo/tailwind.png"
                        alt="Tailwind"
                      />
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 pl-2 text-sm"
                        href="https://tailwindcss.com/"
                      >
                        Tailwind CSS
                      </a>
                    </li>
                    <li className="flex pb-2">
                      <img
                        className="h-6 w-6"
                        src="/images/othersLogo/git.png"
                        alt="Git Hub"
                      />
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 pl-2 text-sm"
                        href="https://github.com/"
                      >
                        GitHub
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                    Data Resources
                  </span>
                  <ul className="list-unstyled">
                    <li className="flex pb-2">
                      <img
                        style={{ backgroundColor: "white" }}
                        className="h-6 w-10"
                        src="/images/othersLogo/openweatherLogo.png"
                        alt="Open Weather"
                      />
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 pl-2 text-sm"
                        href="https://openweathermap.org/api"
                      >
                        Open Weather
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-2 border-blueGray-300" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-blueGray-500 font-semibold py-1">
                Copyright © 2024 Web By Kelompok Orang China
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
