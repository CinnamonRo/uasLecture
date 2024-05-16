import Navbar from "../component/navbar";
import Footer from "../component/footer";
import Datakabupaten from "../component/dataKabupaten";
import News from "../component/newsApi";
import Video from "../video/backgroundVid.mp4";

export default function NewsPages() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <Navbar logo={Datakabupaten[21].logo} title={Datakabupaten[21].title} />
      <div>
        <video
          src={Video}
          className="absolute object-cover w-full h-full bg-black bg-opacity-50 overflow-hidden"
          autoPlay
          loop
          muted
        />
        <div
          className="bg-black bg-opacity-50"
          style={{ backdropFilter: "blur(12px)" }}
        >
          <News />
          <Footer />
        </div>
      </div>
    </div>
  );
}
