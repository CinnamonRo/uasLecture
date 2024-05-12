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

export default function Sukabumi() {
  return (
    <div>
      <Navbar logo={Datakabupaten[18].logo} title={Datakabupaten[18].title} />

      <Header
        text={dataHeader[18].text}
        city={dataHeader[18].city}
        imgSrc={dataHeader[18].imgSrc}
      />

      <div className="flex justify-center mt-5 pt-5">
        <div className="flex text-center max-w-3xl">
          <h2
            className="mb-5 mb-3 border-l-4 border-r-4 border-b-4 rounded-full mt-5 p-5 mx-5 text-3xl md:text-4xl xl:text-5xl text-Black font-bold tracking-px-n leading-none"
            style={{ boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.3)" }}
          >
            Sukabumi's Scenery
          </h2>
        </div>
      </div>
      <div className="p-2 m-5 rounded-box">
        <Carousel
          one={contents[18].one}
          contentOne={contents[18].contentOne}
          two={contents[18].two}
          contentTwo={contents[18].contentTwo}
          three={contents[18].three}
          contentThree={contents[18].contentThree}
          four={contents[18].four}
          contentFour={contents[18].contentFour}
          five={contents[18].five}
          contentFive={contents[18].contentFive}
          six={contents[18].six}
          contentSix={contents[18].contentSix}
          seven={contents[18].seven}
          contentSeven={contents[18].contentSeven}
        />
      </div>
    </div>
  );
}
