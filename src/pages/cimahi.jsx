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

function Cimahi() {
  return (
    <div>
      <Navbar logo={Datakabupaten[7].logo} title={Datakabupaten[7].title} />

      <Header
        text={dataHeader[7].text}
        city={dataHeader[7].city}
        imgSrc={dataHeader[7].imgSrc}
      />
    </div>
  );
}

export default Cimahi;
