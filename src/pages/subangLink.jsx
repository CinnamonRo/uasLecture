import Navbar from "../component/navbar";
import Header from "../component/header";
import Datakabupaten from "../component/dataKabupaten";
export default function Subang() {
  return (
    <div>
        <Navbar logo={Datakabupaten[17].logo} title={Datakabupaten[17].title} />
      <Header />
    </div>
  );
}
