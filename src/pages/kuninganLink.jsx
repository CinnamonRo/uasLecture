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

export default function Kuningan() {
  return (
    <div>
      <Navbar logo={Datakabupaten[13].logo} title={Datakabupaten[13].title} />

      <Header
        text={dataHeader[13].text}
        city={dataHeader[13].city}
        imgSrc={dataHeader[13].imgSrc}
      />

      <div className="flex justify-center mt-5 pt-5">
        <div className="flex text-center max-w-3xl">
          <h2
            className="mb-5 mb-3 border-l-4 border-r-4 border-b-4 rounded-full mt-5 p-5 mx-5 text-3xl md:text-4xl xl:text-5xl text-Black font-bold tracking-px-n leading-none"
            style={{ boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.3)" }}
          >
            Kuningan's Scenery
          </h2>
        </div>
      </div>
      <div className="p-2 m-5 rounded-box">
        <Carousel
          one={contents[13].one}
          contentOne={contents[13].contentOne}
          two={contents[13].two}
          contentTwo={contents[13].contentTwo}
          three={contents[13].three}
          contentThree={contents[13].contentThree}
          four={contents[13].four}
          contentFour={contents[13].contentFour}
          five={contents[13].five}
          contentFive={contents[13].contentFive}
          six={contents[13].six}
          contentSix={contents[13].contentSix}
          seven={contents[13].seven}
          contentSeven={contents[13].contentSeven}
        />
      </div>
    </div>
  );
}
