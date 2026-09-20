import Navbar from "@/components/Navbar";
import HeroSlider from "@/components/HeroSlider";
import AdBanners from "@/components/AdBanners";
import BrandSection from "@/components/BrandSection";
import CategorySection from "@/components/CategorySection";
import ProductSection from "@/components/ProductSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import Footer from "@/components/Footer";
export default function page() {
  return (
    <>
      <Navbar />

      <main>

        <HeroSlider />

        <AdBanners />

        <BrandSection />

        <ProductSection />

        <CategorySection />

        <WhyChooseUs />

        <section className="py-20 bg-[#f5f7ff]">
          <div className="max-w-4xl mx-auto px-4 text-center">

            <p className="text-[#415FFF] font-semibold mb-3">
              Asia Electronics
            </p>

            <h2 className="text-3xl md:text-5xl font-black mb-5">
              Find Your Perfect Device
            </h2>

            <p className="text-gray-600 mb-8">
              From smartphones to electronics and accessories,
              everything you need is available at Asia Electronics.
            </p>

            <a
              href="/products"
              className="inline-block bg-[#415FFF] text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition"
            >
              Explore Products
            </a>

          </div>
        </section>

      </main>
      <Footer/>
    </>
  );
}