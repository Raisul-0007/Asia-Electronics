const brands = [
  "Apple",
  "Samsung",
  "Xiaomi",
  "OnePlus",
  "Vivo",
  "Oppo",
  "JBL",
  "Baseus",
];

export default function BrandSection() {
  return (
    <section className="bg-[#f5f7ff] py-14">
      <div className="max-w-7xl mx-auto px-4">

        <div className="text-center mb-8">
          <p className="text-[#415FFF] font-semibold">
            Popular Brands
          </p>

          <h2 className="text-3xl md:text-4xl font-black">
            Shop By Brand
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {brands.map((brand) => (
            <div
              key={brand}
              className="bg-white border rounded-xl p-5 text-center font-bold hover:border-[#415FFF] hover:text-[#415FFF] transition cursor-pointer"
            >
              {brand}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}