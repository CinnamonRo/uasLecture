import React from "react";
import "../css/Carousel.css";

export default function Carousel(props) {
  return (
    <div className="Carousel m-3">
      <div className="max-w-3xl mx-auto">
        <h2 className="mt-11 mb-11 text-4xl md:text-6xl xl:text-6xl text-black font-bold text-center tracking-px-n leading-none">
          Tourist Attraction
        </h2>
      </div>
      <div className="carousel m-5 rounded-box">
        <div className="carousel carousel-center rounded-box">
          <div className="carousel-item rounded-box">
            <div className="max-w-sm mx-auto relative shadow-md rounded-lg cursor-pointer">
              <img
                src={props.imgSrc1}
                alt="Img by Meriç Dağlı https://unsplash.com/@meric"
                className="w-full h-auto object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-black bg-opacity-50 backdrop-blur text-white p-4 rounded-b-lg">
                <h1 className="text-center mt-2 text-2xl font-semibold">
                  {props.text1}
                </h1>
              </div>
            </div>
          </div>
          <div className="carousel-item rounded-box">
            <div className="max-w-sm mx-auto relative shadow-md rounded-lg cursor-pointer">
              <img
                src={props.imgSrc2}
                alt="Img by Meriç Dağlı https://unsplash.com/@meric"
                className="w-full h-auto object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-black bg-opacity-50 backdrop-blur text-white p-4 rounded-b-lg">
                <h1 className="text-center mt-2 text-2xl font-semibold">
                  {props.text2}
                </h1>
              </div>
            </div>
          </div>
          <div className="carousel-item rounded-box">
            <div className="max-w-sm mx-auto relative shadow-md rounded-lg cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1516205651411-aef33a44f7c2?auto=format&fit=crop&q=80&w=1528&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Img by Meriç Dağlı https://unsplash.com/@meric"
                className="w-full h-auto object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-black bg-opacity-50 backdrop-blur text-white p-4 rounded-b-lg">
                <h1 className="text-center mt-2 text-2xl font-semibold">
                  Nature Image
                </h1>
              </div>
            </div>
          </div>
          <div className="carousel-item rounded-box">
            <div className="max-w-sm mx-auto relative shadow-md rounded-lg cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1516205651411-aef33a44f7c2?auto=format&fit=crop&q=80&w=1528&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Img by Meriç Dağlı https://unsplash.com/@meric"
                className="w-full h-auto object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-black bg-opacity-50 backdrop-blur text-white p-4 rounded-b-lg">
                <h1 className="text-center mt-2 text-2xl font-semibold">
                  Nature Image
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
