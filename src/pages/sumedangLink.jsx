import Navbar from "../component/navbar";
import Header from "../component/header";
import Datakabupaten from "../component/dataKabupaten";
export default function Sumedang() {
  return (
    <div>
       <Navbar logo={Datakabupaten[19].logo} title={Datakabupaten[19].title} />
      <Header />
    </div>
  );
}
