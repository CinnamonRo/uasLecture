import Navbar from "../component/navbar";
import Header from "../component/header";
import Datakabupaten from "../component/dataKabupaten";
export default function Kuningan() {
  return (
    <div>
       <Navbar logo={Datakabupaten[10].logo} title={Datakabupaten[10].title} />
      <Header />
    </div>
  );
}
