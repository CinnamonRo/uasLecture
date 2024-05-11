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

export default function Bekasi() {
  return (
    <div>
      <Navbar logo={Datakabupaten[3].logo} title={Datakabupaten[3].title} />

      <Header
        text={dataHeader[3].text}
        city={dataHeader[3].city}
        imgSrc={dataHeader[3].imgSrc}
      />
    </div>
  );
}
