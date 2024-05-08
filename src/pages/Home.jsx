import Navbar from "../component/navbar";
import JawaBarat from "../component/Jawabarat";
import FooterWithLogo from "../component/footer";
import Suhu from "../lib/lion";
export default function App() {
  return (
    <div>
      <Suhu />
      <Navbar />

      <JawaBarat />
      <FooterWithLogo />
    </div>
  );
}
