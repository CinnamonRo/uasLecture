import Navbar from "../component/navbar";
import Header from "../component/header";
import Datakabupaten from "../component/dataKabupaten";

export default function Garut() {
  return (
    <div>
     <Navbar logo={Datakabupaten[7].logo} title={Datakabupaten[7].title} />
      <Header />
    </div>
  );
}
