import React from "react";

export default function Footer() {
  return (
    <div>
      <footer class="relative bg-blueGray-200 pt-8 pb-6">
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap text-left lg:text-left">
            <div class="w-full lg:w-6/12 px-4">
              <h4 class="text-3xl fonat-semibold text-blueGray-700">
                Perkenalkan kami:
              </h4>
              <h5 class="text-lg mt-0 mb-2 text-blueGray-600">
                Informatika 2023, Introduction To Technology
              </h5>
              <div class="mt-6 lg:mb-0 mb-6">
                <button
                  class="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <img src="/images/othersLogo/git.png" alt="" />
                </button>
                <button
                  class="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <i class="fab fa-facebook-square"></i>
                </button>
                <button
                  class="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <i class="fab fa-dribbble"></i>
                </button>
                <button
                  class="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <i class="fab fa-github"></i>
                </button>
              </div>
            </div>

            <div class="w-full lg:w-6/12 px-4">
              <div class="flex flex-wrap items-top mb-6">
                <div class="w-full lg:w-4/12 px-4 ml-auto">
                  <span class="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                    Created by:
                  </span>
                  <ul class="list-unstyled">
                    <li className="flex pb-2">
                      <img
                        className="h-6 w-6"
                        src="/images/othersLogo/react.png"
                        alt="React Js"
                      />
                      <a
                        class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 pl-2 text-sm"
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
                        class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 pl-2 text-sm"
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
                        class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 pl-2 text-sm"
                        href="https://github.com/"
                      >
                        GitHub
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="w-full lg:w-4/12 px-4">
                  <span class="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                    Data Resources
                  </span>
                  <ul class="list-unstyled">
                    <li className="flex pb-2">
                      <img
                        className="h-6 w-6"
                        src="/images/othersLogo/bmkglogo.png"
                        alt="BMKG"
                      />
                      <a
                        class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 pl-2 text-sm"
                        href="https://data.bmkg.go.id/"
                      >
                        BMKG
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr class="my-6 border-blueGray-300" />
          <div class="flex flex-wrap items-center md:justify-between justify-center">
            <div class="w-full md:w-4/12 px-4 mx-auto text-center">
              <div class="text-sm text-blueGray-500 font-semibold py-1">
                Copyright © 2024 Web By Kelompok Orang China
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
