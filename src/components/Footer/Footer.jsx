import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-stone-950 border-t-2 border-zinc-900 text-gray-300 pt-6 pb-2 px-4 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 space-x-16">
        {/* Logo and Description */}
        <div>
          <h2 className="text-xl font-bold text-white mb-2">THE COFFEE EMPORIUM</h2>
          <p className="text-xs leading-relaxed font-sans font-semibold text-gray-400">
            EST.1991 — Where passion meets perfection. Savor every sip of our finest brews and handcrafted delicacies.
          </p>
        </div>

        {/* Contact */}
        <div className="mt-4 md:mt-0">
          <h3 className="text-lg font-semibold text-white mb-2">Contact</h3>
          <p className="text-xs font-sans font-semibold text-gray-300/90">📍 Bankstown, Sydney, Australia</p>
          <p className="text-xs mt-0.5 font-sans font-semibold text-gray-300/90">📞 +880 1234-567-890</p>
          <p className="text-xs mt-0.5 font-sans font-semibold text-gray-300/90">📧 bankstown@restaurant.com</p>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Follow Us</h3>
          <div className="flex space-x-3">
            <a href="#" className="p-1.5 bg-gray-800 rounded-full hover:bg-white hover:text-gray-900 transition">
              <FaFacebookF size={14} />
            </a>
            <a href="#" className="p-1.5 bg-gray-800 rounded-full hover:bg-white hover:text-gray-900 transition">
              <FaInstagram size={14} />
            </a>
            <a href="#" className="p-1.5 bg-gray-800 rounded-full hover:bg-white hover:text-gray-900 transition">
              <FaTwitter size={14} />
            </a>
            <a href="#" className="p-1.5 bg-gray-800 rounded-full hover:bg-white hover:text-gray-900 transition">
              <FaLinkedinIn size={14} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-6 border-t border-gray-600 pt-3 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} THE COFFEE EMPORIUM. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
