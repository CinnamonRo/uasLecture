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

export default function BandungBarat() {
  return (
    <div>
      <Navbar logo={Datakabupaten[0].logo} title={Datakabupaten[0].title} />

      <Header
        text={dataHeader[0].text}
        city={dataHeader[0].city}
        imgSrc={dataHeader[0].imgSrc}
      />

      <div className="flex justify-center mt-5 pt-5">
        <div className="flex text-center max-w-3xl">
          <h2 className="mb-5 mb-3  border-l-4 border-r-4 border-b-4 rounded-full mt-5 p-5 mx-5 text-3xl md:text-4xl xl:text-5xl text-Black font-bold tracking-px-n leading-none">
            Bandung's Scenery
          </h2>
        </div>
      </div>
      <div className="p-2 m-5 rounded-box">
        <Carousel
          one={contents[0].one}
          two={contents[0].two}
          three={contents[0].three}
          four={contents[0].four}
          five={contents[0].five}
          six={contents[0].six}
          seven={contents[0].seven}
        />
      </div>

      <div className="rounded-lg px-4 m-5 p-5 bg-gradient-to-r bg-gradient-to-r from-indigo-400 to-cyan-400">
        <div className="max-w-3xl mx-auto mt-5">
          <h2 className="mt-5 text-4xl md:text-5xl xl:text-6xl text-white font-bold tracking-px-n leading-none">
            Recommended Place To Explore
          </h2>
        </div>
        <Explore
          imgSrc={dataExplore[0][0].imgSrc}
          type={dataExplore[0][0].type}
          rating={dataExplore[0][0].rating}
          review={dataExplore[0][0].review}
          lokasi={dataExplore[0][0].lokasi}
          place={dataExplore[0][0].place}
          content={dataExplore[0][0].content}
          price={dataExplore[0][0].price}
        />
        <Explore
          imgSrc={dataExplore[0][1].imgSrc}
          type={dataExplore[0][1].type}
          rating={dataExplore[0][1].rating}
          review={dataExplore[0][1].review}
          lokasi={dataExplore[0][1].lokasi}
          place={dataExplore[0][1].place}
          content={dataExplore[0][1].content}
          price={dataExplore[0][1].price}
        />
        <Explore
          imgSrc={dataExplore[0][2].imgSrc}
          type={dataExplore[0][2].type}
          rating={dataExplore[0][2].rating}
          review={dataExplore[0][2].review}
          lokasi={dataExplore[0][2].lokasi}
          place={dataExplore[0][2].place}
          content={dataExplore[0][2].content}
          price={dataExplore[0][2].price}
        />
        <Explore
          imgSrc={dataExplore[0][3].imgSrc}
          type={dataExplore[0][3].type}
          rating={dataExplore[0][3].rating}
          review={dataExplore[0][3].review}
          lokasi={dataExplore[0][3].lokasi}
          place={dataExplore[0][3].place}
          content={dataExplore[0][3].content}
          price={dataExplore[0][3].price}
        />
      </div>

      <Footer2 />
    </div>
  );
}
