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

export default function Purwakarta() {
  return (
    <div>
      <Navbar logo={Datakabupaten[16].logo} title={Datakabupaten[16].title} />
      <Header
        text={dataHeader[16].text}
        city={dataHeader[16].city}
        imgSrc={dataHeader[16].imgSrc}
      />
    </div>
  );
}
