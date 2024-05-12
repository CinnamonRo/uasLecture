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

export default function Cianjur() {
  return (
    <div>
      <Navbar logo={Datakabupaten[6].logo} title={Datakabupaten[6].title} />

      <Header
        text={dataHeader[6].text}
        city={dataHeader[6].city}
        imgSrc={dataHeader[6].imgSrc}
      />

      <div className="flex justify-center mt-5 pt-5">
        <div className="flex text-center max-w-3xl">
          <h2
            className="mb-5 mb-3 border-l-4 border-r-4 border-b-4 rounded-full mt-5 p-5 mx-5 text-3xl md:text-4xl xl:text-5xl text-Black font-bold tracking-px-n leading-none"
            style={{ boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.3)" }}
          >
            Cianjur's Scenery
          </h2>
        </div>
      </div>
      <div className="p-2 m-5 rounded-box">
        <Carousel
          one={contents[6].one}
          contentOne={contents[6].contentOne}
          two={contents[6].two}
          contentTwo={contents[6].contentTwo}
          three={contents[6].three}
          contentThree={contents[6].contentThree}
          four={contents[6].four}
          contentFour={contents[6].contentFour}
          five={contents[6].five}
          contentFive={contents[6].contentFive}
          six={contents[6].six}
          contentSix={contents[6].contentSix}
          seven={contents[6].seven}
          contentSeven={contents[6].contentSeven}
        />
      </div>

      <div
        className="rounded-lg px-4 m-5 p-5 bg-gradient-to-r bg-gradient-to-r from-indigo-400 to-cyan-400"
        style={{ boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.5)" }}
      >
        <div className="max-w-3xl mx-auto mt-5">
          <h2 className="mt-5 text-4xl md:text-5xl xl:text-6xl text-white font-bold tracking-px-n leading-none">
            Recommended Place To Explore
          </h2>
        </div>
        <Explore
          imgSrc={dataExplore[6][0].imgSrc}
          type={dataExplore[6][0].type}
          rating={dataExplore[6][0].rating}
          review={dataExplore[6][0].review}
          lokasi={dataExplore[6][0].lokasi}
          place={dataExplore[6][0].place}
          content={dataExplore[6][0].content}
          price={dataExplore[6][0].price}
        />
        <Explore
          imgSrc={dataExplore[6][1].imgSrc}
          type={dataExplore[6][1].type}
          rating={dataExplore[6][1].rating}
          review={dataExplore[6][1].review}
          lokasi={dataExplore[6][1].lokasi}
          place={dataExplore[6][1].place}
          content={dataExplore[6][1].content}
          price={dataExplore[6][1].price}
        />
        <Explore
          imgSrc={dataExplore[6][2].imgSrc}
          type={dataExplore[6][2].type}
          rating={dataExplore[6][2].rating}
          review={dataExplore[6][2].review}
          lokasi={dataExplore[6][2].lokasi}
          place={dataExplore[6][2].place}
          content={dataExplore[6][2].content}
          price={dataExplore[6][2].price}
        />
        <Explore
          imgSrc={dataExplore[6][3].imgSrc}
          type={dataExplore[6][3].type}
          rating={dataExplore[6][3].rating}
          review={dataExplore[6][3].review}
          lokasi={dataExplore[6][3].lokasi}
          place={dataExplore[6][3].place}
          content={dataExplore[6][3].content}
          price={dataExplore[6][3].price}
        />
      </div>

      <Footer2 />
    </div>
  );
}
