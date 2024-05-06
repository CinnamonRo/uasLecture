import React from "react";

export default function Bar(props) {
  return (
    <div
      class="top-28 max-w-full w-full z-[800] mx-2 hidden min-w-[180px] overflow-auto border border-blue-gray-50 bg-white p-2 font-sans text-sm font-normal text-blue-gray-500  shadow-lg shadow-blue-gray-500/10 focus:outline-none lg:block"
      id=":r8:"
      role="menu"
      data-popover="menu"
      data-popover-placement="bottom"
    >
      <ul
        class="grid grid-cols-3 gap-y-2 outline-none outline-0"
        role="menuitem"
      >
        {props.kabupatens.map((kabupaten, index) => (
          <div key={index}>
            <a href={kabupaten.link}>
              <button
                role="menuitem"
                class="flex w-full cursor-pointer select-none items-center gap-3 rounded-lg px-3 pb-2 pt-[9px] text-start leading-tight outline-none transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
              >
                <div class="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
                  <img src={kabupaten.img} alt={kabupaten.alt} />
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
  );
}