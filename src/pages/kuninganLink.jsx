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

export default function Kuningan() {
  return (
    <div>
      <Navbar logo={Datakabupaten[13].logo} title={Datakabupaten[13].title} />

      <Header
        text={dataHeader[13].text}
        city={dataHeader[13].city}
        imgSrc={dataHeader[13].imgSrc}
      />
    </div>
  );
}
