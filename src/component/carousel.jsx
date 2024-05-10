import React, { useRef, useEffect, useState } from "react";
import "../css/Carousel.css";

export default function Carousel(props) {
  const carouselRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const carousel = carouselRef.current;

    const interval = setInterval(() => {
      if (!isHovered) {
        if (
          carousel.scrollLeft + carousel.clientWidth !==
          carousel.scrollWidth
        ) {
          carousel.scrollLeft += carousel.clientWidth;
        } else {
          carousel.scrollLeft = 0;
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isHovered]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="Carousel my-5">
      <div
        className="carousel carousel-center rounded-lg mx-5"
        style={{
          backgroundColor: "white",
        }}
        ref={carouselRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="carousel-item">
          <img src={props.one} />
        </div>
        <div className="carousel-item">
          <img src={props.two} />
        </div>
        <div className="carousel-item">
          <img src={props.three} />
        </div>
        <div className="carousel-item">
          <img src={props.four} />
        </div>
        <div className="carousel-item">
          <img src={props.five} />
        </div>
        <div className="carousel-item">
          <img src={props.six} />
        </div>
        <div className="carousel-item">
          <img src={props.seven} />
        </div>
      </div>
    </div>
  );
}
