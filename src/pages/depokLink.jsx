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

function depokLink() {
  return (
    <div>
      <Navbar logo={Datakabupaten[9].logo} title={Datakabupaten[9].title} />

      <Header
        text={dataHeader[9].text}
        city={dataHeader[9].city}
        imgSrc={dataHeader[9].imgSrc}
      />
    </div>
  );
}

export default depokLink;
