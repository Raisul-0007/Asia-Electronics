"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

import {
  Package,
  Boxes,
  Tags,
  Users,
  Plus,
  Search,
  Pencil,
  Trash2,
  Minus,
  X,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useProducts } from "@/context/ProductContext";

export default function DashboardPage() {
  const {
    products,
    categories,
    brands,
    deleteProduct,
    updateStock,
    addCategory,
    deleteCategory,
    addBrand,
    deleteBrand,
  } = useProducts();

  const [search, setSearch] = useState("");

  const [categoryInput, setCategoryInput] =
    useState("");

  const [brandInput, setBrandInput] =
    useState("");

  const [stockProduct, setStockProduct] =
    useState(null);

  const [stockValue, setStockValue] =
    useState("");

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const value = search.toLowerCase();

      return (
        product.name.toLowerCase().includes(value) ||
        product.brand.toLowerCase().includes(value) ||
        product.category.toLowerCase().includes(value)
      );
    });
  }, [products, search]);

  const totalStock = products.reduce(
    (total, product) =>
      total + Number(product.stock || 0),
    0
  );

  const outOfStock = products.filter(
    (product) => product.stock === 0
  ).length;

  const handleDelete = (product) => {
    const confirmed = window.confirm(
      `Are you sure you want to delete "${product.name}"?`
    );

    if (confirmed) {
      deleteProduct(product.id);
    }
  };

  const openStockModal = (product) => {
    setStockProduct(product);
    setStockValue(product.stock);
  };

  const handleStockUpdate = () => {
    if (!stockProduct) return;

    updateStock(
      stockProduct.id,
      Number(stockValue)
    );

    setStockProduct(null);
    setStockValue("");
  };

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gray-50">

        {/* Header */}
        <section className="bg-[#415FFF] text-white">
          <div className="max-w-7xl mx-auto px-4 py-12">

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">

              <div>
                <p className="text-blue-100 text-sm font-semibold uppercase tracking-widest">
                  Admin Panel
                </p>

                <h1 className="text-3xl md:text-4xl font-black mt-2">
                  Asia Electronics Dashboard
                </h1>

                <p className="text-blue-100 mt-2">
                  Manage products, stock, categories and brands.
                </p>
              </div>

              <Link
                href="/dashboard/products/add"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#415FFF] px-5 py-3 rounded-xl font-bold hover:bg-gray-100 transition"
              >
                <Plus size={19} />
                Add Product
              </Link>

            </div>

          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 py-10">

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

            <StatCard
              icon={<Package />}
              title="Total Products"
              value={products.length}
            />

            <StatCard
              icon={<Boxes />}
              title="Total Stock"
              value={totalStock}
            />

            <StatCard
              icon={<Tags />}
              title="Categories"
              value={categories.length}
            />

            <StatCard
              icon={<Users />}
              title="Brands"
              value={brands.length}
            />

          </div>

          {/* Stock warning */}
          {outOfStock > 0 && (
            <div className="mt-6 bg-red-50 border border-red-200 rounded-2xl p-5">

              <p className="font-bold text-red-700">
                Stock Alert
              </p>

              <p className="text-red-600 text-sm mt-1">
                {outOfStock} product
                {outOfStock > 1 ? "s" : ""} currently
                out of stock.
              </p>

            </div>
          )}

          {/* Products */}
          <section className="mt-10">

            <div className="bg-white border rounded-2xl overflow-hidden">

              <div className="p-6 border-b">

                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

                  <div>
                    <h2 className="text-2xl font-black">
                      Product Management
                    </h2>

                    <p className="text-gray-500 text-sm mt-1">
                      Add, edit, delete and manage product stock.
                    </p>
                  </div>

                  <div className="relative w-full md:w-80">

                    <Search
                      size={18}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                    />

                    <input
                      type="text"
                      placeholder="Search products..."
                      value={search}
                      onChange={(e) =>
                        setSearch(e.target.value)
                      }
                      className="w-full h-11 pl-10 pr-4 border rounded-xl outline-none focus:border-[#415FFF]"
                    />

                  </div>

                </div>

              </div>

              {/* Desktop Table */}
              <div className="hidden lg:block overflow-x-auto">

                <table className="w-full">

                  <thead className="bg-gray-50 border-b">

                    <tr>
                      <th className="text-left p-4 text-sm">
                        Product
                      </th>

                      <th className="text-left p-4 text-sm">
                        Brand
                      </th>

                      <th className="text-left p-4 text-sm">
                        Category
                      </th>

                      <th className="text-left p-4 text-sm">
                        Price
                      </th>

                      <th className="text-left p-4 text-sm">
                        Stock
                      </th>

                      <th className="text-right p-4 text-sm">
                        Actions
                      </th>
                    </tr>

                  </thead>

                  <tbody>

                    {filteredProducts.map((product) => (

                      <tr
                        key={product.id}
                        className="border-b last:border-0 hover:bg-gray-50"
                      >

                        <td className="p-4">

                          <div className="flex items-center gap-3">

                            <img
                              src={product.image}
                              alt={product.name}
                              className="w-12 h-12 object-contain rounded-lg border bg-white"
                            />

                            <div>
                              <p className="font-bold">
                                {product.name}
                              </p>

                              <p className="text-xs text-gray-500">
                                ID: {product.id}
                              </p>
                            </div>

                          </div>

                        </td>

                        <td className="p-4 text-sm">
                          {product.brand}
                        </td>

                        <td className="p-4 text-sm">
                          {product.category}
                        </td>

                        <td className="p-4 font-semibold">
                          ৳{product.price.toLocaleString()}
                        </td>

                        <td className="p-4">

                          <button
                            onClick={() =>
                              openStockModal(product)
                            }
                            className={`px-3 py-1.5 rounded-lg text-sm font-bold ${
                              product.stock === 0
                                ? "bg-red-100 text-red-700"
                                : product.stock <= 5
                                ? "bg-yellow-100 text-yellow-700"
                                : "bg-green-100 text-green-700"
                            }`}
                          >
                            {product.stock} in stock
                          </button>

                        </td>

                        <td className="p-4">

                          <div className="flex justify-end gap-2">

                            <Link
                              href={`/dashboard/products/edit/${product.id}`}
                              className="w-9 h-9 rounded-lg bg-blue-50 text-[#415FFF] flex items-center justify-center hover:bg-[#415FFF] hover:text-white transition"
                            >
                              <Pencil size={16} />
                            </Link>

                            <button
                              onClick={() =>
                                handleDelete(product)
                              }
                              className="w-9 h-9 rounded-lg bg-red-50 text-red-600 flex items-center justify-center hover:bg-red-600 hover:text-white transition"
                            >
                              <Trash2 size={16} />
                            </button>

                          </div>

                        </td>

                      </tr>

                    ))}

                  </tbody>

                </table>

              </div>

              {/* Mobile Product Cards */}
              <div className="lg:hidden divide-y">

                {filteredProducts.map((product) => (

                  <div
                    key={product.id}
                    className="p-5"
                  >

                    <div className="flex gap-4">

                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-20 h-20 object-contain border rounded-xl"
                      />

                      <div className="flex-1">

                        <h3 className="font-bold">
                          {product.name}
                        </h3>

                        <p className="text-sm text-gray-500">
                          {product.brand} • {product.category}
                        </p>

                        <p className="font-bold mt-2">
                          ৳{product.price.toLocaleString()}
                        </p>

                        <button
                          onClick={() =>
                            openStockModal(product)
                          }
                          className="text-sm font-bold text-[#415FFF] mt-1"
                        >
                          Stock: {product.stock}
                        </button>

                      </div>

                    </div>

                    <div className="flex gap-2 mt-4">

                      <Link
                        href={`/dashboard/products/edit/${product.id}`}
                        className="flex-1 h-10 rounded-lg bg-[#415FFF] text-white flex items-center justify-center gap-2 text-sm font-bold"
                      >
                        <Pencil size={15} />
                        Edit
                      </Link>

                      <button
                        onClick={() =>
                          handleDelete(product)
                        }
                        className="flex-1 h-10 rounded-lg bg-red-50 text-red-600 flex items-center justify-center gap-2 text-sm font-bold"
                      >
                        <Trash2 size={15} />
                        Delete
                      </button>

                    </div>

                  </div>

                ))}

              </div>

              {filteredProducts.length === 0 && (
                <div className="py-16 text-center text-gray-500">
                  No products found.
                </div>
              )}

            </div>

          </section>

          {/* Category & Brand */}
          <section className="grid lg:grid-cols-2 gap-6 mt-10">

            {/* Categories */}
            <ManagementCard
              title="Category Management"
              placeholder="New category"
              value={categoryInput}
              setValue={setCategoryInput}
              onAdd={() => {
                addCategory(categoryInput);
                setCategoryInput("");
              }}
              items={categories}
              onDelete={deleteCategory}
            />

            {/* Brands */}
            <ManagementCard
              title="Brand Management"
              placeholder="New brand"
              value={brandInput}
              setValue={setBrandInput}
              onAdd={() => {
                addBrand(brandInput);
                setBrandInput("");
              }}
              items={brands}
              onDelete={deleteBrand}
            />

          </section>

        </div>

      </main>

      <Footer />

      {/* Stock Modal */}
      {stockProduct && (
        <div className="fixed inset-0 z-[100] bg-black/50 flex items-center justify-center p-4">

          <div className="bg-white w-full max-w-md rounded-2xl p-6">

            <div className="flex items-center justify-between mb-6">

              <div>
                <h3 className="text-xl font-black">
                  Update Stock
                </h3>

                <p className="text-sm text-gray-500 mt-1">
                  {stockProduct.name}
                </p>
              </div>

              <button
                onClick={() => setStockProduct(null)}
                className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center"
              >
                <X size={18} />
              </button>

            </div>

            <label className="block text-sm font-semibold mb-2">
              Stock Quantity
            </label>

            <input
              type="number"
              min="0"
              value={stockValue}
              onChange={(e) =>
                setStockValue(e.target.value)
              }
              className="w-full h-12 px-4 border rounded-xl outline-none focus:border-[#415FFF]"
            />

            <div className="flex gap-3 mt-6">

              <button
                onClick={() => setStockProduct(null)}
                className="flex-1 h-11 border rounded-xl font-bold"
              >
                Cancel
              </button>

              <button
                onClick={handleStockUpdate}
                className="flex-1 h-11 bg-[#415FFF] text-white rounded-xl font-bold"
              >
                Update Stock
              </button>

            </div>

          </div>

        </div>
      )}

    </>
  );
}

function StatCard({
  icon,
  title,
  value,
}) {
  return (
    <div className="bg-white border rounded-2xl p-6">

      <div className="flex items-center justify-between">

        <div>
          <p className="text-gray-500 text-sm">
            {title}
          </p>

          <p className="text-3xl font-black mt-2">
            {value}
          </p>
        </div>

        <div className="w-12 h-12 bg-[#415FFF]/10 text-[#415FFF] rounded-xl flex items-center justify-center">
          {icon}
        </div>

      </div>

    </div>
  );
}

function ManagementCard({
  title,
  placeholder,
  value,
  setValue,
  onAdd,
  items,
  onDelete,
}) {
  return (
    <div className="bg-white border rounded-2xl p-6">

      <h2 className="text-xl font-black mb-5">
        {title}
      </h2>

      <div className="flex gap-2">

        <input
          type="text"
          value={value}
          onChange={(e) =>
            setValue(e.target.value)
          }
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              onAdd();
            }
          }}
          placeholder={placeholder}
          className="flex-1 h-11 px-4 border rounded-xl outline-none focus:border-[#415FFF]"
        />

        <button
          onClick={onAdd}
          className="w-11 h-11 bg-[#415FFF] text-white rounded-xl flex items-center justify-center"
        >
          <Plus size={20} />
        </button>

      </div>

      <div className="flex flex-wrap gap-2 mt-5">

        {items.map((item) => (

          <div
            key={item}
            className="flex items-center gap-2 bg-gray-100 rounded-lg pl-3 pr-2 py-2 text-sm"
          >

            <span className="font-medium">
              {item}
            </span>

            <button
              onClick={() => onDelete(item)}
              className="text-gray-400 hover:text-red-600"
            >
              <Minus size={15} />
            </button>

          </div>

        ))}

      </div>

    </div>
  );
}