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

function depokLink() {
  return (
    <div>
      <Navbar logo={Datakabupaten[9].logo} title={Datakabupaten[9].title} />

      <Header
        text={dataHeader[9].text}
        city={dataHeader[9].city}
        imgSrc={dataHeader[9].imgSrc}
      />

      <div className="flex justify-center mt-5 pt-5">
        <div className="flex text-center max-w-3xl">
          <h2
            className="mb-5 mb-3 border-l-4 border-r-4 border-b-4 rounded-full mt-5 p-5 mx-5 text-3xl md:text-4xl xl:text-5xl text-Black font-bold tracking-px-n leading-none"
            style={{ boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.3)" }}
          >
            Depok's Scenery
          </h2>
        </div>
      </div>
      <div className="p-2 m-5 rounded-box">
        <Carousel
          one={contents[9].one}
          contentOne={contents[9].contentOne}
          two={contents[9].two}
          contentTwo={contents[9].contentTwo}
          three={contents[9].three}
          contentThree={contents[9].contentThree}
          four={contents[9].four}
          contentFour={contents[9].contentFour}
          five={contents[9].five}
          contentFive={contents[9].contentFive}
          six={contents[9].six}
          contentSix={contents[9].contentSix}
          seven={contents[9].seven}
          contentSeven={contents[9].contentSeven}
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
          imgSrc={dataExplore[9][0].imgSrc}
          type={dataExplore[9][0].type}
          rating={dataExplore[9][0].rating}
          review={dataExplore[9][0].review}
          lokasi={dataExplore[9][0].lokasi}
          place={dataExplore[9][0].place}
          content={dataExplore[9][0].content}
          price={dataExplore[9][0].price}
        />
        <Explore
          imgSrc={dataExplore[9][1].imgSrc}
          type={dataExplore[9][1].type}
          rating={dataExplore[9][1].rating}
          review={dataExplore[9][1].review}
          lokasi={dataExplore[9][1].lokasi}
          place={dataExplore[9][1].place}
          content={dataExplore[9][1].content}
          price={dataExplore[9][1].price}
        />
        <Explore
          imgSrc={dataExplore[9][2].imgSrc}
          type={dataExplore[9][2].type}
          rating={dataExplore[9][2].rating}
          review={dataExplore[9][2].review}
          lokasi={dataExplore[9][2].lokasi}
          place={dataExplore[9][2].place}
          content={dataExplore[9][2].content}
          price={dataExplore[9][2].price}
        />
        <Explore
          imgSrc={dataExplore[9][3].imgSrc}
          type={dataExplore[9][3].type}
          rating={dataExplore[9][3].rating}
          review={dataExplore[9][3].review}
          lokasi={dataExplore[9][3].lokasi}
          place={dataExplore[9][3].place}
          content={dataExplore[9][3].content}
          price={dataExplore[9][3].price}
        />
      </div>

      <Footer2 />
    </div>
  );
}

export default depokLink;
