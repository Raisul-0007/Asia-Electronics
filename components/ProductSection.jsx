"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import ProductCard from "./ProductCard";
import { useProducts } from "@/context/ProductContext";

export default function ProductSection() {
  const { products } = useProducts();

  const featuredProducts = products.slice(0, 8);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-10">

          <div>
            <p className="text-[#415FFF] font-bold uppercase tracking-widest text-sm mb-2">
              Featured Products
            </p>

            <h2 className="text-3xl md:text-4xl font-black">
              Popular Products
            </h2>

            <p className="text-gray-500 mt-3">
              Explore our latest mobiles, electronics and accessories.
            </p>
          </div>

          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-[#415FFF] font-bold hover:gap-3 transition-all"
          >
            View All Products
            <ArrowRight size={18} />
          </Link>

        </div>

        {/* Products */}
        {featuredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>
        ) : (
          <div className="py-16 text-center border rounded-2xl">
            <p className="text-gray-500">
              No products available.
            </p>
          </div>
        )}

      </div>
    </section>
  );
}