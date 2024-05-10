import React, { useRef, useEffect, useState } from "react";
import "../css/Carousel.css";

export default function Carousel() {
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
          <img
            src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
            alt="Pizza"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg"
            alt="Pizza"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg"
            alt="Pizza"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg"
            alt="Pizza"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg"
            alt="Pizza"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg"
            alt="Pizza"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg"
            alt="Pizza"
          />
        </div>
      </div>
    </div>
  );
}
