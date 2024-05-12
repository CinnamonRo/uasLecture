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

export default function Karawang() {
  return (
    <div>
      <Navbar logo={Datakabupaten[12].logo} title={Datakabupaten[12].title} />

      <Header
        text={dataHeader[12].text}
        city={dataHeader[12].city}
        imgSrc={dataHeader[12].imgSrc}
      />

      <div className="flex justify-center mt-5 pt-5">
        <div className="flex text-center max-w-3xl">
          <h2
            className="mb-5 mb-3 border-l-4 border-r-4 border-b-4 rounded-full mt-5 p-5 mx-5 text-3xl md:text-4xl xl:text-5xl text-Black font-bold tracking-px-n leading-none"
            style={{ boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.3)" }}
          >
            Karawang's Scenery
          </h2>
        </div>
      </div>
      <div className="p-2 m-5 rounded-box">
        <Carousel
          one={contents[12].one}
          contentOne={contents[12].contentOne}
          two={contents[12].two}
          contentTwo={contents[12].contentTwo}
          three={contents[12].three}
          contentThree={contents[12].contentThree}
          four={contents[12].four}
          contentFour={contents[12].contentFour}
          five={contents[12].five}
          contentFive={contents[12].contentFive}
          six={contents[12].six}
          contentSix={contents[12].contentSix}
          seven={contents[12].seven}
          contentSeven={contents[12].contentSeven}
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
          imgSrc={dataExplore[12][0].imgSrc}
          type={dataExplore[12][0].type}
          rating={dataExplore[12][0].rating}
          review={dataExplore[12][0].review}
          lokasi={dataExplore[12][0].lokasi}
          place={dataExplore[12][0].place}
          content={dataExplore[12][0].content}
          price={dataExplore[12][0].price}
        />
        <Explore
          imgSrc={dataExplore[12][1].imgSrc}
          type={dataExplore[12][1].type}
          rating={dataExplore[12][1].rating}
          review={dataExplore[12][1].review}
          lokasi={dataExplore[12][1].lokasi}
          place={dataExplore[12][1].place}
          content={dataExplore[12][1].content}
          price={dataExplore[12][1].price}
        />
        <Explore
          imgSrc={dataExplore[12][2].imgSrc}
          type={dataExplore[12][2].type}
          rating={dataExplore[12][2].rating}
          review={dataExplore[12][2].review}
          lokasi={dataExplore[12][2].lokasi}
          place={dataExplore[12][2].place}
          content={dataExplore[12][2].content}
          price={dataExplore[12][2].price}
        />
        <Explore
          imgSrc={dataExplore[12][3].imgSrc}
          type={dataExplore[12][3].type}
          rating={dataExplore[12][3].rating}
          review={dataExplore[12][3].review}
          lokasi={dataExplore[12][3].lokasi}
          place={dataExplore[12][3].place}
          content={dataExplore[12][3].content}
          price={dataExplore[12][3].price}
        />
      </div>

      <Footer2 />
    </div>
  );
}
