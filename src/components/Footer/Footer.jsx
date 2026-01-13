import React from "react";
 

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer data-aos="fade-up" className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300">
      <div className="container mx-auto px-6 py-12">

        {/* Top Section */}
        <div data-aos="fade-up"  className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">

          {/* Company Info */}
          <div>
            <h2 data-aos="fade-up"  className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              FairyHeaven
            </h2>
            <p data-aos="fade-up"  className="text-sm leading-relaxed">
              FairyHeaven is your trusted destination for premium kids products.
              We believe every child is a fairy and deserves the best.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 data-aos="fade-up"  className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Quick Links
            </h3>
            <ul data-aos="fade-up"  className="space-y-2 text-sm">
              <li className="hover:text-primary cursor-pointer">Home</li>
              <li className="hover:text-primary cursor-pointer">Shop</li>
              <li className="hover:text-primary cursor-pointer">About Us</li>
              <li className="hover:text-primary cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 data-aos="fade-up"  className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Support
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-primary cursor-pointer">FAQ</li>
              <li className="hover:text-primary cursor-pointer">Privacy Policy</li>
              <li className="hover:text-primary cursor-pointer">Terms & Conditions</li>
              <li className="hover:text-primary cursor-pointer">Return Policy</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 data-aos="fade-up"  className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Contact Us
            </h3>
            <p data-aos="fade-up"  className="text-sm">📍 India</p>
            <p data-aos="fade-up"  className="text-sm">📞 +91 98765 43210</p>
            <p data-aos="fade-up"  className="text-sm">✉ support@fairyheaven.com</p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 dark:border-gray-700 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">

          {/* Copyright */}
          <p className="text-sm">
            © {new Date().getFullYear()} @LUKASON. All rights reserved.
          </p>

          {/* Social Icons */}
          <div data-aos="fade-up"  className="flex gap-4">
            <SocialIcon icon={<FaFacebookF />} />
            <SocialIcon icon={<FaInstagram />} />
            <SocialIcon icon={<FaTwitter />} />
            <SocialIcon icon={<FaLinkedinIn />} />
            <SocialIcon icon={<FaYoutube />} />
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ icon }) => {
  return (
    <div className="w-10 h-10 flex items-center justify-center rounded-full
      bg-gray-200 dark:bg-gray-800
      text-gray-700 dark:text-gray-300
      hover:bg-primary hover:text-white
      transition-all duration-300 cursor-pointer">
      {icon}
    </div>
  );
};

export default Footer;

