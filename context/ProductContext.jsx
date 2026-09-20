"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import { products as initialProducts } from "@/data/products";

const ProductContext = createContext();

const defaultCategories = [
  "Mobile",
  "TV Remote",
  "Speaker",
  "Earphone",
  "Headphone",
  "Charger",
  "Power Bank",
  "Cable",
  "Mobile Case",
  "Screen Protector",
  "Memory Card",
  "Gaming",
];

const defaultBrands = [
  "Apple",
  "Samsung",
  "Xiaomi",
  "OnePlus",
  "Vivo",
  "Oppo",
  "JBL",
  "Baseus",
  "Anker",
];

export function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [hydrated, setHydrated] = useState(false);

  // Load data
  useEffect(() => {
    try {
      const savedProducts = localStorage.getItem(
        "asia-electronics-products"
      );

      const savedCategories = localStorage.getItem(
        "asia-electronics-categories"
      );

      const savedBrands = localStorage.getItem(
        "asia-electronics-brands"
      );

      setProducts(
        savedProducts
          ? JSON.parse(savedProducts)
          : initialProducts
      );

      setCategories(
        savedCategories
          ? JSON.parse(savedCategories)
          : defaultCategories
      );

      setBrands(
        savedBrands
          ? JSON.parse(savedBrands)
          : defaultBrands
      );
    } catch (error) {
      console.error("Failed to load product data:", error);

      setProducts(initialProducts);
      setCategories(defaultCategories);
      setBrands(defaultBrands);
    }

    setHydrated(true);
  }, []);

  // Save products
  useEffect(() => {
    if (!hydrated) return;

    localStorage.setItem(
      "asia-electronics-products",
      JSON.stringify(products)
    );
  }, [products, hydrated]);

  // Save categories
  useEffect(() => {
    if (!hydrated) return;

    localStorage.setItem(
      "asia-electronics-categories",
      JSON.stringify(categories)
    );
  }, [categories, hydrated]);

  // Save brands
  useEffect(() => {
    if (!hydrated) return;

    localStorage.setItem(
      "asia-electronics-brands",
      JSON.stringify(brands)
    );
  }, [brands, hydrated]);

  // Add Product
  const addProduct = (product) => {
    const newProduct = {
      ...product,
      id: Date.now(),
      price: Number(product.price),
      oldPrice: Number(product.oldPrice || product.price),
      stock: Number(product.stock),
    };

    setProducts((current) => [
      newProduct,
      ...current,
    ]);
  };

  // Update Product
  const updateProduct = (id, updatedProduct) => {
    setProducts((current) =>
      current.map((product) =>
        product.id === id
          ? {
              ...product,
              ...updatedProduct,
              price: Number(updatedProduct.price),
              oldPrice: Number(
                updatedProduct.oldPrice ||
                  updatedProduct.price
              ),
              stock: Number(updatedProduct.stock),
            }
          : product
      )
    );
  };

  // Delete Product
  const deleteProduct = (id) => {
    setProducts((current) =>
      current.filter((product) => product.id !== id)
    );
  };

  // Update Stock
  const updateStock = (id, stock) => {
    setProducts((current) =>
      current.map((product) =>
        product.id === id
          ? {
              ...product,
              stock: Math.max(0, Number(stock)),
            }
          : product
      )
    );
  };

  // Add Category
  const addCategory = (category) => {
    const cleanCategory = category.trim();

    if (!cleanCategory) return;

    const exists = categories.some(
      (item) =>
        item.toLowerCase() ===
        cleanCategory.toLowerCase()
    );

    if (exists) return;

    setCategories((current) => [
      ...current,
      cleanCategory,
    ]);
  };

  // Delete Category
  const deleteCategory = (category) => {
    setCategories((current) =>
      current.filter((item) => item !== category)
    );
  };

  // Add Brand
  const addBrand = (brand) => {
    const cleanBrand = brand.trim();

    if (!cleanBrand) return;

    const exists = brands.some(
      (item) =>
        item.toLowerCase() ===
        cleanBrand.toLowerCase()
    );

    if (exists) return;

    setBrands((current) => [
      ...current,
      cleanBrand,
    ]);
  };

  // Delete Brand
  const deleteBrand = (brand) => {
    setBrands((current) =>
      current.filter((item) => item !== brand)
    );
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        categories,
        brands,
        addProduct,
        updateProduct,
        deleteProduct,
        updateStock,
        addCategory,
        deleteCategory,
        addBrand,
        deleteBrand,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export function useProducts() {
  const context = useContext(ProductContext);

  if (!context) {
    throw new Error(
      "useProducts must be used inside ProductProvider"
    );
  }

  return context;
}