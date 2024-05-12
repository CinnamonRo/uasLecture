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

      <div className="flex justify-center mt-5 pt-5">
        <div className="flex text-center max-w-3xl">
          <h2
            className="mb-5 mb-3 border-l-4 border-r-4 border-b-4 rounded-full mt-5 p-5 mx-5 text-3xl md:text-4xl xl:text-5xl text-Black font-bold tracking-px-n leading-none"
            style={{ boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.3)" }}
          >
            Bekasi's Scenery
          </h2>
        </div>
      </div>
      <div className="p-2 m-5 rounded-box">
        <Carousel
          one={contents[3].one}
          contentOne={contents[3].contentOne}
          two={contents[3].two}
          contentTwo={contents[3].contentTwo}
          three={contents[3].three}
          contentThree={contents[3].contentThree}
          four={contents[3].four}
          contentFour={contents[3].contentFour}
          five={contents[3].five}
          contentFive={contents[3].contentFive}
          six={contents[3].six}
          contentSix={contents[3].contentSix}
          seven={contents[3].seven}
          contentSeven={contents[3].contentSeven}
        />
      </div>
    </div>
  );
}
