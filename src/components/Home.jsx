import React, { useState } from "react";
import alk from "../assets/alk.jpg";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { href: "#Home", label: "Home" },
    { href: "#About", label: "About Me" },
    { href: "#Projects", label: "Projects" },
    { href: "#Gears", label: "Gears" },
    { href: "#Contact", label: "Get In Touch" },
  ];

  return (
    <section className="relative h-screen w-full">
      {/* Background */}
      <img className="h-full w-full object-cover" src={alk} alt="Background" />
      <div className="absolute inset-0 bg-black/40">

        {/* Navbar */}
        <nav className="flex items-center p-6 md:p-10 text-white">
          <div className="font-bold text-lg">LOGO</div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden ml-auto text-3xl"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <IoMdClose /> : <GiHamburgerMenu />}
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex space-x-6 ml-auto text-lg items-center">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`hover:text-gray-300 ${
                  item.label === "Get In Touch"
                    ? "border border-white rounded-full px-4 py-2 hover:bg-white hover:text-black transition"
                    : ""
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="absolute top-[68px] left-0 w-full bg-white text-black flex flex-col items-start p-6 space-y-4 z-20 shadow-md md:hidden">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-lg font-medium w-full border-b pb-2"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}

        {/* HERO */}
        {/* Reserve space below navbar so content doesn't collide with it */}
        <div
          id="Home"
          className="
            relative z-10
            h-[calc(100vh-88px)]   /* tweak this if your nav height differs */
            px-6 
            md:flex  md:justify-between
            text-white
          "
        >
          {/* Name: top-left on mobile, left column on desktop */}
          <h1
            className="
              mt-15 md:mt-0
              text-5xl sm:text-6xl md:text-7xl lg:text-8xl
              font-extrabold leading-tight
              md:w-1/2
              w-max
             
            "
          >
            <span className="block">Alok</span>
            <span className="block">Yadav</span>
          </h1>

          {/* Description: bottom-right on mobile, right column on desktop */}
          <p
            className="mb-10
              absolute bottom-6 right-6
              md:static md:ml-10 md:w-2/5 md:max-w-none
              text-sm sm:text-base md:text-lg leading-relaxed
              max-w-[18rem] sm:max-w-sm
             px-4 py-3 md:mt-60 lg:mt-90
            "
          >
            <span className="font-bold text-xl sm:text-2xl md:text-3xl block">
              Professional Video Editor
            </span>
            I work with creators, brands, and agencies to transform raw
            footage into captivating, cinematic stories that connect with
            audiences, elevate content quality, and bring creative visions to
            life through expert editing, color grading, and seamless
            storytelling.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;
