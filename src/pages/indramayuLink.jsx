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

export default function Indramayu() {
  return (
    <div>
      <Navbar logo={Datakabupaten[11].logo} title={Datakabupaten[11].title} />

      <Header
        text={dataHeader[11].text}
        city={dataHeader[11].city}
        imgSrc={dataHeader[11].imgSrc}
      />

      <div className="flex justify-center mt-5 pt-5">
        <div className="flex text-center max-w-3xl">
          <h2
            className="mb-5 mb-3 border-l-4 border-r-4 border-b-4 rounded-full mt-5 p-5 mx-5 text-3xl md:text-4xl xl:text-5xl text-Black font-bold tracking-px-n leading-none"
            style={{ boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.3)" }}
          >
            Indramayu's Scenery
          </h2>
        </div>
      </div>
      <div className="p-2 m-5 rounded-box">
        <Carousel
          one={contents[11].one}
          contentOne={contents[11].contentOne}
          two={contents[11].two}
          contentTwo={contents[11].contentTwo}
          three={contents[11].three}
          contentThree={contents[11].contentThree}
          four={contents[11].four}
          contentFour={contents[11].contentFour}
          five={contents[11].five}
          contentFive={contents[11].contentFive}
          six={contents[11].six}
          contentSix={contents[11].contentSix}
          seven={contents[11].seven}
          contentSeven={contents[11].contentSeven}
        />
      </div>
    </div>
  );
}
