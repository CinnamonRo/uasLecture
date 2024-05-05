export default function Bar(props) {
  return (
    <div>
      <a href={props.href}>
        <button
          role="menuitem"
          class="flex w-full cursor-pointer select-none items-center gap-3 rounded-lg px-3 pb-2 pt-[9px] text-start leading-tight outline-none transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
        >
          <div class="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
            {" "}
            <img src={props.img} alt={props.alt} />
          </div>
          <div>
            <h6 class="flex items-center font-sans text-sm font-bold tracking-normal text-blue-gray-900 antialiased">
              {props.title}
            </h6>
            <p class="block font-sans text-xs  !font-medium text-blue-gray-500 antialiased">
              {props.subtitle}
            </p>
          </div>
        </button>
      </a>
    </div>
  );
}
