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

export default function Bogor() {
  return (
    <div>
      <Navbar logo={Datakabupaten[4].logo} title={Datakabupaten[4].title} />

      <Header
        text={dataHeader[4].text}
        city={dataHeader[4].city}
        imgSrc={dataHeader[4].imgSrc}
      />

      <div className="flex justify-center mt-5 pt-5">
        <div className="flex text-center max-w-3xl">
          <h2
            className="mb-5 mb-3 border-l-4 border-r-4 border-b-4 rounded-full mt-5 p-5 mx-5 text-3xl md:text-4xl xl:text-5xl text-Black font-bold tracking-px-n leading-none"
            style={{ boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.3)" }}
          >
            Bogor's Scenery
          </h2>
        </div>
      </div>
      <div className="p-2 m-5 rounded-box">
        <Carousel
          one={contents[4].one}
          contentOne={contents[4].contentOne}
          two={contents[4].two}
          contentTwo={contents[4].contentTwo}
          three={contents[4].three}
          contentThree={contents[4].contentThree}
          four={contents[4].four}
          contentFour={contents[4].contentFour}
          five={contents[4].five}
          contentFive={contents[4].contentFive}
          six={contents[4].six}
          contentSix={contents[4].contentSix}
          seven={contents[4].seven}
          contentSeven={contents[4].contentSeven}
        />
      </div>
    </div>
  );
}
