import Navbar from "../component/navbar";
import Header from "../component/header";
import Datakabupaten from "../component/dataKabupaten";
export default function Majalengka() {
  return (
    <div>
      <Navbar logo={Datakabupaten[14].logo} title={Datakabupaten[14].title} />
      <Header />
    </div>
  );
}
