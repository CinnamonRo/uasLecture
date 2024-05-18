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

export default function Purwakarta() {
  return (
    <div>
      <Navbar logo={Datakabupaten[16].logo} title={Datakabupaten[16].title} />

      <Header
        text={dataHeader[16].text}
        city={dataHeader[16].city}
        imgSrc={dataHeader[16].imgSrc}
      />
      <WeatherApi city="purwakarta" />
      <div className="flex justify-center mt-5 pt-5">
        <div className="flex text-center max-w-3xl">
          <h2
            className="mb-5 border-l-4 border-r-4 border-b-4 rounded-full mt-5 p-5 mx-5 text-3xl md:text-4xl xl:text-5xl text-Black font-bold tracking-px-n leading-none"
            style={{ boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.3)" }}
          >
            Purwakarta's Scenery
          </h2>
        </div>
      </div>
      <div className="p-2 m-5 rounded-box">
        <Carousel
          one={contents[16].one}
          contentOne={contents[16].contentOne}
          two={contents[16].two}
          contentTwo={contents[16].contentTwo}
          three={contents[16].three}
          contentThree={contents[16].contentThree}
          four={contents[16].four}
          contentFour={contents[16].contentFour}
          five={contents[16].five}
          contentFive={contents[16].contentFive}
          six={contents[16].six}
          contentSix={contents[16].contentSix}
          seven={contents[16].seven}
          contentSeven={contents[16].contentSeven}
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
          imgSrc={dataExplore[16][0].imgSrc}
          type={dataExplore[16][0].type}
          rating={dataExplore[16][0].rating}
          review={dataExplore[16][0].review}
          lokasi={dataExplore[16][0].lokasi}
          place={dataExplore[16][0].place}
          content={dataExplore[16][0].content}
          price={dataExplore[16][0].price}
        />
        <Explore
          imgSrc={dataExplore[16][1].imgSrc}
          type={dataExplore[16][1].type}
          rating={dataExplore[16][1].rating}
          review={dataExplore[16][1].review}
          lokasi={dataExplore[16][1].lokasi}
          place={dataExplore[16][1].place}
          content={dataExplore[16][1].content}
          price={dataExplore[16][1].price}
        />
        <Explore
          imgSrc={dataExplore[16][2].imgSrc}
          type={dataExplore[16][2].type}
          rating={dataExplore[16][2].rating}
          review={dataExplore[16][2].review}
          lokasi={dataExplore[16][2].lokasi}
          place={dataExplore[16][2].place}
          content={dataExplore[16][2].content}
          price={dataExplore[16][2].price}
        />
        <Explore
          imgSrc={dataExplore[16][3].imgSrc}
          type={dataExplore[16][3].type}
          rating={dataExplore[16][3].rating}
          review={dataExplore[16][3].review}
          lokasi={dataExplore[16][3].lokasi}
          place={dataExplore[16][3].place}
          content={dataExplore[16][3].content}
          price={dataExplore[16][3].price}
        />
      </div>

      <Footer2 />
    </div>
  );
}