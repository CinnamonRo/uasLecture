// KOMPONEN
import Navbar from "../component/navbar";
import Header from "../component/header";
import Explore from "../component/explore";
import Carousel from "../component/carousel";
import Footer2 from "../component/footer2";

// DATA
import Datakabupaten from "../component/dataKabupaten";
import dataHeader from "../component/dataHeader";
import dataExplore from "../Js/dataExplore";
import contents from "../Js/CarouselContent";

export default function Indramayu() {
  return (
    <div>
      <Navbar logo={Datakabupaten[11].logo} title={Datakabupaten[11].title} />

      <Header
        text={dataHeader[11].text}
        city={dataHeader[11].city}
        imgSrc={dataHeader[11].imgSrc}
      />
    </div>
  );
}
