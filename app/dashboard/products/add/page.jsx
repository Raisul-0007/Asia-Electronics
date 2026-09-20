"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Save } from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useProducts } from "@/context/ProductContext";

export default function AddProductPage() {
  const router = useRouter();

  const {
    addProduct,
    categories,
    brands,
  } = useProducts();

  const [form, setForm] = useState({
    name: "",
    brand: "",
    category: "",
    price: "",
    oldPrice: "",
    stock: "",
    image: "",
    description: "",
    display: "",
    ram: "",
    storage: "",
    camera: "",
    battery: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const specifications = {};

    const specificationFields = [
      "display",
      "ram",
      "storage",
      "camera",
      "battery",
    ];

    specificationFields.forEach((field) => {
      if (form[field]) {
        specifications[field] = form[field];
      }
    });

    addProduct({
      name: form.name,
      brand: form.brand,
      category: form.category,
      price: form.price,
      oldPrice: form.oldPrice,
      stock: form.stock,
      image:
        form.image ||
        "/images/products/placeholder.jpg",
      description: form.description,
      specifications,
    });

    router.push("/dashboard");
  };

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gray-50 py-10">

        <div className="max-w-4xl mx-auto px-4">

          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-gray-600 hover:text-[#415FFF] mb-6"
          >
            <ArrowLeft size={18} />
            Back
          </button>

          <div className="bg-white border rounded-2xl p-6 md:p-8">

            <div className="mb-8">
              <h1 className="text-3xl font-black">
                Add New Product
              </h1>

              <p className="text-gray-500 mt-2">
                Add a new product to Asia Electronics.
              </p>
            </div>

            <form onSubmit={handleSubmit}>

              <div className="grid md:grid-cols-2 gap-5">

                <Input
                  label="Product Name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="iPhone 16"
                  required
                />

                <Select
                  label="Brand"
                  name="brand"
                  value={form.brand}
                  onChange={handleChange}
                  options={brands}
                  placeholder="Select brand"
                  required
                />

                <Select
                  label="Category"
                  name="category"
                  value={form.category}
                  onChange={handleChange}
                  options={categories}
                  placeholder="Select category"
                  required
                />

                <Input
                  label="Image URL"
                  name="image"
                  value={form.image}
                  onChange={handleChange}
                  placeholder="/images/products/product.jpg"
                />

                <Input
                  label="Price"
                  name="price"
                  type="number"
                  value={form.price}
                  onChange={handleChange}
                  placeholder="50000"
                  required
                />

                <Input
                  label="Old Price"
                  name="oldPrice"
                  type="number"
                  value={form.oldPrice}
                  onChange={handleChange}
                  placeholder="55000"
                />

                <Input
                  label="Stock"
                  name="stock"
                  type="number"
                  min="0"
                  value={form.stock}
                  onChange={handleChange}
                  placeholder="10"
                  required
                />

              </div>

              <div className="mt-5">

                <label className="block text-sm font-semibold mb-2">
                  Description
                </label>

                <textarea
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Product description..."
                  className="w-full px-4 py-3 border rounded-xl outline-none resize-none focus:border-[#415FFF]"
                />

              </div>

              <div className="mt-8">

                <h2 className="text-xl font-black mb-5">
                  Specifications
                </h2>

                <div className="grid md:grid-cols-2 gap-5">

                  <Input
                    label="Display"
                    name="display"
                    value={form.display}
                    onChange={handleChange}
                    placeholder="6.1 inch"
                  />

                  <Input
                    label="RAM"
                    name="ram"
                    value={form.ram}
                    onChange={handleChange}
                    placeholder="8GB"
                  />

                  <Input
                    label="Storage"
                    name="storage"
                    value={form.storage}
                    onChange={handleChange}
                    placeholder="128GB"
                  />

                  <Input
                    label="Camera"
                    name="camera"
                    value={form.camera}
                    onChange={handleChange}
                    placeholder="48MP"
                  />

                  <Input
                    label="Battery"
                    name="battery"
                    value={form.battery}
                    onChange={handleChange}
                    placeholder="4000mAh"
                  />

                </div>

              </div>

              <button
                type="submit"
                className="mt-8 w-full h-12 bg-[#415FFF] text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#304be8] transition"
              >
                <Save size={18} />
                Save Product
              </button>

            </form>

          </div>

        </div>

      </main>

      <Footer />
    </>
  );
}

function Input({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  required = false,
  min,
}) {
  return (
    <div>
      <label className="block text-sm font-semibold mb-2">
        {label}
      </label>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        min={min}
        className="w-full h-11 px-4 border rounded-xl outline-none focus:border-[#415FFF]"
      />
    </div>
  );
}

function Select({
  label,
  name,
  value,
  onChange,
  options,
  placeholder,
  required = false,
}) {
  return (
    <div>
      <label className="block text-sm font-semibold mb-2">
        {label}
      </label>

      <select
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full h-11 px-4 border rounded-xl outline-none focus:border-[#415FFF] bg-white"
      >
        <option value="">
          {placeholder}
        </option>

        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}