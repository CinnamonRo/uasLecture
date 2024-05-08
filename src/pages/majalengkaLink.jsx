import Navbar from "../component/navbar";
import Header from "../component/header";
import Datakabupaten from "../component/dataKabupaten";
export default function Majalengka() {
  return (
    <div>
      <Navbar logo={Datakabupaten[11].logo} title={Datakabupaten[11].title} />
      <Header />
    </div>
  );
}
