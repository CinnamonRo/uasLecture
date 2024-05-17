import React from "react";
import Navbar from "../component/navbar";
import Footer from "../component/footer";
import Profile from "../component/profileCard";
import Video from "../video/backgroundVid.mp4";

import Datakabupaten from "../component/dataKabupaten";

export default function AboutUS() {
  return (
    <div>
      <Navbar logo={Datakabupaten[21].logo} title={Datakabupaten[21].title} />
      <div className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <video
            src={Video}
            className="absolute object-cover w-full h-full"
            autoPlay
            loop
            muted
          />
        </div>
        <div
          className="absolute inset-0 bg-black bg-opacity-50"
          style={{ backdropFilter: "blur(12px)" }}
        >
          <Profile />
          <Footer />
        </div>
      </div>
    </div>
  );
}
