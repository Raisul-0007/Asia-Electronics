"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import {
  ArrowLeft,
  Minus,
  Plus,
  ShoppingCart,
  Check,
  X,
} from "lucide-react";
import { useState } from "react";

import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";

export default function ProductDetailsPage() {
  const params = useParams();

  const { addToCart } = useCart();

  const [quantity, setQuantity] = useState(1);

  const product = products.find(
    (item) => item.id === Number(params.id)
  );

  // Product not found
  if (!product) {
    return (
      <>
        <Navbar />

        <main className="min-h-screen bg-[#f8f9ff] flex items-center justify-center px-4">

          <div className="text-center">

            <div className="text-6xl mb-5">
              📦
            </div>

            <h1 className="text-3xl font-black mb-3">
              Product Not Found
            </h1>

            <p className="text-gray-500 mb-6">
              Sorry, this product doesn't exist.
            </p>

            <Link
              href="/products"
              className="inline-flex items-center gap-2 bg-[#415FFF] text-white px-6 py-3 rounded-lg font-semibold"
            >
              <ArrowLeft size={18} />
              Back to Products
            </Link>

          </div>

        </main>
      </>
    );
  }

  const outOfStock = product.stock <= 0;

  // Related products
  const relatedProducts = products
    .filter(
      (item) =>
        item.category === product.category &&
        item.id !== product.id
    )
    .slice(0, 4);

  const handleIncrease = () => {
    if (quantity < product.stock) {
      setQuantity((prev) => prev + 1);
    }
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleAddToCart = () => {
    if (!outOfStock) {
      addToCart(product, quantity);
    }
  };

  return (
    <>
      <Navbar />

      <main className="bg-[#f8f9ff] min-h-screen">

        {/* ================= BREADCRUMB ================= */}

        <section className="max-w-7xl mx-auto px-4 pt-8">

          <div className="flex items-center gap-2 text-sm text-gray-500">

            <Link
              href="/"
              className="hover:text-[#415FFF]"
            >
              Home
            </Link>

            <span>/</span>

            <Link
              href="/products"
              className="hover:text-[#415FFF]"
            >
              Products
            </Link>

            <span>/</span>

            <span className="text-black">
              {product.name}
            </span>

          </div>

        </section>

        {/* ================= PRODUCT DETAILS ================= */}

        <section className="max-w-7xl mx-auto px-4 py-10">

          <div className="bg-white border rounded-3xl p-5 md:p-8">

            <div className="grid lg:grid-cols-2 gap-10">

              {/* ================= IMAGE ================= */}

              <div>

                <div className="bg-[#f5f6fa] rounded-2xl h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden">

                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain hover:scale-105 transition duration-500"
                  />

                </div>

              </div>

              {/* ================= INFORMATION ================= */}

              <div className="flex flex-col justify-center">

                {/* Brand */}

                <p className="text-[#415FFF] font-bold uppercase tracking-wide mb-2">
                  {product.brand}
                </p>

                {/* Name */}

                <h1 className="text-3xl md:text-5xl font-black text-black leading-tight">
                  {product.name}
                </h1>

                {/* Category */}

                <div className="mt-4">
                  <span className="bg-[#f0f2ff] text-[#415FFF] px-3 py-1 rounded-full text-sm font-semibold">
                    {product.category}
                  </span>
                </div>

                {/* Price */}

                <div className="flex items-center gap-4 mt-6">

                  <span className="text-3xl font-black">
                    ৳{product.price.toLocaleString()}
                  </span>

                  {product.oldPrice && (
                    <span className="text-gray-400 line-through text-lg">
                      ৳{product.oldPrice.toLocaleString()}
                    </span>
                  )}

                </div>

                {/* Stock */}

                <div className="mt-5">

                  {outOfStock ? (
                    <div className="flex items-center gap-2 text-red-500 font-semibold">
                      <X size={18} />
                      Out of Stock
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 text-green-600 font-semibold">
                      <Check size={18} />
                      In Stock — {product.stock} available
                    </div>
                  )}

                </div>

                {/* Description */}

                <p className="text-gray-600 leading-7 mt-6">
                  {product.description}
                </p>

                {/* Quantity */}

                {!outOfStock && (
                  <div className="mt-7">

                    <p className="font-bold mb-3">
                      Quantity
                    </p>

                    <div className="flex items-center border rounded-lg w-fit overflow-hidden">

                      <button
                        onClick={handleDecrease}
                        className="w-11 h-11 flex items-center justify-center hover:bg-gray-100"
                      >
                        <Minus size={18} />
                      </button>

                      <span className="w-14 text-center font-bold">
                        {quantity}
                      </span>

                      <button
                        onClick={handleIncrease}
                        className="w-11 h-11 flex items-center justify-center hover:bg-gray-100"
                      >
                        <Plus size={18} />
                      </button>

                    </div>

                  </div>
                )}

                {/* Buttons */}

                <div className="flex flex-col sm:flex-row gap-3 mt-7">

                  <button
                    disabled={outOfStock}
                    onClick={handleAddToCart}
                    className={`flex-1 flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-bold transition ${
                      outOfStock
                        ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                        : "bg-[#415FFF] text-white hover:bg-blue-700"
                    }`}
                  >
                    <ShoppingCart size={20} />

                    {outOfStock
                      ? "Out of Stock"
                      : "Add to Cart"}
                  </button>

                  <button
                    disabled={outOfStock}
                    onClick={handleAddToCart}
                    className={`flex-1 px-6 py-4 rounded-xl font-bold border-2 transition ${
                      outOfStock
                        ? "border-gray-200 text-gray-400 cursor-not-allowed"
                        : "border-[#415FFF] text-[#415FFF] hover:bg-[#415FFF] hover:text-white"
                    }`}
                  >
                    Buy Now
                  </button>

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* ================= SPECIFICATIONS ================= */}

        <section className="max-w-7xl mx-auto px-4 pb-16">

          <div className="bg-white border rounded-3xl p-6 md:p-8">

            <h2 className="text-2xl md:text-3xl font-black mb-7">
              Product Specifications
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">

              {Object.entries(
                product.specifications || {}
              ).map(([key, value]) => (

                <div
                  key={key}
                  className="border rounded-xl p-4"
                >

                  <p className="text-sm text-gray-400 capitalize">
                    {key.replace(/([A-Z])/g, " $1")}
                  </p>

                  <p className="font-bold mt-1">
                    {value}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </section>

        {/* ================= RELATED PRODUCTS ================= */}

        {relatedProducts.length > 0 && (
          <section className="max-w-7xl mx-auto px-4 pb-20">

            <div className="flex items-end justify-between mb-8">

              <div>

                <p className="text-[#415FFF] font-semibold">
                  You May Also Like
                </p>

                <h2 className="text-3xl font-black mt-1">
                  Related Products
                </h2>

              </div>

              <Link
                href="/products"
                className="hidden sm:block text-[#415FFF] font-semibold"
              >
                View All →
              </Link>

            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

              {relatedProducts.map((relatedProduct) => (
                <ProductCard
                  key={relatedProduct.id}
                  product={relatedProduct}
                />
              ))}

            </div>

          </section>
        )}

      </main>
    </>
  );
}