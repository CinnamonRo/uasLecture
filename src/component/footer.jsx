import React from "react";

export default function Footer() {
  return (
    <div>
      <div class="relative">
        <div class="px-4 pt-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <div class="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">
            <div class="md:max-w-md lg:col-span-2">
              <div className="w-20 h-20 ">
                <img src="images/othersLogo/umn.png" alt="" />
              </div>
              <span class="text-xl font-bold tracking-wide text-gray-100 uppercase text-left">
                Informatika 2023<br></br> Pre Intro To Tecnology
              </span>
            </div>
            <div class="grid grid-cols-2 row-gap-8 lg:col-span-4 md:grid-cols-3">
              <div>
                <p class="font-semibold tracking-wide text-sm text-deep-purple-50">
                  Created with
                </p>
                <ul class="mt-2 space-y-1 text-sm text-deep-purple-50">
                  <li className="flex">
                    <img
                      className="h-6 w-6"
                      src="/images/othersLogo/react.png"
                      alt="React Js"
                    />
                    <a className="mb-2 pl-2" href="https://react.dev/">
                      React Js
                    </a>
                  </li>
                  <li className="flex">
                    <img
                      className="h-6 w-6"
                      src="/images/othersLogo/tailwind.png"
                      alt="Tailwind"
                    />
                    <a className="pb-2 pl-2" href="https://tailwindcss.com/">
                      Tailwind CSS
                    </a>
                  </li>
                  <li className="flex">
                    <img
                      className="h-6 w-6"
                      src="/images/othersLogo/git.png"
                      alt="Git Hub"
                    />
                    <a className="pb-5 pl-2" href="https://github.com/">
                      GitHub
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <p class="font-semibold tracking-wide text-sm text-deep-purple-50">
                  Data Resources
                </p>
                <ul class="mt-2 space-y-2 text-sm text-deep-purple-50">
                  <li className="flex pb-2">
                    <img
                      className="h-6 w-12"
                      src="/images/othersLogo/weatherApi.png"
                      alt="Open Weather"
                    />
                    <a className="pb-2 pl-2" href="https://www.weatherapi.com/">
                      Weather api
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <p class="font-semibold tracking-wide text-sm text-deep-purple-50">
                  Supported by
                </p>
                <ul class="mt-2 space-y-2 text-sm text-deep-purple-50">
                  <li className="flex pb-2">
                    <img
                      className="h-6 w-18"
                      src="/images/svg/daisyuilogo.svg"
                      alt="Daisy Ui"
                    />
                    <a className="pb-2 pl-2" href="https://daisyui.com/">
                      Daisy UI
                    </a>
                  </li>
                  <li className="flex pb-2">
                    <img
                      className="h-6 w-6"
                      src="/images/othersLogo/Materialwind.png"
                      alt="Material Tailwind"
                    />
                    <a
                      className="pb-2 pl-2"
                      href="https://www.material-tailwind.com/"
                    >
                      Material Tailwind
                    </a>
                  </li>
                  <li className="flex pb-2">
                    <img
                      className="h-6 w-10"
                      src="/images/othersLogo/ColorSpace.png"
                      alt="Open Weather"
                    />
                    <a className="pb-2 pl-2" href="https://mycolor.space/">
                      Color Space
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="flex flex-col justify-between pt-5 pb-10 border-t border-deep-purple-accent-200 sm:flex-row">
            <p class="text-sm text-gray-100">
              © Copyright 2024 Kelompok Orang China. All rights reserved.
            </p>
            <div class="flex items-center mt-4 space-x-4 sm:mt-0">
              <a
                href="/"
                class="transition-colors duration-300 text-deep-purple-100 hover:text-teal-accent-400"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" class="h-5">
                  <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z"></path>
                </svg>
              </a>
              <a
                href="/"
                class="transition-colors duration-300 text-deep-purple-100 hover:text-teal-accent-400"
              >
                <svg viewBox="0 0 30 30" fill="currentColor" class="h-6">
                  <circle cx="15" cy="15" r="4"></circle>
                  <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z"></path>
                </svg>
              </a>
              <a
                href="/"
                class="transition-colors duration-300 text-deep-purple-100 hover:text-teal-accent-400"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" class="h-5">
                  <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
