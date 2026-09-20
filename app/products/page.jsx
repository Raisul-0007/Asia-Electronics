"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  Search,
  SlidersHorizontal,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

const categories = [
  "All",
  "Mobile",
  "TV Remote",
  "Speaker",
  "Charger",
];

const PRODUCTS_PER_PAGE = 8;

export default function ProductsPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [brand, setBrand] = useState("All");
  const [maxPrice, setMaxPrice] = useState(100000);
  const [stock, setStock] = useState("All");
  const [sort, setSort] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Get unique brands
  const brands = useMemo(() => {
    return ["All", ...new Set(products.map((product) => product.brand))];
  }, []);

  // Maximum product price
  const highestPrice = useMemo(() => {
    return Math.max(...products.map((product) => product.price));
  }, []);

  // Filter products
  const filteredProducts = useMemo(() => {
    let result = products.filter((product) => {
      const searchText = search.toLowerCase().trim();

      const matchesSearch =
        product.name.toLowerCase().includes(searchText) ||
        product.brand.toLowerCase().includes(searchText) ||
        product.category.toLowerCase().includes(searchText);

      const matchesCategory =
        category === "All" || product.category === category;

      const matchesBrand =
        brand === "All" || product.brand === brand;

      const matchesPrice = product.price <= maxPrice;

      const matchesStock =
        stock === "All" ||
        (stock === "In Stock" && product.stock > 0) ||
        (stock === "Out of Stock" && product.stock <= 0);

      return (
        matchesSearch &&
        matchesCategory &&
        matchesBrand &&
        matchesPrice &&
        matchesStock
      );
    });

    // Sorting
    if (sort === "low-high") {
      result.sort((a, b) => a.price - b.price);
    }

    if (sort === "high-low") {
      result.sort((a, b) => b.price - a.price);
    }

    if (sort === "name") {
      result.sort((a, b) => a.name.localeCompare(b.name));
    }

    return result;
  }, [
    search,
    category,
    brand,
    maxPrice,
    stock,
    sort,
  ]);

  // Pagination
  const totalPages = Math.ceil(
    filteredProducts.length / PRODUCTS_PER_PAGE
  );

  const startIndex =
    (currentPage - 1) * PRODUCTS_PER_PAGE;

  const paginatedProducts = filteredProducts.slice(
    startIndex,
    startIndex + PRODUCTS_PER_PAGE
  );

  // Reset page when filters change
  const handleCategoryChange = (value) => {
    setCategory(value);
    setCurrentPage(1);
  };

  const handleBrandChange = (value) => {
    setBrand(value);
    setCurrentPage(1);
  };

  const handlePriceChange = (value) => {
    setMaxPrice(Number(value));
    setCurrentPage(1);
  };

  const handleStockChange = (value) => {
    setStock(value);
    setCurrentPage(1);
  };

  const handleSearchChange = (value) => {
    setSearch(value);
    setCurrentPage(1);
  };

  const handleSortChange = (value) => {
    setSort(value);
    setCurrentPage(1);
  };

  // Clear all filters
  const clearFilters = () => {
    setSearch("");
    setCategory("All");
    setBrand("All");
    setMaxPrice(highestPrice);
    setStock("All");
    setSort("default");
    setCurrentPage(1);
  };

  const hasActiveFilters =
    search !== "" ||
    category !== "All" ||
    brand !== "All" ||
    maxPrice !== highestPrice ||
    stock !== "All" ||
    sort !== "default";

  return (
    <>
      <Navbar />

      <main className="bg-[#f8f9ff] min-h-screen">

        {/* ================= HEADER ================= */}
        <section className="bg-black text-white py-14">
          <div className="max-w-7xl mx-auto px-4">

            <p className="text-[#415FFF] font-semibold mb-3">
              Asia Electronics
            </p>

            <h1 className="text-4xl md:text-5xl font-black">
              Our Products
            </h1>

            <p className="text-gray-400 mt-3 max-w-xl">
              Explore mobiles, TV remotes, speakers,
              chargers and other electronics.
            </p>

            <div className="mt-6 text-sm text-gray-400">
              Home / Products
            </div>

          </div>
        </section>

        {/* ================= SEARCH ================= */}
        <section className="max-w-7xl mx-auto px-4 pt-8">

          <div className="bg-white rounded-2xl border p-4">

            <div className="flex flex-col md:flex-row gap-4">

              {/* Search */}
              <div className="relative flex-1">

                <Search
                  size={20}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  type="text"
                  value={search}
                  onChange={(e) =>
                    handleSearchChange(e.target.value)
                  }
                  placeholder="Search mobile, speaker, charger..."
                  className="w-full border rounded-xl py-3.5 pl-12 pr-4 outline-none focus:border-[#415FFF]"
                />

                {search && (
                  <button
                    onClick={() => handleSearchChange("")}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                  >
                    <X size={18} />
                  </button>
                )}

              </div>

              {/* Mobile Filter Button */}
              <button
                onClick={() =>
                  setMobileFilterOpen(!mobileFilterOpen)
                }
                className="md:hidden flex items-center justify-center gap-2 bg-[#415FFF] text-white px-5 py-3 rounded-xl font-semibold"
              >
                <SlidersHorizontal size={18} />
                Filters
              </button>

            </div>

          </div>

        </section>

        {/* ================= MAIN CONTENT ================= */}
        <section className="max-w-7xl mx-auto px-4 py-8">

          <div className="grid lg:grid-cols-[260px_1fr] gap-8">

            {/* ================= SIDEBAR ================= */}
            <aside
              className={`
                ${
                  mobileFilterOpen
                    ? "block"
                    : "hidden"
                }
                lg:block
              `}
            >

              <div className="bg-white border rounded-2xl p-5 sticky top-24">

                <div className="flex items-center justify-between mb-6">

                  <h2 className="text-xl font-bold">
                    Filters
                  </h2>

                  {hasActiveFilters && (
                    <button
                      onClick={clearFilters}
                      className="text-sm text-[#415FFF] font-semibold"
                    >
                      Clear All
                    </button>
                  )}

                </div>

                {/* CATEGORY */}
                <div className="mb-7">

                  <h3 className="font-bold mb-4">
                    Category
                  </h3>

                  <div className="space-y-3">

                    {categories.map((item) => (
                      <button
                        key={item}
                        onClick={() =>
                          handleCategoryChange(item)
                        }
                        className={`w-full text-left px-3 py-2 rounded-lg transition ${
                          category === item
                            ? "bg-[#415FFF] text-white"
                            : "hover:bg-[#f0f2ff]"
                        }`}
                      >
                        {item}
                      </button>
                    ))}

                  </div>

                </div>

                {/* BRAND */}
                <div className="mb-7">

                  <h3 className="font-bold mb-4">
                    Brand
                  </h3>

                  <select
                    value={brand}
                    onChange={(e) =>
                      handleBrandChange(e.target.value)
                    }
                    className="w-full border rounded-lg px-3 py-3 outline-none focus:border-[#415FFF]"
                  >
                    {brands.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>

                </div>

                {/* PRICE */}
                <div className="mb-7">

                  <div className="flex justify-between mb-4">

                    <h3 className="font-bold">
                      Maximum Price
                    </h3>

                    <span className="text-[#415FFF] font-semibold">
                      ৳{maxPrice.toLocaleString()}
                    </span>

                  </div>

                  <input
                    type="range"
                    min="0"
                    max={highestPrice}
                    step="500"
                    value={maxPrice}
                    onChange={(e) =>
                      handlePriceChange(e.target.value)
                    }
                    className="w-full accent-[#415FFF]"
                  />

                  <div className="flex justify-between text-xs text-gray-400 mt-2">
                    <span>৳0</span>
                    <span>
                      ৳{highestPrice.toLocaleString()}
                    </span>
                  </div>

                </div>

                {/* STOCK */}
                <div className="mb-7">

                  <h3 className="font-bold mb-4">
                    Availability
                  </h3>

                  <div className="space-y-3">

                    {[
                      "All",
                      "In Stock",
                      "Out of Stock",
                    ].map((item) => (

                      <label
                        key={item}
                        className="flex items-center gap-3 cursor-pointer"
                      >

                        <input
                          type="radio"
                          name="stock"
                          value={item}
                          checked={stock === item}
                          onChange={(e) =>
                            handleStockChange(
                              e.target.value
                            )
                          }
                          className="accent-[#415FFF]"
                        />

                        <span className="text-sm">
                          {item}
                        </span>

                      </label>

                    ))}

                  </div>

                </div>

                {/* SORT */}
                <div>

                  <h3 className="font-bold mb-4">
                    Sort By
                  </h3>

                  <select
                    value={sort}
                    onChange={(e) =>
                      handleSortChange(e.target.value)
                    }
                    className="w-full border rounded-lg px-3 py-3 outline-none focus:border-[#415FFF]"
                  >
                    <option value="default">
                      Default
                    </option>

                    <option value="low-high">
                      Price: Low to High
                    </option>

                    <option value="high-low">
                      Price: High to Low
                    </option>

                    <option value="name">
                      Name: A-Z
                    </option>
                  </select>

                </div>

              </div>

            </aside>

            {/* ================= PRODUCTS ================= */}
            <div>

              {/* TOP BAR */}
              <div className="bg-white border rounded-2xl p-4 mb-6">

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">

                  <div>
                    <h2 className="font-bold text-lg">
                      Products
                    </h2>

                    <p className="text-sm text-gray-500">
                      Showing{" "}
                      {filteredProducts.length === 0
                        ? 0
                        : startIndex + 1}
                      -
                      {Math.min(
                        startIndex +
                          PRODUCTS_PER_PAGE,
                        filteredProducts.length
                      )}{" "}
                      of {filteredProducts.length} products
                    </p>
                  </div>

                  {/* Desktop sort */}
                  <select
                    value={sort}
                    onChange={(e) =>
                      handleSortChange(e.target.value)
                    }
                    className="border rounded-lg px-4 py-2.5 outline-none focus:border-[#415FFF]"
                  >
                    <option value="default">
                      Sort: Default
                    </option>

                    <option value="low-high">
                      Price: Low to High
                    </option>

                    <option value="high-low">
                      Price: High to Low
                    </option>

                    <option value="name">
                      Name: A-Z
                    </option>
                  </select>

                </div>

              </div>

              {/* PRODUCT GRID */}
              {paginatedProducts.length > 0 ? (

                <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">

                  {paginatedProducts.map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                    />
                  ))}

                </div>

              ) : (

                /* NO PRODUCTS */
                <div className="bg-white border rounded-2xl py-20 text-center">

                  <div className="text-5xl mb-5">
                    📦
                  </div>

                  <h2 className="text-2xl font-bold mb-2">
                    No Products Found
                  </h2>

                  <p className="text-gray-500 mb-6">
                    Try changing your search or filters.
                  </p>

                  <button
                    onClick={clearFilters}
                    className="bg-[#415FFF] text-white px-6 py-3 rounded-lg font-semibold"
                  >
                    Clear Filters
                  </button>

                </div>

              )}

              {/* ================= PAGINATION ================= */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center gap-2 mt-10">

                  {/* Previous */}
                  <button
                    disabled={currentPage === 1}
                    onClick={() =>
                      setCurrentPage((prev) => prev - 1)
                    }
                    className="w-10 h-10 rounded-lg border flex items-center justify-center disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#415FFF] hover:text-white transition"
                  >
                    <ChevronLeft size={18} />
                  </button>

                  {/* Page Numbers */}
                  {Array.from(
                    { length: totalPages },
                    (_, index) => index + 1
                  ).map((page) => (

                    <button
                      key={page}
                      onClick={() =>
                        setCurrentPage(page)
                      }
                      className={`w-10 h-10 rounded-lg font-semibold transition ${
                        currentPage === page
                          ? "bg-[#415FFF] text-white"
                          : "border bg-white hover:bg-[#f0f2ff]"
                      }`}
                    >
                      {page}
                    </button>

                  ))}

                  {/* Next */}
                  <button
                    disabled={
                      currentPage === totalPages
                    }
                    onClick={() =>
                      setCurrentPage((prev) => prev + 1)
                    }
                    className="w-10 h-10 rounded-lg border flex items-center justify-center disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#415FFF] hover:text-white transition"
                  >
                    <ChevronRight size={18} />
                  </button>

                </div>
              )}

            </div>

          </div>

        </section>

        {/* ================= CTA ================= */}
        <section className="bg-[#415FFF] text-white py-16 mt-10">

          <div className="max-w-4xl mx-auto px-4 text-center">

            <h2 className="text-3xl md:text-4xl font-black mb-4">
              Can't Find What You're Looking For?
            </h2>

            <p className="text-blue-100 mb-7">
              Contact Asia Electronics and our team
              will help you find the right product.
            </p>

            <Link
              href="/contact"
              className="inline-block bg-white text-black px-7 py-3 rounded-xl font-bold hover:bg-gray-100 transition"
            >
              Contact Us
            </Link>

          </div>

        </section>

      </main>
    </>
  );
}