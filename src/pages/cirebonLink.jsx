import Navbar from "../component/navbar";
import Header from "../component/header";
import Datakabupaten from "../component/dataKabupaten";

export default function Cirebon() {
  return (
    <div>
           <Navbar logo={Datakabupaten[8].logo} title={Datakabupaten[8].title} />
      <Header />
    </div>
  );
}
