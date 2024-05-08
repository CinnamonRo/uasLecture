import Navbar from "../component/navbar";
import Header from "../component/header";
import Explore from "../component/explore";
import Datakabupaten from "../component/dataKabupaten";
export default function BandungBarat() {
  return (
    <div>
      <Navbar logo={Datakabupaten[0].logo} title={Datakabupaten[0].title} />
      <Header />
      <Explore />
    </div>
  );
}
