// import Logo from "/images/logo.png";
import React, { useState } from "react";
import Datakabupaten from "./dataKabupaten";
export default function Navbar(props) {
  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-black transition ease transform duration-300`;

  const [kabOpen, setKabOpen] = useState(false);
  const [burgerOpen, setBurgerOpen] = useState(false);
  const [kabBurgerOpen, setKabBurgerOpen] = useState(false);

  return (
    <div>
      <div className=" grid w-full place-items-center rounded-lg lg:overflow-visible">
        <nav className=" sticky top-0 z-10 block w-full max-w-full px-5 py-2 text-white border rounded-none shadow-md h-max border-white/80 bg-opacity-80 bg-white">
          <div className="flex items-center justify-between text-blue-gray-900">
            {/*nav kanan*/}
            <div className="flex items-center">
              <img className="h-20" src={props.logo} alt=""></img>
              <a
                href="/"
                className=" block cursor-pointer py-1.5 font-sans text-base font-semibold leading-relaxed text-inherit antialiased p-5"
              >
                {props.title}
              </a>
            </div>

            {/*nav kiri*/}
            <div className=" items-center gap-6">
              <div className="hidden mr-4 lg:block">
                <button
                  class="relative flex flex-col items-center sm:hidden px-4 py-2  font-sans text-base font-bold text-center text-gray-900 uppercase transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block"
                  onClick={() => setKabOpen((prev) => !prev)}
                >
                  Kabupaten
                  {!kabOpen ? (
                    <span class="ml-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2.5"
                        stroke="currentColor"
                        aria-hidden="true"
                        class="hidden h-3 w-3 lg:inline-block"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        ></path>
                      </svg>
                    </span>
                  ) : (
                    <span class="ml-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2.5"
                        stroke="currentColor"
                        aria-hidden="true"
                        class="w-3 h-3 mx-auto transition-transform rotate-180 inline-block"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        ></path>
                      </svg>
                    </span>
                  )}
                </button>
                <a
                  className="hidden px-4 py-2 font-sans text-base font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block"
                  href="/"
                >
                  About Us
                </a>
              </div>
            </div>

            {/* burger*/}
            <button
              className="flex flex-col rounded justify-center items-center group lg:hidden "
              onClick={() => setBurgerOpen(!burgerOpen)}
            >
              <div
                className={`${genericHamburgerLine} ${
                  burgerOpen
                    ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100"
                    : "opacity-50 group-hover:opacity-100"
                }`}
              />
              <div
                className={`${genericHamburgerLine} ${
                  burgerOpen
                    ? "opacity-0"
                    : "opacity-50 group-hover:opacity-100"
                }`}
              />
              <div
                className={`${genericHamburgerLine} ${
                  burgerOpen
                    ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
                    : "opacity-50 group-hover:opacity-100"
                }`}
              />
            </button>
          </div>
        </nav>

        {/* Dropdown */}
        {burgerOpen && (
          <div class="absolute z-[800] lg:hidden top-24 flex h-auto w-full flex-col  bg-white  p-4 text-gray-700 shadow-xl shadow-blue-gray-900/5">
            <nav class="flex min-w-[240px] flex-col gap-1 p-2 font-sans text-base font-normal text-blue-gray-700">
              <div class="relative block w-full">
                <div class="flex items-center w-full p-0 leading-tight transition-all rounded-lg outline-none  text-start text-blue-gray-700 hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
                  <button
                    onClick={() => setKabBurgerOpen(!kabBurgerOpen)}
                    type="button"
                    class="flex items-center justify-between w-full p-3 font-sans text-xl antialiased font-semibold leading-snug text-left transition-colors border-b-0 select-none border-b-blue-gray-100 text-blue-gray-900 hover:text-blue-gray-900"
                  >
                    <img
                      className="h-8 pr-2"
                      src="/images/svg/location.svg"
                      alt="location svg"
                    ></img>
                    <p class="block mr-auto font-sans text-base antialiased font-normal leading-relaxed text-blue-gray-900">
                      Kabupaten
                    </p>
                    {!kabBurgerOpen ? (
                      <span class="ml-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="2.5"
                          stroke="currentColor"
                          aria-hidden="true"
                          class="w-4 h-4 mx-auto transition-transform "
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                          ></path>
                        </svg>
                      </span>
                    ) : (
                      <span class="ml-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="2.5"
                          stroke="currentColor"
                          aria-hidden="true"
                          class="w-4 h-4 mx-auto transition-transform rotate-180"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                          ></path>
                        </svg>
                      </span>
                    )}
                  </button>
                </div>
                {kabBurgerOpen && (
                  <div class="overflow-hidden">
                    <div class="block w-full py-1 font-sans text-sm antialiased font-light leading-normal text-gray-700">
                      <nav class="flex min-w-[240px] flex-col gap-1 p-0 font-sans text-base font-normal text-blue-gray-700">
                        {/* mapping */}
                        {Datakabupaten.slice(0, 18).map((kabupaten, index) => (
                          <a
                            key={index}
                            href={kabupaten.link}
                            class="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
                          >
                            <div class="grid mr-4 place-items-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="3"
                                stroke="currentColor"
                                aria-hidden="true"
                                class="w-5 h-3"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                ></path>
                              </svg>
                            </div>
                            {kabupaten.title}
                          </a>
                        ))}
                      </nav>
                    </div>
                  </div>
                )}
              </div>

              <div
                role="button"
                class="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
              >
                <div class="grid mr-4 place-items-center">
                  <img
                    className="h-8"
                    src="/images/svg/aboutUs.svg"
                    alt="about us"
                  ></img>
                </div>
                About Us
              </div>
            </nav>
          </div>
        )}

        {/* isi dari button kabupaten*/}
        {kabOpen && (
          <div
            class="absolute top-24 max-w-full w-full z-[800] mx-2 hidden min-w-[180px] overflow-auto border border-blue-gray-50 bg-white p-2 font-sans text-sm font-normal text-blue-gray-500  shadow-lg shadow-blue-gray-500/10 focus:outline-none lg:block"
            id=":r8:"
            role="menu"
            data-popover="menu"
            data-popover-placement="bottom"
          >
            <ul
              class="grid grid-cols-3 gap-y-2 outline-none outline-0"
              role="menuitem"
            >
              {Datakabupaten.slice(0, 5).map((kabupaten, index) => (
                <div key={index}>
                  <a href={kabupaten.link}>
                    <button
                      role="menuitem"
                      class="flex w-full cursor-pointer select-none items-center gap-3 rounded-lg px-3 pb-2 pt-[9px] text-start leading-tight outline-none transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
                    >
                      <div class="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
                        <img
                          className="h-10 w-10"
                          src={kabupaten.logo}
                          alt={kabupaten.alt}
                        />
                      </div>
                      <div>
                        <h6 class="flex items-center font-sans text-sm font-bold tracking-normal text-blue-gray-900 antialiased">
                          {kabupaten.title}
                        </h6>
                        <p class="block font-sans text-xs  !font-medium text-blue-gray-500 antialiased">
                          {kabupaten.subtitle}
                        </p>
                      </div>
                    </button>
                  </a>
                </div>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
