// KOMPONEN
import Navbar from "../component/navbar";
import Header from "../component/header";
import Explore from "../component/explore";
import Carousel from "../component/carousel";
import Footer2 from "../component/footer2";
import WeatherApi from "../component/weatherApi";
// DATA
import Datakabupaten from "../component/dataKabupaten";
import dataHeader from "../component/dataHeader";
import dataExplore from "../Js/dataExplore";
import contents from "../Js/CarouselContent";

export default function Bekasi() {
  return (
    <div>
      <Navbar logo={Datakabupaten[3].logo} title={Datakabupaten[3].title} />

      <Header
        text={dataHeader[3].text}
        city={dataHeader[3].city}
        imgSrc={dataHeader[3].imgSrc}
      />
      <WeatherApi city="Bekasi" />
      <div className="flex justify-center mt-5 pt-5">
        <div className="flex text-center max-w-3xl">
          <h2
            className="mb-5 border-l-4 border-r-4 border-b-4 rounded-full mt-5 p-5 mx-5 text-3xl md:text-4xl xl:text-5xl text-Black font-bold tracking-px-n leading-none"
            style={{ boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.3)" }}
          >
            Bekasi's Scenery
          </h2>
        </div>
      </div>
      <div className="p-2 m-5 rounded-box">
        <Carousel
          one={contents[3].one}
          contentOne={contents[3].contentOne}
          two={contents[3].two}
          contentTwo={contents[3].contentTwo}
          three={contents[3].three}
          contentThree={contents[3].contentThree}
          four={contents[3].four}
          contentFour={contents[3].contentFour}
          five={contents[3].five}
          contentFive={contents[3].contentFive}
          six={contents[3].six}
          contentSix={contents[3].contentSix}
          seven={contents[3].seven}
          contentSeven={contents[3].contentSeven}
        />
      </div>

      <div
        className="rounded-lg px-4 m-5 p-5 bg-gradient-to-r from-indigo-400 to-cyan-400"
        style={{ boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.5)" }}
      >
        <div className="max-w-3xl mx-auto mt-5">
          <h2 className="mt-5 text-4xl md:text-5xl xl:text-6xl text-white font-bold tracking-px-n leading-none">
            Recommended Place To Explore
          </h2>
        </div>
        <Explore
          imgSrc={dataExplore[3][0].imgSrc}
          type={dataExplore[3][0].type}
          rating={dataExplore[3][0].rating}
          review={dataExplore[3][0].review}
          lokasi={dataExplore[3][0].lokasi}
          place={dataExplore[3][0].place}
          content={dataExplore[3][0].content}
          price={dataExplore[3][0].price}
        />
        <Explore
          imgSrc={dataExplore[3][1].imgSrc}
          type={dataExplore[3][1].type}
          rating={dataExplore[3][1].rating}
          review={dataExplore[3][1].review}
          lokasi={dataExplore[3][1].lokasi}
          place={dataExplore[3][1].place}
          content={dataExplore[3][1].content}
          price={dataExplore[3][1].price}
        />
        <Explore
          imgSrc={dataExplore[3][2].imgSrc}
          type={dataExplore[3][2].type}
          rating={dataExplore[3][2].rating}
          review={dataExplore[3][2].review}
          lokasi={dataExplore[3][2].lokasi}
          place={dataExplore[3][2].place}
          content={dataExplore[3][2].content}
          price={dataExplore[3][2].price}
        />
        <Explore
          imgSrc={dataExplore[3][3].imgSrc}
          type={dataExplore[3][3].type}
          rating={dataExplore[3][3].rating}
          review={dataExplore[3][3].review}
          lokasi={dataExplore[3][3].lokasi}
          place={dataExplore[3][3].place}
          content={dataExplore[3][3].content}
          price={dataExplore[3][3].price}
        />
      </div>

      <Footer2 />
    </div>
  );
}
