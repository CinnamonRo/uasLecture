import Navbar from "../component/navbar";
import Header from "../component/header";
import Explore from "../component/explore";
import Datakabupaten from "../component/dataKabupaten";
import Carousel from "../component/carousel";
import Footer from "../component/footer";

export default function BandungBarat() {
  return (
    <div>
      <Navbar logo={Datakabupaten[0].logo} title={Datakabupaten[0].title} />
      <Header />

      <div className="rounded-lg px-4 m-5 p-5 bg-gradient-to-r bg-gradient-to-r from-indigo-400 to-cyan-400">
        <div className="max-w-3xl mx-auto mt-5">
          <h2 className="mt-5 text-4xl md:text-5xl xl:text-6xl text-white font-bold tracking-px-n leading-none">
            Recommended Place To Explore
          </h2>
        </div>
        <Explore />
        <Explore />
        <Explore />
        <Explore />
      </div>

      <div className="mt-5 bg-gradient-to-r bg-gradient-to-r from-indigo-400 to-cyan-400">
        <div className="max-w-3xl m-5 pt-5">
          <h2 className="pt-5 pb-2 text-3xl md:text-4xl xl:text-5xl text-white font-bold tracking-px-n leading-none">
            Views Of Bandung
          </h2>
        </div>
        <Carousel />
      </div>
    </div>
  );
}
