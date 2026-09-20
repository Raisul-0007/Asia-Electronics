import Link from "next/link";
import {
  Facebook,
  Instagram,
  Youtube,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white">

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-16">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div>

            <Link
              href="/"
              className="text-2xl font-black inline-block mb-5"
            >
              <span className="text-[#415FFF]">
                Asia
              </span>{" "}
              Electronics
            </Link>

            <p className="text-gray-400 leading-7 max-w-sm">
              Your trusted destination for mobile phones,
              electronics and accessories. Quality products,
              competitive prices and reliable customer service.
            </p>

            {/* Social */}
            <div className="flex items-center gap-3 mt-6">

              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#415FFF] transition"
              >
                <Facebook size={18} />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#415FFF] transition"
              >
                <Instagram size={18} />
              </a>

              <a
                href="#"
                aria-label="YouTube"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#415FFF] transition"
              >
                <Youtube size={18} />
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
                  className="hover:text-white transition"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/products"
                  className="hover:text-white transition"
                >
                  Products
                </Link>
              </li>

              <li>
                <Link
                  href="/cart"
                  className="hover:text-white transition"
                >
                  Shopping Cart
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition"
                >
                  Contact Us
                </Link>
              </li>

              <li>
                <Link
                  href="/dashboard"
                  className="hover:text-white transition"
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

              <li>Mobile Phones</li>
              <li>Chargers</li>
              <li>Speakers</li>
              <li>TV Remote</li>
              <li>Earphones</li>
              <li>Cables & Accessories</li>

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

                <p className="text-gray-400 leading-6">
                  Bashundhara City,
                  <br />
                  Panthapath, Dhaka
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
                  href="mailto:support@asiaelectronics.com"
                  className="text-gray-400 hover:text-white transition break-all"
                >
                  support@asiaelectronics.com
                </a>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-white/10">

        <div className="max-w-7xl mx-auto px-4 py-6">

          <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-gray-500">

            <p>
              © {new Date().getFullYear()} Asia Electronics.
              All rights reserved.
            </p>

            <div className="flex items-center gap-5">
              <span>Privacy Policy</span>
              <span>Terms & Conditions</span>
            </div>

          </div>

        </div>

      </div>

    </footer>
  );
}