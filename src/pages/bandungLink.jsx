import Navbar from "../component/navbar";
import Header from "../component/header";
import Explore from "../component/explore";
import Datakabupaten from "../component/dataKabupaten";
import Carousel from "../component/carousel";
import Footer2 from "../component/footer2";

export default function BandungBarat() {
  return (
    <div>
      <Navbar logo={Datakabupaten[0].logo} title={Datakabupaten[0].title} />
      <Header />
      <Carousel
        text1={carouselContents[0].text1}
        imgSrc1={carouselContents[0].imgSrc1}
        text2={carouselContents[0].text2}
        imgSrc2={carouselContents[0].imgSrc2}
      />
      <Explore />
      <Footer2 />
    </div>
  );
}
