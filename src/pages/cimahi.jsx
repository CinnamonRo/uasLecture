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

function Cimahi() {
  return (
    <div>
      <Navbar logo={Datakabupaten[7].logo} title={Datakabupaten[7].title} />

      <Header
        text={dataHeader[7].text}
        city={dataHeader[7].city}
        imgSrc={dataHeader[7].imgSrc}
      />

      <div className="flex justify-center mt-5 pt-5">
        <div className="flex text-center max-w-3xl">
          <h2
            className="mb-5 mb-3 border-l-4 border-r-4 border-b-4 rounded-full mt-5 p-5 mx-5 text-3xl md:text-4xl xl:text-5xl text-Black font-bold tracking-px-n leading-none"
            style={{ boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.3)" }}
          >
            Cimahi's Scenery
          </h2>
        </div>
      </div>
      <div className="p-2 m-5 rounded-box">
        <Carousel
          one={contents[7].one}
          contentOne={contents[7].contentOne}
          two={contents[7].two}
          contentTwo={contents[7].contentTwo}
          three={contents[7].three}
          contentThree={contents[7].contentThree}
          four={contents[7].four}
          contentFour={contents[7].contentFour}
          five={contents[7].five}
          contentFive={contents[7].contentFive}
          six={contents[7].six}
          contentSix={contents[7].contentSix}
          seven={contents[7].seven}
          contentSeven={contents[7].contentSeven}
        />
      </div>
    </div>
  );
}

export default Cimahi;
