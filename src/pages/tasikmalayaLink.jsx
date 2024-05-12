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

export default function Tasikmalaya() {
  return (
    <div>
      <Navbar logo={Datakabupaten[20].logo} title={Datakabupaten[20].title} />

      <Header
        text={dataHeader[20].text}
        city={dataHeader[20].city}
        imgSrc={dataHeader[20].imgSrc}
      />

      <div className="flex justify-center mt-5 pt-5">
        <div className="flex text-center max-w-3xl">
          <h2
            className="mb-5 mb-3 border-l-4 border-r-4 border-b-4 rounded-full mt-5 p-5 mx-5 text-3xl md:text-4xl xl:text-5xl text-Black font-bold tracking-px-n leading-none"
            style={{ boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.3)" }}
          >
            Tasikmalaya's Scenery
          </h2>
        </div>
      </div>
      <div className="p-2 m-5 rounded-box">
        <Carousel
          one={contents[20].one}
          contentOne={contents[20].contentOne}
          two={contents[20].two}
          contentTwo={contents[20].contentTwo}
          three={contents[20].three}
          contentThree={contents[20].contentThree}
          four={contents[20].four}
          contentFour={contents[20].contentFour}
          five={contents[20].five}
          contentFive={contents[20].contentFive}
          six={contents[20].six}
          contentSix={contents[20].contentSix}
          seven={contents[20].seven}
          contentSeven={contents[20].contentSeven}
        />
      </div>
    </div>
  );
}
