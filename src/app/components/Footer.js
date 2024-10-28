import React from "react";
import Image from "next/image";

function Footer() {
  return (
    <footer className="bg-indigo-900 text-white p-10">
      <div className="container grid gap-6 md:grid-cols-12">
        {/* Contact Details */}
        <div className="space-y-4 md:col-span-3">
          <a href="#">
            <span className="sr-only">AltDrx</span>
            <Image alt="Logo" src="/footerlogo.svg" width={50} height={50} className="block" style={{ width: "150px", height: "auto" }} priority />
          </a>
          <ul className="space-y-2">
            <li>
              <p className="text-sm text-white mb-5 mt-2 font-light" style={{ fontFamily: "Gotham-Light,sans-serif" }}>
                #778/A, Chinnaswamy Chambers,
                <br />
                12th Cross, Double Road, Indiranagar 2nd Stage,
                <br />
                Bengaluru 560038, Karnataka, India.
              </p>
            </li>
            <li className="mt-2" style={{ fontFamily: "Gotham-Light,sans-serif" }}>
              +91 99864 34404
            </li>
            <li style={{ fontFamily: "Gotham-Light,sans-serif" }}>reachus@altdrx.com</li>
          </ul>
          <div className="flex space-x-4 text-xl text-center">
            <a href="https://www.facebook.com/altdrxofficial" target="_blank" rel="noopener noreferrer" className="text-center">
              <Image alt="Facebook" src="/facebook1.svg" width={24} height={24} className="block" style={{ width: "28px", height: "auto" }} priority />
            </a>
            <a href="https://www.instagram.com/altdrx.official/" target="_blank">
              <Image alt="Instagram" src="/instagram1.svg" width={24} height={24} className="block" style={{ width: "24px", height: "auto" }} priority />
            </a>
            <a href="https://www.linkedin.com/company/alt-realtech/" target="_blank">
              <Image alt="LinkedIn" src="/linkedin1.svg" width={24} height={24} className="block" style={{ width: "24px", height: "auto" }} priority />
            </a>
            <a href="https://twitter.com/altdrxofficial?s=20" target="_blank">
              <Image alt="Twitter" src="/Xlogo.svg" width={24} height={24} className="block" style={{ width: "24px", height: "auto" }} priority />
            </a>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="space-y-2 md:col-span-3 p-3">
          <ul className="space-y-3 ">
            <li>
              <a href="#" className="hover:underline text-sm">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline text-sm">
                Opportunities
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline text-sm">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline text-sm">
                FAQs
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline text-sm">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline text-sm">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline text-sm">
                Blogs
              </a>
            </li>
          </ul>
        </div>

        {/* Mailing List Subscription */}
        <div className="bg-white rounded-lg text-black w-full md:col-span-6 shadow-lg ">
          <h3 className="text-lg font-bold text-center mb-4 bg-orange text-white uppercase p-3">Join Our Mailing List</h3>
          <form className="p-3">
            <div className="mb-4 ">
              <label className="block text-sm font-semibold" htmlFor="email">
                Email:
              </label>
              <input type="email" id="email" placeholder="abcd@example.com" className="w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300" />
            </div>
            <vr></vr>
            <div className="mb-4">
              <label className="block text-sm font-semibold" htmlFor="subject">
                Subject:
              </label>
              <input
                type="text"
                id="subject"
                placeholder="I don't want to miss out on anything!"
                className="w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300"
              />
            </div>
            <div className="flex justify-end">
              <button type="submit" className="bg-black text-white py-2 px-6 rounded-full font-semibold hover:bg-gray-800 transition">
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
      <p className="text-center text-white mt-6">&copy; 2024 Your Company, Inc. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
