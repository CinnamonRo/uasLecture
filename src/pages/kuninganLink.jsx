import Navbar from "../component/navbar";
import Header from "../component/header";
import Datakabupaten from "../component/dataKabupaten";
export default function Kuningan() {
  return (
    <div>
       <Navbar logo={Datakabupaten[13].logo} title={Datakabupaten[13].title} />
      <Header />
    </div>
  );
}
