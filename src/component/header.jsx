import React from "react";

export default function Header(props) {
  return (
    <div className="Home">
      <section
        className="bg-white bg-no-repeat bg-center bg-cover bg-fixed overflow-hidden bg-KawahPutih"
        style={{
          backgroundImage: "",
        }}
      >
        <div
          className="py-40 bg-black bg-opacity-60"
          style={{ backdropFilter: "blur(12px)" }}
        >
          <div className="container px-4 mx-auto">
            <div className="text-center max-w-3xl mx-auto">
              <p className="mb-9 font-sans text-sm text-white font-semibold uppercase tracking-px">
                👋 BANDUNG
              </p>
              <h2 className="mb-11 text-6xl md:text-8xl xl:text-10xl text-white font-bold text-center tracking-px-n leading-none">
                Bandung Tourist Attractions
              </h2>

              <div className="md:inline-block">
                <button
                  className="py-4 px-6 w-full text-white font-semibold border border-indigo-700 rounded-xl shadow-4xl focus:ring focus:ring-indigo-300 bg-indigo-600 hover:bg-indigo-700 transition ease-in-out duration-200"
                  type="button"
                >
                  Start Explore
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
