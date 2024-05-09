import React from "react";
import Navbar from "../component/navbar";
import Header from "../component/header";
import Datakabupaten from "../component/dataKabupaten";

function Banjar() {
  return (
    <div>
      <Navbar logo={Datakabupaten[2].logo} title={Datakabupaten[2].title} />
      <Header />
    </div>
  );
}

export default Banjar;
