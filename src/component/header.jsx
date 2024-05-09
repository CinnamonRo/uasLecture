import React from "react";
import "../css/style.css";
import Carousel from "./carousel"

export default function Header() {
  return (
    <div className="HomeContainer">
      <section id="home" class="welcome-hero">
        <div class="container">
          <div class="welcome-hero-txt">
            <h2>
              OBJEK WISATA JAWA BARAT <br></br>DARI SETIAP DAERAH{" "}
            </h2>
            <p>
              Mulai dari Pengunungan, Kebun, Pantai dan Banyak lagi Objek Wisata
              Yang Dapat Ditemukan.
            </p>
          </div>
        </div>
      </section>

      <section className="ContainerCarousel">
          <Carousel />
      </section>
    </div>
  );
}
