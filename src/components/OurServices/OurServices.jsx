import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const OurServices = () => {
  return (
    <div className="container py-6 mb-4">
      {/* Page Title */}
      <h2 className="text-4xl font-bold text-center mb-10">
        Reserve a Table at <span className="text-primary">BanksTown</span>
      </h2>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Reservation Form */}
        <div className="bg-gray-600/15 p-8 rounded-xl shadow-md">
          <h3 className="text-2xl font-semibold mb-6">Book a Table</h3>
          <form
        action="https://formspree.io/f/manjzlad"
        method="POST"
        className="space-y-6"
      >
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            className="w-full p-3 border bg-white/70 dark:bg-white/5 border-gray-300 rounded-lg focus:outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            className="w-full p-3 border bg-white/70 dark:bg-white/5 border-gray-300 rounded-lg focus:outline-none "
          />
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            required
            className="w-full p-3 bg-white/70 dark:bg-white/5 border border-gray-300 rounded-lg focus:outline-none "
          />
          <input
            type="date"
            name="date"
            required
            className="w-full p-3 bg-white/70 dark:bg-white/5 border border-gray-300 rounded-lg focus:outline-none"
          />
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="time"
                name="time"
            required
            className="w-full p-3 bg-white/70 dark:bg-white/5 border border-gray-300 rounded-lg focus:outline-none "
          />
          <input
            type="number"
            name="guests"
            placeholder="Number of Guests"
            required
            className="w-full p-3 bg-white/70 dark:bg-white/5 border border-gray-300 rounded-lg focus:outline-none "
          />
        </div>

        <textarea
          name="message"
          placeholder="Additional Notes (Optional)"
          rows="4"
          className="w-full p-3 bg-white/70 dark:bg-white/5 border border-gray-300 rounded-lg focus:outline-none "
        ></textarea>

        <button
          type="submit"
          className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary-dark transition"
        >
          Submit Reservation
        </button>
      </form>

        </div>

        {/* Contact Info & Map */}
        <div className="space-y-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
            <p><strong>Phone:</strong> <a href="tel:+8801234567890">+880 1234-567-890</a></p>
            <p><strong>Email:</strong> <a href="mailto:bankstown@restaurant.com">bankstown@restaurant.com</a></p>
            <div className="flex gap-4 mt-4 text-2xl">
  <a
    href="https://facebook.com/yourpage"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-600 hover:scale-110 transition-transform"
  >
    <FaFacebookF />
  </a>

  <a
    href="https://instagram.com/yourpage"
    target="_blank"
    rel="noopener noreferrer"
    className="text-pink-600 hover:scale-110 transition-transform"
  >
    <FaInstagram />
  </a>

  <a
    href="https://twitter.com/yourpage"
    target="_blank"
    rel="noopener noreferrer"
    className="text-sky-500 hover:scale-110 transition-transform"
  >
    <FaTwitter />
  </a>
</div>
          </div>

          {/* Location Map */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Find Us Here</h3>
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.148993759685!2d90.40418641498195!3d23.812062591471202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7c9ddee51d9%3A0x4c1386f2e9f3c272!2sBanani%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1657454651321"
              width="100%"
              height="325"
              allowFullScreen=""
              loading="lazy"
              className="rounded-sm border border-gray-300 shadow-slate-800/20 shadow-lg"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
