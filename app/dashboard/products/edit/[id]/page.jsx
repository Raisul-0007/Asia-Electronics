"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { ArrowLeft, Save } from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useProducts } from "@/context/ProductContext";

export default function EditProductPage() {
  const params = useParams();
  const router = useRouter();

  const {
    products,
    updateProduct,
    categories,
    brands,
  } = useProducts();

  const [form, setForm] = useState(null);

  useEffect(() => {
    const product = products.find(
      (item) => item.id === Number(params.id)
    );

    if (!product) return;

    setForm({
      name: product.name || "",
      brand: product.brand || "",
      category: product.category || "",
      price: product.price || "",
      oldPrice: product.oldPrice || "",
      stock: product.stock || 0,
      image: product.image || "",
      description: product.description || "",
      display: product.specifications?.display || "",
      ram: product.specifications?.ram || "",
      storage: product.specifications?.storage || "",
      camera: product.specifications?.camera || "",
      battery: product.specifications?.battery || "",
    });
  }, [products, params.id]);

  if (!form) {
    return (
      <>
        <Navbar />

        <main className="min-h-screen flex items-center justify-center">
          <p className="text-gray-500">
            Product not found.
          </p>
        </main>

        <Footer />
      </>
    );
  }

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const specifications = {};

    [
      "display",
      "ram",
      "storage",
      "camera",
      "battery",
    ].forEach((field) => {
      if (form[field]) {
        specifications[field] = form[field];
      }
    });

    updateProduct(Number(params.id), {
      name: form.name,
      brand: form.brand,
      category: form.category,
      price: form.price,
      oldPrice: form.oldPrice,
      stock: form.stock,
      image: form.image,
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

            <h1 className="text-3xl font-black">
              Edit Product
            </h1>

            <p className="text-gray-500 mt-2 mb-8">
              Update product information and stock.
            </p>

            <form onSubmit={handleSubmit}>

              <div className="grid md:grid-cols-2 gap-5">

                <Input
                  label="Product Name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />

                <Select
                  label="Brand"
                  name="brand"
                  value={form.brand}
                  onChange={handleChange}
                  options={brands}
                  required
                />

                <Select
                  label="Category"
                  name="category"
                  value={form.category}
                  onChange={handleChange}
                  options={categories}
                  required
                />

                <Input
                  label="Image URL"
                  name="image"
                  value={form.image}
                  onChange={handleChange}
                />

                <Input
                  label="Price"
                  name="price"
                  type="number"
                  value={form.price}
                  onChange={handleChange}
                  required
                />

                <Input
                  label="Old Price"
                  name="oldPrice"
                  type="number"
                  value={form.oldPrice}
                  onChange={handleChange}
                />

                <Input
                  label="Stock"
                  name="stock"
                  type="number"
                  min="0"
                  value={form.stock}
                  onChange={handleChange}
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
                  />

                  <Input
                    label="RAM"
                    name="ram"
                    value={form.ram}
                    onChange={handleChange}
                  />

                  <Input
                    label="Storage"
                    name="storage"
                    value={form.storage}
                    onChange={handleChange}
                  />

                  <Input
                    label="Camera"
                    name="camera"
                    value={form.camera}
                    onChange={handleChange}
                  />

                  <Input
                    label="Battery"
                    name="battery"
                    value={form.battery}
                    onChange={handleChange}
                  />

                </div>

              </div>

              <button
                type="submit"
                className="mt-8 w-full h-12 bg-[#415FFF] text-white rounded-xl font-bold flex items-center justify-center gap-2"
              >
                <Save size={18} />
                Update Product
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
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}