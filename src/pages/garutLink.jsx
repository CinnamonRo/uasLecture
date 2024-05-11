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

export default function Garut() {
  return (
    <div>
      <Navbar logo={Datakabupaten[10].logo} title={Datakabupaten[10].title} />

      <Header
        text={dataHeader[10].text}
        city={dataHeader[10].city}
        imgSrc={dataHeader[10].imgSrc}
      />
    </div>
  );
}
