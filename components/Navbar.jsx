"use client";

import Link from "next/link";
import { Search, ShoppingCart, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      <div className="max-w-7xl mx-auto px-4">
        <div className="h-20 flex items-center justify-between">

          <Link href="/" className="text-2xl font-black">
            <span className="text-[#415FFF]">Asia</span>
            <span className="text-black"> Electronics</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="hover:text-[#415FFF]">
              Home
            </Link>

            <Link href="/products" className="hover:text-[#415FFF]">
              Products
            </Link>

            <Link href="/contact" className="hover:text-[#415FFF]">
              Contact
            </Link>

            <Link href="/dashboard" className="hover:text-[#415FFF]">
              Dashboard
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <button>
              <Search size={21} />
            </button>

            <button>
              <ShoppingCart size={21} />
            </button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <nav className="md:hidden pb-5 flex flex-col gap-4">
            <Link href="/" onClick={() => setOpen(false)}>
              Home
            </Link>

            <Link href="/products" onClick={() => setOpen(false)}>
              Products
            </Link>

            <Link href="/contact" onClick={() => setOpen(false)}>
              Contact
            </Link>

            <Link href="/dashboard" onClick={() => setOpen(false)}>
              Dashboard
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}