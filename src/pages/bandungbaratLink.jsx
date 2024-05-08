import Navbar from "../component/navbar";
import Header from "../component/header";
import Datakabupaten from "../component/dataKabupaten";
export default function BandungBarat() {
  return (
    <div>
      <Navbar logo={Datakabupaten[1].logo} title={Datakabupaten[1].title} />
      <Header />
    </div>
  );
}
