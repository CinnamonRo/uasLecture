import Navbar from "../component/navbar";
import Header from "../component/header";
import Datakabupaten from "../component/dataKabupaten";
export default function Bandung() {
  return (
    <div>
           <Navbar logo={Datakabupaten[0].logo} title={Datakabupaten[0].title} />
      <Header />
    </div>
  );
}
