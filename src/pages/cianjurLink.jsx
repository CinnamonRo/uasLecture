import Navbar from "../component/navbar";
import Header from "../component/header";
import Datakabupaten from "../component/dataKabupaten";

export default function Cianjur() {
  return (
    <div>
     <Navbar logo={Datakabupaten[6].logo} title={Datakabupaten[6].title} />
      <Header />
    </div>
  );
}
