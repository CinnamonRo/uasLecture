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

export default function Sukabumi() {
  return (
    <div>
      <Navbar logo={Datakabupaten[18].logo} title={Datakabupaten[18].title} />

      <Header
        text={dataHeader[18].text}
        city={dataHeader[18].city}
        imgSrc={dataHeader[18].imgSrc}
      />
      <WeatherApi city="sukabumi" />
      <div className="flex justify-center mt-5 pt-5">
        <div className="flex text-center max-w-3xl">
          <h2
            className="mb-5 border-l-4 border-r-4 border-b-4 rounded-full mt-5 p-5 mx-5 text-3xl md:text-4xl xl:text-5xl text-Black font-bold tracking-px-n leading-none"
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
          imgSrc={dataExplore[18][0].imgSrc}
          type={dataExplore[18][0].type}
          rating={dataExplore[18][0].rating}
          review={dataExplore[18][0].review}
          lokasi={dataExplore[18][0].lokasi}
          place={dataExplore[18][0].place}
          content={dataExplore[18][0].content}
          price={dataExplore[18][0].price}
        />
        <Explore
          imgSrc={dataExplore[18][1].imgSrc}
          type={dataExplore[18][1].type}
          rating={dataExplore[18][1].rating}
          review={dataExplore[18][1].review}
          lokasi={dataExplore[18][1].lokasi}
          place={dataExplore[18][1].place}
          content={dataExplore[18][1].content}
          price={dataExplore[18][1].price}
        />
        <Explore
          imgSrc={dataExplore[18][2].imgSrc}
          type={dataExplore[18][2].type}
          rating={dataExplore[18][2].rating}
          review={dataExplore[18][2].review}
          lokasi={dataExplore[18][2].lokasi}
          place={dataExplore[18][2].place}
          content={dataExplore[18][2].content}
          price={dataExplore[18][2].price}
        />
        <Explore
          imgSrc={dataExplore[18][3].imgSrc}
          type={dataExplore[18][3].type}
          rating={dataExplore[18][3].rating}
          review={dataExplore[18][3].review}
          lokasi={dataExplore[18][3].lokasi}
          place={dataExplore[18][3].place}
          content={dataExplore[18][3].content}
          price={dataExplore[18][3].price}
        />
      </div>

      <Footer2 />
    </div>
  );
}
