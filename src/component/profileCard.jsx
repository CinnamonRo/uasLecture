import React from "react";
import "../css/profileCard.css";

export default function profileCard() {
  return (
    <div className="flex flex-wrap justify-evenly items-center p-12">
      <div className="max-w-xs mx-2 mb-4">
        <div className="bg-white shadow-xl rounded-lg py-3 px-5">
          <div className="photo-wrapper p-5">
            <img
              className="w-32 h-32 rounded-full mx-auto"
              src="images/creator/morenos2.jpg"
              alt="Moreno Pradita"
            />
          </div>
          <div className="p-2">
            <h3 className="text-center text-xl text-gray-900 font-medium leading-8">
              Moreno Pradita
            </h3>
            <div className="text-center text-gray-400 text-xs font-semibold">
              <p>00000095919</p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-xs mx-2 mb-4">
        <div className="bg-white shadow-xl rounded-lg py-3 px-5">
          <div className="photo-wrapper p-5">
            <img
              className="w-32 h-32 rounded-full mx-auto"
              src="images/creator/bryan.jpg"
              alt="Benedict Bryan"
            />
          </div>
          <div className="p-2">
            <h3 className="text-center text-xl text-gray-900 font-medium leading-8">
              Benedict Bryan H. P.
            </h3>
            <div className="text-center text-gray-400 text-xs font-semibold">
              <p>00000094709</p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-xs mx-2 mb-4">
        <div className="bg-white shadow-xl rounded-lg py-3 px-5">
          <div className="photo-wrapper p-5">
            <img
              className="w-32 h-32 rounded-full mx-auto"
              src="images/creator/fredlies2.jpg"
              alt="John Doe"
            />
          </div>
          <div className="p-2">
            <h3 className="text-center text-xl text-gray-900 font-medium leading-8">
              Fredlie Irwanto
            </h3>
            <div className="text-center text-gray-400 text-xs font-semibold">
              <p>00000094212</p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-xs mx-2 mb-4">
        <div className="bg-white shadow-xl rounded-lg py-3 px-5">
          <div className="photo-wrapper p-5">
            <img
              className="w-32 h-32 rounded-full mx-auto"
              src="images/creator/gigih.jpg"
              alt="John Doe"
            />
          </div>
          <div className="p-2">
            <h3 className="text-center text-xl text-gray-900 font-medium leading-8">
              Gregorius Gigih S.
            </h3>
            <div className="text-center text-gray-400 text-xs font-semibold">
              <p>00000097022</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
