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

function Banjar() {
  return (
    <div>
      <Navbar logo={Datakabupaten[2].logo} title={Datakabupaten[2].title} />

      <Header
        text={dataHeader[2].text}
        city={dataHeader[2].city}
        imgSrc={dataHeader[2].imgSrc}
      />

      <div className="flex justify-center mt-5 pt-5">
        <div className="flex text-center max-w-3xl">
          <h2
            className="mb-5 mb-3 border-l-4 border-r-4 border-b-4 rounded-full mt-5 p-5 mx-5 text-3xl md:text-4xl xl:text-5xl text-Black font-bold tracking-px-n leading-none"
            style={{ boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.3)" }}
          >
            Banjar's Scenery
          </h2>
        </div>
      </div>
      <div className="p-2 m-5 rounded-box">
        <Carousel
          one={contents[2].one}
          contentOne={contents[2].contentOne}
          two={contents[2].two}
          contentTwo={contents[2].contentTwo}
          three={contents[2].three}
          contentThree={contents[2].contentThree}
          four={contents[2].four}
          contentFour={contents[2].contentFour}
          five={contents[2].five}
          contentFive={contents[2].contentFive}
          six={contents[2].six}
          contentSix={contents[2].contentSix}
          seven={contents[2].seven}
          contentSeven={contents[2].contentSeven}
        />
      </div>
    </div>
  );
}

export default Banjar;
