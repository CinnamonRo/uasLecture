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

export default function Kuningan() {
  return (
    <div>
      <Navbar logo={Datakabupaten[13].logo} title={Datakabupaten[13].title} />

      <Header
        text={dataHeader[13].text}
        city={dataHeader[13].city}
        imgSrc={dataHeader[13].imgSrc}
      />
      <WeatherApi city="kuningan" />
      <div className="flex justify-center mt-5 pt-5">
        <div className="flex text-center max-w-3xl">
          <h2
            className="mb-5  border-l-4 border-r-4 border-b-4 rounded-full mt-5 p-5 mx-5 text-3xl md:text-4xl xl:text-5xl text-Black font-bold tracking-px-n leading-none"
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

      <div
        className="rounded-lg px-4 m-5 p-5  bg-gradient-to-r from-indigo-400 to-cyan-400"
        style={{ boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.5)" }}
      >
        <div className="max-w-3xl mx-auto mt-5">
          <h2 className="mt-5 text-4xl md:text-5xl xl:text-6xl text-white font-bold tracking-px-n leading-none">
            Recommended Place To Explore
          </h2>
        </div>
        <Explore
          imgSrc={dataExplore[13][0].imgSrc}
          type={dataExplore[13][0].type}
          rating={dataExplore[13][0].rating}
          review={dataExplore[13][0].review}
          lokasi={dataExplore[13][0].lokasi}
          place={dataExplore[13][0].place}
          content={dataExplore[13][0].content}
          price={dataExplore[13][0].price}
        />
        <Explore
          imgSrc={dataExplore[13][1].imgSrc}
          type={dataExplore[13][1].type}
          rating={dataExplore[13][1].rating}
          review={dataExplore[13][1].review}
          lokasi={dataExplore[13][1].lokasi}
          place={dataExplore[13][1].place}
          content={dataExplore[13][1].content}
          price={dataExplore[13][1].price}
        />
        <Explore
          imgSrc={dataExplore[13][2].imgSrc}
          type={dataExplore[13][2].type}
          rating={dataExplore[13][2].rating}
          review={dataExplore[13][2].review}
          lokasi={dataExplore[13][2].lokasi}
          place={dataExplore[13][2].place}
          content={dataExplore[13][2].content}
          price={dataExplore[13][2].price}
        />
        <Explore
          imgSrc={dataExplore[13][3].imgSrc}
          type={dataExplore[13][3].type}
          rating={dataExplore[13][3].rating}
          review={dataExplore[13][3].review}
          lokasi={dataExplore[13][3].lokasi}
          place={dataExplore[13][3].place}
          content={dataExplore[13][3].content}
          price={dataExplore[13][3].price}
        />
      </div>

      <Footer2 />
    </div>
  );
}
