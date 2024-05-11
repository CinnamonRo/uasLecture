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

export default function Sumedang() {
  return (
    <div>
      <Navbar logo={Datakabupaten[19].logo} title={Datakabupaten[19].title} />
      <Header
        text={dataHeader[19].text}
        city={dataHeader[19].city}
        imgSrc={dataHeader[19].imgSrc}
      />
    </div>
  );
}
