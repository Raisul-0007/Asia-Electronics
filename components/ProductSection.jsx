import Link from "next/link";
import { products } from "@/data/products";
import ProductCard from "./ProductCard";

export default function ProductSection() {
  const featuredProducts = products.slice(0, 4);

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">

      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">

        <div>
          <p className="text-[#415FFF] font-semibold">
            Our Products
          </p>

          <h2 className="text-3xl md:text-4xl font-black">
            Featured Products
          </h2>
        </div>

        <Link
          href="/products"
          className="text-[#415FFF] font-semibold"
        >
          View All →
        </Link>

      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

        {featuredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}

      </div>

    </section>
  );
}