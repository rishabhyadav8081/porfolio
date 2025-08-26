import React, { useState } from "react";
import alk from "../assets/alk.jpg";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io"; // Close Icon

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
      {/* Background Image */}
      <img className="h-full w-full object-cover" src={alk} alt="Background" />
      {/* Overlay Content */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/30">
        {/* Navbar */}
        <nav className="flex items-center p-6 md:p-10 text-white relative z-20">
          {/* Left: Logo */}
          <div className="font-bold text-lg cursor-pointer">LOGO</div>

          {/* Right: Mobile Hamburger */}
          <div
            className="md:hidden ml-auto text-4xl cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <IoMdClose /> : <GiHamburgerMenu />}
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6 ml-auto text-lg items-center cursor-pointer">
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

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute  top-20 left-0 w-full bg-white text-black flex flex-col items-start p-6 space-y-4 z-10 shadow-md md:hidden">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-lg font-medium w-full border-b pb-2"
                onClick={() => setMenuOpen(false)} // close menu when link clicked
              >
                {item.label}
              </a>
            ))}
          </div>
        )}

        {/* Hero Section */}
        <div
          id="Home"
          className="flex flex-col md:flex-row justify-between items-start md:items-center px-6 md:px-16 mt-20 md:mt-25 text-white relative z-0"
        >
          {/* Left: Name */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight md:w-1/2  md:pb-150">
            Alok Yadav
          </h1>

          {/* Right: Description */}
          <p className=" md:mt-0 md:w-2/5 text-md pt-50 sm:text-base md:text-lg leading-relaxed md:pt-50 ">
            <span className="font-bold text-3xl block ">Professional Video Editor</span> I work with creators, brands, and
            agencies to transform raw footage into captivating, cinematic
            stories that connect with audiences, elevate content quality, and
            bring creative visions to life through expert editing, color
            grading, and seamless storytelling.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;
