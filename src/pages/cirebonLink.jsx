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

export default function Cirebon() {
  return (
    <div>
      <Navbar logo={Datakabupaten[8].logo} title={Datakabupaten[8].title} />

      <Header
        text={dataHeader[8].text}
        city={dataHeader[8].city}
        imgSrc={dataHeader[8].imgSrc}
      />
    </div>
  );
}
