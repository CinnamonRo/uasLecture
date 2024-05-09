import Navbar from "../component/navbar";
import JawaBarat from "../component/Jawabarat";
import FooterWithLogo from "../component/footer";
import Suhu from "../lib/client";
import Datakabupaten from "../component/dataKabupaten";

export default function App() {
  return (
    <div>
      <Suhu />
      <Navbar logo={Datakabupaten[21].logo} title={Datakabupaten[21].title} />

      <JawaBarat />
      <FooterWithLogo />
    </div>
  );
}
