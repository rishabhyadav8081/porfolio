
import React, { useState } from "react";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // You can connect this to an API or email service later
    setFormData({ 
      name: "", 
      email: "", 
      subject: "", 
      message: "" 
    });
  };

  return (
    <section id="Contact" className="w-full  bg-gray-50 flex  justify-center p-15">
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 bg-white shadow-md rounded-lg ">
        
        {/* Left Side - Info */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            I love to collaborate and make awesome content. Let’s talk!
          </h2>
          <hr className="w-12 border-t-2 border-gray-800 mb-6" />

          <h3 className="uppercase text-sm tracking-widest text-gray-500 mb-2">
            Get in Touch
          </h3>
          <p className="font-semibold text-gray-800">
            123 Fifth Ave, New York, NY 12004. <br />
            +1 123 456 78 90
          </p>

          <p className="mt-4 font-bold underline">
            <a href="mailto:mail@example.com">mail@example.com</a>
          </p>

          {/* Social Links */}
          <div className="mt-8 flex space-x-6 text-xl text-gray-700">
            <a href="#" className="hover:text-red-600">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="#" className="hover:text-pink-600">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="hover:text-blue-500">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="hover:text-blue-700">
              <i className="fab fa-facebook"></i>
            </a>
          </div>
        </div>

        {/* Right Side - Form */}
        <div>
          <h3 className="uppercase text-sm tracking-widest text-gray-500 mb-6">
            Send Me a Message
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4 p-5">
            <input
              type="text"
              name="name"
              placeholder="Full name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-black outline-none"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
              className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-black outline-none"
              required
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-black outline-none"
            />
            <textarea
              name="message"
              placeholder="Your message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-black outline-none"
              required
            ></textarea>
            <button
              type="submit"
              className="px-6 py-2 border-2 border-black rounded-full font-semibold hover:bg-black hover:text-white transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Footer;
