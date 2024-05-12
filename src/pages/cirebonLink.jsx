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

export default function Cirebon() {
  return (
    <div>
      <Navbar logo={Datakabupaten[8].logo} title={Datakabupaten[8].title} />

      <Header
        text={dataHeader[8].text}
        city={dataHeader[8].city}
        imgSrc={dataHeader[8].imgSrc}
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
          one={contents[8].one}
          contentOne={contents[8].contentOne}
          two={contents[8].two}
          contentTwo={contents[8].contentTwo}
          three={contents[8].three}
          contentThree={contents[8].contentThree}
          four={contents[8].four}
          contentFour={contents[8].contentFour}
          five={contents[8].five}
          contentFive={contents[8].contentFive}
          six={contents[8].six}
          contentSix={contents[8].contentSix}
          seven={contents[8].seven}
          contentSeven={contents[8].contentSeven}
        />
      </div>
    </div>
  );
}
