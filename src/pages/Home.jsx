import Navbar from "../component/navbar";
import JawaBarat from "../component/Jawabarat";
import FooterWithLogo from "../component/footer";
import Explore from "../component/explore";

export default function App() {
  return (
    <div>
      <Navbar />
      <Explore />
      <JawaBarat />

      <FooterWithLogo />
    </div>
  );
}
