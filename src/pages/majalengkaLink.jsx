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

export default function Majalengka() {
  return (
    <div>
      <Navbar logo={Datakabupaten[14].logo} title={Datakabupaten[14].title} />

      <Header
        text={dataHeader[14].text}
        city={dataHeader[14].city}
        imgSrc={dataHeader[14].imgSrc}
      />

      <div className="flex justify-center mt-5 pt-5">
        <div className="flex text-center max-w-3xl">
          <h2
            className="mb-5 mb-3 border-l-4 border-r-4 border-b-4 rounded-full mt-5 p-5 mx-5 text-3xl md:text-4xl xl:text-5xl text-Black font-bold tracking-px-n leading-none"
            style={{ boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.3)" }}
          >
            Majalengka's Scenery
          </h2>
        </div>
      </div>
      <div className="p-2 m-5 rounded-box">
        <Carousel
          one={contents[14].one}
          contentOne={contents[14].contentOne}
          two={contents[14].two}
          contentTwo={contents[14].contentTwo}
          three={contents[14].three}
          contentThree={contents[14].contentThree}
          four={contents[14].four}
          contentFour={contents[14].contentFour}
          five={contents[14].five}
          contentFive={contents[14].contentFive}
          six={contents[14].six}
          contentSix={contents[14].contentSix}
          seven={contents[14].seven}
          contentSeven={contents[14].contentSeven}
        />
      </div>
    </div>
  );
}
