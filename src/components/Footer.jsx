
import React, { useState } from "react";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    Number: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
    const [result, setResult] = React.useState("");
  
    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "b7df9567-da80-4ab5-bbfa-5f3405edd3f0");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
     
      console.log("Form submitted:", data.data);
      setFormData({ 
        name: "", 
        email: "", 
        Number: "", 
        message: "" 
      });
      setResult("")

    };
  return (
    <section id="Contact" className="w-full  bg-gray-50 flex  justify-center p-15">
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 bg-white shadow-md rounded-lg ">
        
        {/* Left Side - Info */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Great stories deserve great edits. Let’s bring
          yours to life — together.
          </h2>
          <hr className="w-12 border-t-2 border-gray-800 mb-6" />

          <h3 className="uppercase text-sm tracking-widest text-gray-500 mb-2">
            Get in Touch
          </h3>
          <p className="font-semibold text-gray-800">
          Krishna Lok Nagar, Faizullaganj, Lucknow <br />
          +91 7307670369
          </p>

          <p className="mt-4 font-bold underline">
            <a href="mailto:mail@example.com">aloky3143@example.com</a>
          </p>

          {/* Social Links */}
          {/* <div className="mt-8 flex space-x-6 text-xl text-gray-700">
            <a href="https://youtu.be/uMIutF1dw1w?si=luCUNmU1sGEnmxGw" className="hover:text-red-600">
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
          </div> */}
        </div>

        {/* Right Side - Form */}
        <div>
          <h3 className="uppercase text-sm tracking-widest text-gray-500 mb-6">
            Send Me a Message
          </h3>
          <form onSubmit={onSubmit} className="space-y-4 p-5">
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
              name="Number"
              placeholder="Number"
              value={formData.Number}
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
          <span className="ml-5">{result}</span>
        </div>
      </div>
    </section>
  );
};

export default Footer;
