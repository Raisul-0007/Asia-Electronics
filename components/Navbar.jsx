"use client";

import Link from "next/link";
import {
  Search,
  ShoppingCart,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";

import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const { cartCount } = useCart();

  return (
    <header className="sticky top-0 z-50 bg-white border-b">

      <div className="max-w-7xl mx-auto px-4">

        <div className="h-20 flex items-center justify-between">

          {/* Logo */}

          <Link
            href="/"
            className="text-2xl font-black"
          >
            <span className="text-[#415FFF]">
              Asia
            </span>

            <span className="text-black">
              {" "}Electronics
            </span>
          </Link>

          {/* Desktop Menu */}

          <nav className="hidden md:flex items-center gap-8">

            <Link
              href="/"
              className="hover:text-[#415FFF] transition"
            >
              Home
            </Link>

            <Link
              href="/products"
              className="hover:text-[#415FFF] transition"
            >
              Products
            </Link>

            <Link
              href="/contact"
              className="hover:text-[#415FFF] transition"
            >
              Contact
            </Link>

            <Link
              href="/dashboard"
              className="hover:text-[#415FFF] transition"
            >
              Dashboard
            </Link>

          </nav>

          {/* Right */}

          <div className="hidden md:flex items-center gap-5">

            <button>
              <Search size={21} />
            </button>

            <Link
              href="/cart"
              className="relative"
            >

              <ShoppingCart size={22} />

              {cartCount > 0 && (
                <span className="absolute -top-3 -right-3 bg-[#415FFF] text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}

            </Link>

          </div>

          {/* Mobile Menu Button */}

          <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>

        </div>

        {/* Mobile Menu */}

        {open && (
          <nav className="md:hidden pb-5 flex flex-col gap-4">

            <Link
              href="/"
              onClick={() => setOpen(false)}
            >
              Home
            </Link>

            <Link
              href="/products"
              onClick={() => setOpen(false)}
            >
              Products
            </Link>

            <Link
              href="/cart"
              onClick={() => setOpen(false)}
              className="flex items-center gap-2"
            >
              <ShoppingCart size={18} />
              Cart ({cartCount})
            </Link>

            <Link
              href="/contact"
              onClick={() => setOpen(false)}
            >
              Contact
            </Link>

            <Link
              href="/dashboard"
              onClick={() => setOpen(false)}
            >
              Dashboard
            </Link>

          </nav>
        )}

      </div>

    </header>
  );
}