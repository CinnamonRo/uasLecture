import React from "react";
import Navbar from "../component/navbar";
import Footer2 from "../component/footer2";
import Profile from "../component/profileCard";

import Datakabupaten from "../component/dataKabupaten";

export default function AboutUS() {
  return (
    <div>
      <div
        style={{
          backgroundImage: 'url("/images/background/jawabaratBg.jpg")',
          backgroundSize: "cover",
        }}
      >
        <div
          className="bg-black bg-opacity-50"
          style={{ backdropFilter: "blur(12px)" }}
        >
          <div>
            <Navbar
              logo={Datakabupaten[21].logo}
              title={Datakabupaten[21].title}
            />
          </div>
          <Profile />
        </div>
      </div>
    </div>
  );
}
