import React from "react";
import Navbar from "../component/navbar";
import Header from "../component/header";
import Datakabupaten from "../component/dataKabupaten";

function Cimahi() {
  return (
    <div>
      <Navbar logo={Datakabupaten[20].logo} title={Datakabupaten[20].title} />
      <Header />
    </div>
  );
}

export default Cimahi;
