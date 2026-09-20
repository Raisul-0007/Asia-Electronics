"use client";

import Link from "next/link";
import {
  Minus,
  Plus,
  Trash2,
  ArrowLeft,
  ShoppingBag,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    clearCart,
    cartTotal,
  } = useCart();

  if (cartItems.length === 0) {
    return (
      <>
        <Navbar />

        <main className="min-h-screen bg-[#f8f9ff] flex items-center justify-center px-4">

          <div className="text-center">

            <div className="w-20 h-20 rounded-full bg-[#f0f2ff] flex items-center justify-center mx-auto mb-6">
              <ShoppingBag
                size={35}
                className="text-[#415FFF]"
              />
            </div>

            <h1 className="text-3xl font-black mb-3">
              Your Cart is Empty
            </h1>

            <p className="text-gray-500 mb-7">
              You haven't added any products yet.
            </p>

            <Link
              href="/products"
              className="inline-flex items-center gap-2 bg-[#415FFF] text-white px-6 py-3 rounded-xl font-bold"
            >
              Browse Products
            </Link>

          </div>

        </main>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main className="bg-[#f8f9ff] min-h-screen">

        <section className="max-w-7xl mx-auto px-4 py-10">

          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-[#415FFF] mb-7"
          >
            <ArrowLeft size={18} />
            Continue Shopping
          </Link>

          <h1 className="text-4xl font-black mb-8">
            Shopping Cart
          </h1>

          <div className="grid lg:grid-cols-[1fr_350px] gap-8">

            {/* Cart Products */}

            <div className="space-y-4">

              {cartItems.map((item) => (

                <div
                  key={item.id}
                  className="bg-white border rounded-2xl p-4 md:p-5"
                >

                  <div className="flex gap-5">

                    {/* Image */}

                    <Link
                      href={`/products/${item.id}`}
                      className="w-28 h-28 md:w-36 md:h-36 bg-gray-100 rounded-xl flex-shrink-0 overflow-hidden"
                    >

                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-contain"
                      />

                    </Link>

                    {/* Info */}

                    <div className="flex-1">

                      <div className="flex justify-between gap-3">

                        <div>

                          <p className="text-[#415FFF] text-sm font-semibold">
                            {item.brand}
                          </p>

                          <Link
                            href={`/products/${item.id}`}
                          >
                            <h2 className="font-bold text-lg md:text-xl hover:text-[#415FFF]">
                              {item.name}
                            </h2>
                          </Link>

                        </div>

                        <button
                          onClick={() =>
                            removeFromCart(item.id)
                          }
                          className="text-gray-400 hover:text-red-500"
                        >
                          <Trash2 size={19} />
                        </button>

                      </div>

                      <p className="font-black text-lg mt-3">
                        ৳{item.price.toLocaleString()}
                      </p>

                      {/* Quantity */}

                      <div className="flex items-center border rounded-lg w-fit mt-4">

                        <button
                          onClick={() =>
                            updateQuantity(
                              item.id,
                              item.quantity - 1
                            )
                          }
                          disabled={item.quantity <= 1}
                          className="w-9 h-9 flex items-center justify-center disabled:opacity-40"
                        >
                          <Minus size={16} />
                        </button>

                        <span className="w-10 text-center font-bold">
                          {item.quantity}
                        </span>

                        <button
                          onClick={() =>
                            updateQuantity(
                              item.id,
                              item.quantity + 1
                            )
                          }
                          disabled={
                            item.quantity >= item.stock
                          }
                          className="w-9 h-9 flex items-center justify-center disabled:opacity-40"
                        >
                          <Plus size={16} />
                        </button>

                      </div>

                    </div>

                  </div>

                </div>

              ))}

              {/* Clear */}

              <button
                onClick={clearCart}
                className="text-red-500 font-semibold text-sm"
              >
                Clear Cart
              </button>

            </div>

            {/* Summary */}

            <div>

              <div className="bg-white border rounded-2xl p-6 sticky top-24">

                <h2 className="text-xl font-black mb-6">
                  Order Summary
                </h2>

                <div className="flex justify-between mb-4">
                  <span className="text-gray-500">
                    Subtotal
                  </span>

                  <span className="font-semibold">
                    ৳{cartTotal.toLocaleString()}
                  </span>
                </div>

                <div className="flex justify-between mb-4">
                  <span className="text-gray-500">
                    Delivery
                  </span>

                  <span className="font-semibold">
                    Calculated later
                  </span>
                </div>

                <div className="border-t pt-4 flex justify-between text-xl font-black">

                  <span>Total</span>

                  <span>
                    ৳{cartTotal.toLocaleString()}
                  </span>

                </div>

                <button
                  className="w-full mt-6 bg-[#415FFF] text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition"
                >
                  Proceed to Checkout
                </button>

              </div>

            </div>

          </div>

        </section>

      </main>
    </>
  );
}