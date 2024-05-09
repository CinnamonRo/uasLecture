import Navbar from "../component/navbar";
import Header from "../component/header";
import Datakabupaten from "../component/dataKabupaten";

export default function Ciamis() {
  return (
    <div>
         <Navbar logo={Datakabupaten[5].logo} title={Datakabupaten[5].title} />
      <Header />
    </div>
  );
}
