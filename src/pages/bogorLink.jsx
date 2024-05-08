import Navbar from "../component/navbar";
import Header from "../component/header";
import Datakabupaten from "../component/dataKabupaten";
export default function Bogor() {
  return (
    <div>
           <Navbar logo={Datakabupaten[3].logo} title={Datakabupaten[3].title} />
      <Header />
    </div>
  );
}
