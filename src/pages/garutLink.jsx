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

export default function Garut() {
  return (
    <div>
      <Navbar logo={Datakabupaten[10].logo} title={Datakabupaten[10].title} />

      <Header
        text={dataHeader[10].text}
        city={dataHeader[10].city}
        imgSrc={dataHeader[10].imgSrc}
      />

      <div className="flex justify-center mt-5 pt-5">
        <div className="flex text-center max-w-3xl">
          <h2
            className="mb-5 mb-3 border-l-4 border-r-4 border-b-4 rounded-full mt-5 p-5 mx-5 text-3xl md:text-4xl xl:text-5xl text-Black font-bold tracking-px-n leading-none"
            style={{ boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.3)" }}
          >
            Garut's Scenery
          </h2>
        </div>
      </div>
      <div className="p-2 m-5 rounded-box">
        <Carousel
          one={contents[10].one}
          contentOne={contents[10].contentOne}
          two={contents[10].two}
          contentTwo={contents[10].contentTwo}
          three={contents[10].three}
          contentThree={contents[10].contentThree}
          four={contents[10].four}
          contentFour={contents[10].contentFour}
          five={contents[10].five}
          contentFive={contents[10].contentFive}
          six={contents[10].six}
          contentSix={contents[10].contentSix}
          seven={contents[10].seven}
          contentSeven={contents[10].contentSeven}
        />
      </div>
    </div>
  );
}
