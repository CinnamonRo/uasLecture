import Navbar from "../component/navbar";
import Header from "../component/header";
import Datakabupaten from "../component/dataKabupaten";
export default function Bogor() {
  return (
    <div>
           <Navbar logo={Datakabupaten[4].logo} title={Datakabupaten[4].title} />
      <Header />
    </div>
  );
}
