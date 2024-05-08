import Navbar from "../component/navbar";
import Header from "../component/header";
import Datakabupaten from "../component/dataKabupaten";
export default function Karawang() {
  return (
    <div>
     <Navbar logo={Datakabupaten[9].logo} title={Datakabupaten[9].title} />
      <Header />
    </div>
  );
}
