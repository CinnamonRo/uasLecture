import Navbar from "../component/navbar";
import JawaBarat from "../component/Jawabarat";
import Footer from "../component/footer";
import Datakabupaten from "../component/dataKabupaten";

export default function App() {
  return (
    <div>
      <Navbar logo={Datakabupaten[21].logo} title={Datakabupaten[21].title} />

      <div
        style={{
          backgroundImage: 'url("/images/background/jawabaratBg.jpg")',
          backgroundSize: "cover",
        }}
      >
        <div
          className="bg-black bg-opacity-50"
          style={{ backdropFilter: "blur(12px)" }}
        >
          <JawaBarat />
          <Footer />
        </div>
      </div>
    </div>
  );
}
