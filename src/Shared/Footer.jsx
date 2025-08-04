import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Us */}
        <div className="text-center">
          <h2 className="text-lg font-semibold mb-4">CONTACT US</h2>
          <p>123 ABS Street, Uni 21, Bangladesh</p>
          <p className="mt-2">+88 123456789</p>
          <p className="mt-2">Mon - Fri: 08:00 - 22:00</p>
          <p>Sat - Sun: 10:00 - 23:00</p>
        </div>

        {/* Follow Us */}
        <div className="text-center">
          <h2 className="text-lg font-semibold mb-4">Follow US</h2>
          <p className="mb-4">Join us on social media</p>
          <div className="flex justify-center items-center space-x-6 text-2xl">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#111] py-4 text-center text-sm text-gray-300">
        Copyright © CulinaryCloud. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
