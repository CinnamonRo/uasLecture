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

export default function Garut() {
  return (
    <div>
      <Navbar logo={Datakabupaten[10].logo} title={Datakabupaten[10].title} />

      <Header
        text={dataHeader[10].text}
        city={dataHeader[10].city}
        imgSrc={dataHeader[10].imgSrc}
      />
      <WeatherApi city="garut" />
      <div className="flex justify-center mt-5 pt-5">
        <div className="flex text-center max-w-3xl">
          <h2
            className="mb-5  border-l-4 border-r-4 border-b-4 rounded-full mt-5 p-5 mx-5 text-3xl md:text-4xl xl:text-5xl text-Black font-bold tracking-px-n leading-none"
            style={{ boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.3)" }}
          >
            Garut's Scenery
          </h2>
        </div>
      </div>
      <div className="p-2 m-5 rounded-box">
        <Carousel
          one={contents[10].one}
          contentOne={contents[10].contentOne}
          two={contents[10].two}
          contentTwo={contents[10].contentTwo}
          three={contents[10].three}
          contentThree={contents[10].contentThree}
          four={contents[10].four}
          contentFour={contents[10].contentFour}
          five={contents[10].five}
          contentFive={contents[10].contentFive}
          six={contents[10].six}
          contentSix={contents[10].contentSix}
          seven={contents[10].seven}
          contentSeven={contents[10].contentSeven}
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
          imgSrc={dataExplore[10][0].imgSrc}
          type={dataExplore[10][0].type}
          rating={dataExplore[10][0].rating}
          review={dataExplore[10][0].review}
          lokasi={dataExplore[10][0].lokasi}
          place={dataExplore[10][0].place}
          content={dataExplore[10][0].content}
          price={dataExplore[10][0].price}
        />
        <Explore
          imgSrc={dataExplore[10][1].imgSrc}
          type={dataExplore[10][1].type}
          rating={dataExplore[10][1].rating}
          review={dataExplore[10][1].review}
          lokasi={dataExplore[10][1].lokasi}
          place={dataExplore[10][1].place}
          content={dataExplore[10][1].content}
          price={dataExplore[10][1].price}
        />
        <Explore
          imgSrc={dataExplore[10][2].imgSrc}
          type={dataExplore[10][2].type}
          rating={dataExplore[10][2].rating}
          review={dataExplore[10][2].review}
          lokasi={dataExplore[10][2].lokasi}
          place={dataExplore[10][2].place}
          content={dataExplore[10][2].content}
          price={dataExplore[10][2].price}
        />
        <Explore
          imgSrc={dataExplore[10][3].imgSrc}
          type={dataExplore[10][3].type}
          rating={dataExplore[10][3].rating}
          review={dataExplore[10][3].review}
          lokasi={dataExplore[10][3].lokasi}
          place={dataExplore[10][3].place}
          content={dataExplore[10][3].content}
          price={dataExplore[10][3].price}
        />
      </div>

      <Footer2 />
    </div>
  );
}
