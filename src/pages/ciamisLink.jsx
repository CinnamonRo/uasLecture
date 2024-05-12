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

export default function Ciamis() {
  return (
    <div>
      <Navbar logo={Datakabupaten[5].logo} title={Datakabupaten[5].title} />

      <Header
        text={dataHeader[5].text}
        city={dataHeader[5].city}
        imgSrc={dataHeader[5].imgSrc}
      />

      <div className="flex justify-center mt-5 pt-5">
        <div className="flex text-center max-w-3xl">
          <h2
            className="mb-5 mb-3 border-l-4 border-r-4 border-b-4 rounded-full mt-5 p-5 mx-5 text-3xl md:text-4xl xl:text-5xl text-Black font-bold tracking-px-n leading-none"
            style={{ boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.3)" }}
          >
            Ciamis' Scenery
          </h2>
        </div>
      </div>
      <div className="p-2 m-5 rounded-box">
        <Carousel
          one={contents[5].one}
          contentOne={contents[5].contentOne}
          two={contents[5].two}
          contentTwo={contents[5].contentTwo}
          three={contents[5].three}
          contentThree={contents[5].contentThree}
          four={contents[5].four}
          contentFour={contents[5].contentFour}
          five={contents[5].five}
          contentFive={contents[5].contentFive}
          six={contents[5].six}
          contentSix={contents[5].contentSix}
          seven={contents[5].seven}
          contentSeven={contents[5].contentSeven}
        />
      </div>
    </div>
  );
}
