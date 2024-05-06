import Logo from "./images/logo.png";
import Bar from "./bar";

export default function Navbar() {
  const kabupatens = [
    {
      id: 1,
      link: "bandung.html",
      img: "./images/logo.png",
      alt: "Bandung",
      title: "Bandung",
      subtitle: "Bandung adalah salah satu kota di Jawa Barat",
    },
    {
      id: 2,
      link: "bandung.html",
      img: "../../images/kabupaten/logo.png",
      alt: "Bandung",
      title: "Bandung",
      subtitle: "Bandung adalah salah satu kota di Jawa Barat",
    },
    {
      id: 3,
      link: "bandung.html",
      img: "src/component/images/kabupaten/bandung.webp",
      alt: "Bandung",
      title: "Bandung",
      subtitle: "Bandung adalah salah satu kota di Jawa Barat",
    },
    {
      id: 4,
      link: "bandung.html",
      img: "src/component/images/kabupaten/bandung.webp",
      alt: "Bandung",
      title: "Bandung",
      subtitle: "Bandung adalah salah satu kota di Jawa Barat",
    },
    {
      id: 5,
      link: "bandung.html",
      img: "src/component/images/kabupaten/bandung.webp",
      alt: "Bandung",
      title: "Bandung",
      subtitle: "Bandung adalah salah satu kota di Jawa Barat",
    },
  ];

  return (
    <div>
      <div className=" grid w-full place-items-center rounded-lg p-2 lg:overflow-visible">
        <nav className="sticky top-0 z-10 block w-full max-w-full mx-5 py-2 text-white border rounded-none shadow-md h-max border-white/80 bg-opacity-80 lg:px-8 lg:py-4 bg-white">
          <div className="flex items-center justify-between text-blue-gray-900">
            <div className="flex items-center">
              <img className="h-20" src={Logo} alt=""></img>
              <a
                href="/"
                className=" block cursor-pointer py-1.5 font-sans text-base font-semibold leading-relaxed text-inherit antialiased p-5"
              >
                Jawa Barat
              </a>
            </div>
            <div className=" items-center gap-6">
              <div className="hidden mr-4 lg:block">
                <div
                  role="button"
                  class="flex items-center sm:hidden px-4 py-2 font-sans text-base font-bold text-center text-gray-900 uppercase transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block"
                >
                  <p>Kabupaten</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    class="hidden h-3 w-3 transition-transform lg:block"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    ></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    class="block h-3 w-3 rotate-180 transition-transform lg:hidden"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    ></path>
                  </svg>
                </div>
                <a
                  className="hidden px-4 py-2 font-sans text-base font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block"
                  href="/"
                >
                  About Us
                </a>
              </div>
            </div>
            <button
              class="relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
              type="button"
            >
              <span class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  aria-hidden="true"
                  class="h-6 w-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  ></path>
                </svg>
              </span>
            </button>
          </div>
        </nav>
        <Bar kabupatens={kabupatens} />
      </div>
    </div>
  );
}
