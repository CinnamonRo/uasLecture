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

export default function Cianjur() {
  return (
    <div>
      <Navbar logo={Datakabupaten[6].logo} title={Datakabupaten[6].title} />

      <Header
        text={dataHeader[6].text}
        city={dataHeader[6].city}
        imgSrc={dataHeader[6].imgSrc}
      />
    </div>
  );
}
