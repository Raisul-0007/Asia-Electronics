import Link from "next/link";

import {
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white">

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-16">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <Link
              href="/"
              className="text-2xl font-black"
            >
              Asia <span className="text-[#415FFF]">Electronics</span>
            </Link>

            <p className="text-gray-400 mt-5 leading-7">
              Your trusted destination for mobiles,
              electronics and accessories. We provide
              quality products at competitive prices.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-6">

              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#415FFF] transition"
              >
                <FaFacebookF size={17} />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#415FFF] transition"
              >
                <FaInstagram size={17} />
              </a>

              <a
                href="#"
                aria-label="YouTube"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#415FFF] transition"
              >
                <FaYoutube size={18} />
              </a>

            </div>
          </div>


          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li>
                <Link
                  href="/"
                  className="hover:text-[#415FFF] transition"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/products"
                  className="hover:text-[#415FFF] transition"
                >
                  Products
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="hover:text-[#415FFF] transition"
                >
                  Contact
                </Link>
              </li>

              <li>
                <Link
                  href="/dashboard"
                  className="hover:text-[#415FFF] transition"
                >
                  Dashboard
                </Link>
              </li>

            </ul>
          </div>


          {/* Categories */}
          <div>
            <h3 className="text-lg font-bold mb-5">
              Categories
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li>Mobile</li>
              <li>Speaker</li>
              <li>Charger</li>
              <li>Cable</li>
              <li>TV Remote</li>
              <li>Accessories</li>

            </ul>
          </div>


          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-5">
              Contact Us
            </h3>

            <div className="space-y-5">

              <div className="flex gap-3">

                <MapPin
                  size={20}
                  className="text-[#415FFF] shrink-0 mt-1"
                />

                <p className="text-gray-400">
                  Bashundhara City Shopping Complex,
                  Dhaka, Bangladesh
                </p>

              </div>


              <div className="flex gap-3">

                <Phone
                  size={20}
                  className="text-[#415FFF] shrink-0"
                />

                <a
                  href="tel:+8801700000000"
                  className="text-gray-400 hover:text-white transition"
                >
                  +880 1700-000000
                </a>

              </div>


              <div className="flex gap-3">

                <Mail
                  size={20}
                  className="text-[#415FFF] shrink-0"
                />

                <a
                  href="mailto:info@asiaelectronics.com"
                  className="text-gray-400 hover:text-white transition"
                >
                  info@asiaelectronics.com
                </a>

              </div>

            </div>
          </div>

        </div>

      </div>


      {/* Copyright */}
      <div className="border-t border-white/10">

        <div className="max-w-7xl mx-auto px-4 py-6">

          <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-gray-500">

            <p>
              © {new Date().getFullYear()} Asia Electronics.
              All rights reserved.
            </p>

            <p>
              Mobile • Electronics • Accessories
            </p>

          </div>

        </div>

      </div>

    </footer>
  );
}