import Navbar from "../component/navbar";
import Header from "../component/header";
import Datakabupaten from "../component/dataKabupaten";
export default function Sukabumi() {
  return (
    <div>
        <Navbar logo={Datakabupaten[15].logo} title={Datakabupaten[15].title} />
      <Header />
    </div>
  );
}
