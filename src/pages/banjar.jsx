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

function Banjar() {
  return (
    <div>
      <Navbar logo={Datakabupaten[2].logo} title={Datakabupaten[2].title} />

      <Header
        text={dataHeader[2].text}
        city={dataHeader[2].city}
        imgSrc={dataHeader[2].imgSrc}
      />
    </div>
  );
}

export default Banjar;
