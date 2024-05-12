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

export default function Cianjur() {
  return (
    <div>
      <Navbar logo={Datakabupaten[6].logo} title={Datakabupaten[6].title} />

      <Header
        text={dataHeader[6].text}
        city={dataHeader[6].city}
        imgSrc={dataHeader[6].imgSrc}
      />

      <div className="flex justify-center mt-5 pt-5">
        <div className="flex text-center max-w-3xl">
          <h2
            className="mb-5 mb-3 border-l-4 border-r-4 border-b-4 rounded-full mt-5 p-5 mx-5 text-3xl md:text-4xl xl:text-5xl text-Black font-bold tracking-px-n leading-none"
            style={{ boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.3)" }}
          >
            Cianjur's Scenery
          </h2>
        </div>
      </div>
      <div className="p-2 m-5 rounded-box">
        <Carousel
          one={contents[6].one}
          contentOne={contents[6].contentOne}
          two={contents[6].two}
          contentTwo={contents[6].contentTwo}
          three={contents[6].three}
          contentThree={contents[6].contentThree}
          four={contents[6].four}
          contentFour={contents[6].contentFour}
          five={contents[6].five}
          contentFive={contents[6].contentFive}
          six={contents[6].six}
          contentSix={contents[6].contentSix}
          seven={contents[6].seven}
          contentSeven={contents[6].contentSeven}
        />
      </div>
    </div>
  );
}
