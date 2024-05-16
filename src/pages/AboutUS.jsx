import React from "react";
import Navbar from "../component/navbar";
import Footer from "../component/footer";
import Profile from "../component/profileCard";
import Video from "../video/backgroundVid.mp4";
import FormData from "../component/formData";
import Datakabupaten from "../component/dataKabupaten";

export default function AboutUS() {
  return (
    <div>
      <Navbar logo={Datakabupaten[21].logo} title={Datakabupaten[21].title} />
      <div className="relative min-h-screen overflow-hidden">
        <div>
          <video
            src={Video}
            className="absolute object-cover w-full h-full bg-black bg-opacity-50 overflow-hidden"
            autoPlay
            loop
            muted
          />
          <div
            className="bg-black bg-opacity-50"
            style={{ backdropFilter: "blur(12px)" }}
          >
            <Profile />
            <FormData />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
