import React from "react";

const MyGear = () => {
  return (
    <section className=" min-h-screen bg-white relative ">
      <div className="relative max-w-7xl mx-auto p-15  grid lg:grid-cols-2  items-center">
        {/* Left Section - Image + Vertical Title */}
        <div className="flex flex-col items-center lg:items-start relative">
          <img
            src="https://websitedemos.net/vlogger-02/wp-content/uploads/sites/753/2020/12/vlogger-template-footer-img-1.png"
            alt="Person with Camera"
            className="w-full max-w-sm object-cover"
          />
          <h1
            id="Gears"
            className="absolute top-9/20 -right-25 lg:-right-24 -rotate-90 text-6xl lg:text-8xl font-extrabold text-black"
          >
            My Gear
          </h1>
        </div>

        {/* Right Section - Gear List */}
        <div className="space-y-10">
          {/* Item 1 */}
          <div>
            <p className="uppercase text-xs tracking-widest text-gray-500">
              01. Main Camera
            </p>
            <h2 className="text-2xl font-bold">Sony a6700 | Studio Light |</h2>
            <hr className="mt-3 border-gray-300" />
          </div>

          {/* Item 2 */}
          <div>
            <p className="uppercase text-xs tracking-widest text-gray-500">
              02. Editing Setup:
            </p>
            <h2 className="text-2xl font-bold">Adobe Premiere Pro</h2>
            <hr className="mt-3 border-gray-300" />
          </div>

          {/* Item 3 */}
          <div>
            <p className="uppercase text-xs tracking-widest text-gray-500"></p>
            <h2 className="text-2xl font-bold"> After Effects,</h2>
            <hr className="mt-3 border-gray-300" />
          </div>

          {/* Item 4 */}
          <div>
            <p className="uppercase text-xs tracking-widest text-gray-500">
            
            </p>
            <h2 className="text-2xl font-bold">
              DaVinci Resolve Sennheiser Headphones
            </h2>
            <hr className="mt-3 border-gray-900" />
          </div>
          <div>
            <p className="uppercase text-xs tracking-widest text-gray-500">

            </p>
            <h2 className="text-2xl font-bold">Color Calibrated Monitor</h2>
            <hr className="mt-3 border-gray-900" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default MyGear;
