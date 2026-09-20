"use client";

import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  const outOfStock = product.stock <= 0;

  const handleAddToCart = () => {
    if (!outOfStock) {
      addToCart(product, 1);
    }
  };

  return (
    <div className="bg-white border rounded-2xl overflow-hidden group hover:shadow-xl transition">

      {/* Image */}

      <Link href={`/products/${product.id}`}>

        <div className="h-64 bg-gray-100 overflow-hidden">

          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain group-hover:scale-105 transition duration-500"
          />

        </div>

      </Link>

      {/* Content */}

      <div className="p-5">

        <p className="text-sm text-[#415FFF] font-semibold">
          {product.brand}
        </p>

        <Link href={`/products/${product.id}`}>

          <h3 className="font-bold text-lg mt-1 hover:text-[#415FFF]">
            {product.name}
          </h3>

        </Link>

        {/* Price */}

        <div className="flex items-center gap-3 mt-3">

          <span className="font-black text-xl">
            ৳{product.price.toLocaleString()}
          </span>

          {product.oldPrice && (
            <span className="text-gray-400 line-through text-sm">
              ৳{product.oldPrice.toLocaleString()}
            </span>
          )}

        </div>

        {/* Stock */}

        <div className="mt-3">

          {outOfStock ? (
            <span className="text-red-500 text-sm font-semibold">
              Out of Stock
            </span>
          ) : (
            <span className="text-green-600 text-sm font-semibold">
              In Stock ({product.stock})
            </span>
          )}

        </div>

        {/* Add to Cart */}

        <button
          disabled={outOfStock}
          onClick={handleAddToCart}
          className={`w-full mt-4 py-3 rounded-lg flex items-center justify-center gap-2 font-semibold transition ${
            outOfStock
              ? "bg-gray-200 text-gray-400 cursor-not-allowed"
              : "bg-[#415FFF] text-white hover:bg-blue-700"
          }`}
        >

          <ShoppingCart size={18} />

          {outOfStock
            ? "Out of Stock"
            : "Add to Cart"}

        </button>

      </div>

    </div>
  );
}