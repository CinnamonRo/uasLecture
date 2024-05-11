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

export default function Tasikmalaya() {
  return (
    <div>
      <Navbar logo={Datakabupaten[20].logo} title={Datakabupaten[20].title} />

      <Header
        text={dataHeader[20].text}
        city={dataHeader[20].city}
        imgSrc={dataHeader[20].imgSrc}
      />
    </div>
  );
}
