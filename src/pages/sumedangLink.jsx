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

export default function Sumedang() {
  return (
    <div>
      <Navbar logo={Datakabupaten[19].logo} title={Datakabupaten[19].title} />

      <Header
        text={dataHeader[19].text}
        city={dataHeader[19].city}
        imgSrc={dataHeader[19].imgSrc}
      />

      <div className="flex justify-center mt-5 pt-5">
        <div className="flex text-center max-w-3xl">
          <h2
            className="mb-5 mb-3 border-l-4 border-r-4 border-b-4 rounded-full mt-5 p-5 mx-5 text-3xl md:text-4xl xl:text-5xl text-Black font-bold tracking-px-n leading-none"
            style={{ boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.3)" }}
          >
            Sumedang's Scenery
          </h2>
        </div>
      </div>
      <div className="p-2 m-5 rounded-box">
        <Carousel
          one={contents[19].one}
          contentOne={contents[19].contentOne}
          two={contents[19].two}
          contentTwo={contents[19].contentTwo}
          three={contents[19].three}
          contentThree={contents[19].contentThree}
          four={contents[19].four}
          contentFour={contents[19].contentFour}
          five={contents[19].five}
          contentFive={contents[19].contentFive}
          six={contents[19].six}
          contentSix={contents[19].contentSix}
          seven={contents[19].seven}
          contentSeven={contents[19].contentSeven}
        />
      </div>
    </div>
  );
}
