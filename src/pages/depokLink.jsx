import React from "react";
import Navbar from "../component/navbar";
import Header from "../component/header";
import Datakabupaten from "../component/dataKabupaten";

function depokLink() {
  return (
    <div>
      <Navbar logo={Datakabupaten[9].logo} title={Datakabupaten[9].title} />
      <Header />
    </div>
  );
}

export default depokLink;
