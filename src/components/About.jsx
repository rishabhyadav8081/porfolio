import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
const About = () => {
  return (
    <section id="About" className="w-full min-h-screen bg-gray-100 relative">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/70"></div>
      </div>
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Section - Image */}
        <div className="flex justify-center lg:justify-start">
          <img
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
            alt="Person with camera"
            className="rounded-2xl shadow-lg max-h-[500px] object-cover"
          />
        </div>
        {/* Right Section - Text */}
        <div className="text-center lg:text-left">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">About Me</h1>
          <p className="font-semibold mb-4">
            Hi, I’m Alok Yadav — a professional video editor with a passion for
            storytelling and a sharp eye f or detail.
          </p>
          <p className="text-gray-700 mb-8">
            Whether it’s fast-paced YouTube content, sleek brand promos, or
            cinematic short films, I love turning raw footage into something
            that feels polished, engaging, and true to the creator’s vision. I
            work mainly with Adobe Premiere Pro, After Effects, and DaVinci
            Resolve — making sure every cut flows smoothly, every transition has
            purpose, and every frame helps tell the story
          </p>

          {/* Social Links */}
          <div className="mb-10">
            <h3 className="uppercase text-sm tracking-widest text-gray-600 mb-4 ">
              Follow My Journey
            </h3>
            <div className="flex flex-row justify-center items-center sm:flex-row sm:gap-16 gap-13 text-xl font-bold">
              <a href="#" className="hover:text-pink-600">
                {" "}
                <FaInstagram />{" "}
              </a>
              <a href="#" className="hover:text-blue-600">
                <FaLinkedinIn />
              </a>
              <a href="https://youtu.be/uMIutF1dw1w?si=luCUNmU1sGEnmxGw" className="hover:text-blue-700">
                <FaFacebookF />
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="flex  justify-around flex-wrap gap-10 text-center lg:text-left border-t border-b py-6">
            <div>
              <p className="text-3xl md:text-4xl font-extrabold">50+ </p>
              <p className="text-sm uppercase tracking-wider text-gray-600">
              Projects Edited
              </p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-extrabold">1+</p>
              <p className="text-sm uppercase tracking-wider text-gray-600">
              Years of Experience
              </p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-extrabold">98%</p>
              <p className="text-sm uppercase tracking-wider text-gray-600">
              Client Satisfaction Rate
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;

 
 