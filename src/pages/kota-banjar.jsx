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

function Banjar() {
  return (
    <div>
      <Navbar logo={Datakabupaten[2].logo} title={Datakabupaten[2].title} />

      <Header
        text={dataHeader[2].text}
        city={dataHeader[2].city}
        imgSrc={dataHeader[2].imgSrc}
      />
      <WeatherApi city="Banjar" />
      <div className="flex justify-center mt-5 pt-5">
        <div className="flex text-center max-w-3xl">
          <h2
            className="mb-5  border-l-4 border-r-4 border-b-4 rounded-full mt-5 p-5 mx-5 text-3xl md:text-4xl xl:text-5xl text-Black font-bold tracking-px-n leading-none"
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
          imgSrc={dataExplore[2][0].imgSrc}
          type={dataExplore[2][0].type}
          rating={dataExplore[2][0].rating}
          review={dataExplore[2][0].review}
          lokasi={dataExplore[2][0].lokasi}
          place={dataExplore[2][0].place}
          content={dataExplore[2][0].content}
          price={dataExplore[2][0].price}
        />
        <Explore
          imgSrc={dataExplore[2][1].imgSrc}
          type={dataExplore[2][1].type}
          rating={dataExplore[2][1].rating}
          review={dataExplore[2][1].review}
          lokasi={dataExplore[2][1].lokasi}
          place={dataExplore[2][1].place}
          content={dataExplore[2][1].content}
          price={dataExplore[2][1].price}
        />
        <Explore
          imgSrc={dataExplore[2][2].imgSrc}
          type={dataExplore[2][2].type}
          rating={dataExplore[2][2].rating}
          review={dataExplore[2][2].review}
          lokasi={dataExplore[2][2].lokasi}
          place={dataExplore[2][2].place}
          content={dataExplore[2][2].content}
          price={dataExplore[2][2].price}
        />
        <Explore
          imgSrc={dataExplore[2][3].imgSrc}
          type={dataExplore[2][3].type}
          rating={dataExplore[2][3].rating}
          review={dataExplore[2][3].review}
          lokasi={dataExplore[2][3].lokasi}
          place={dataExplore[2][3].place}
          content={dataExplore[2][3].content}
          price={dataExplore[2][3].price}
        />
      </div>

      <Footer2 />
    </div>
  );
}

export default Banjar;
