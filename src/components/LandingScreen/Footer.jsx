import React from "react";
import { FaTwitter, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#7E48F0] text-white py-10">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-4 gap-8">

        <div className="">
          <h3 className="text-2xl font-bold">Need help with anything?</h3>
          <div className="flex items-center gap-3 mt-4">
            <a href="#" className="bg-white p-2 rounded-full text-[#7E48F0]">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="bg-white p-2 rounded-full text-[#7E48F0]">
              <FaLinkedin size={20} />
            </a>
          </div>
          <p className="mt-4 text-sm">Dev’s : Bentil Fiifi - 0576639304</p>
        </div>

        <div>
          <h4 className="font-bold text-lg">Home</h4>
          <ul className="mt-2 space-y-2 text-sm">
            <li><a href="#">What is it</a></li>
            <li><a href="#">How it works</a></li>
            <li><a href="#">Why it’s important</a></li>
            <li><a href="#">Pricing</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg">Company</h4>
          <ul className="mt-2 space-y-2 text-sm">
            <li><a href="#">About</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg">Legal</h4>
          <ul className="mt-2 space-y-2 text-sm">
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Privacy & Policy</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg">Help</h4>
          <ul className="mt-2 space-y-2 text-sm">
            <li><a href="#">FAQs</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
