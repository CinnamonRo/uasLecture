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

export default function Karawang() {
  return (
    <div>
      <Navbar logo={Datakabupaten[12].logo} title={Datakabupaten[12].title} />

      <Header
        text={dataHeader[12].text}
        city={dataHeader[12].city}
        imgSrc={dataHeader[12].imgSrc}
      />

      <div className="flex justify-center mt-5 pt-5">
        <div className="flex text-center max-w-3xl">
          <h2
            className="mb-5 mb-3 border-l-4 border-r-4 border-b-4 rounded-full mt-5 p-5 mx-5 text-3xl md:text-4xl xl:text-5xl text-Black font-bold tracking-px-n leading-none"
            style={{ boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.3)" }}
          >
            Karawang's Scenery
          </h2>
        </div>
      </div>
      <div className="p-2 m-5 rounded-box">
        <Carousel
          one={contents[12].one}
          contentOne={contents[12].contentOne}
          two={contents[12].two}
          contentTwo={contents[12].contentTwo}
          three={contents[12].three}
          contentThree={contents[12].contentThree}
          four={contents[12].four}
          contentFour={contents[12].contentFour}
          five={contents[12].five}
          contentFive={contents[12].contentFive}
          six={contents[12].six}
          contentSix={contents[12].contentSix}
          seven={contents[12].seven}
          contentSeven={contents[12].contentSeven}
        />
      </div>
    </div>
  );
}
