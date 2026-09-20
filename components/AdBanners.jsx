export default function AdBanners() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">

      <div className="grid md:grid-cols-2 gap-6">

        <div className="bg-[#415FFF] rounded-2xl p-8 text-white">
          <p className="mb-2">Special Offer</p>

          <h2 className="text-3xl font-bold mb-3">
            Latest Smartphones
          </h2>

          <p className="mb-6">
            Get the latest mobile phones at amazing prices.
          </p>

          <a
            href="/products"
            className="inline-block bg-white text-black px-5 py-3 rounded-lg font-semibold"
          >
            Shop Mobiles
          </a>
        </div>

        <div className="bg-black rounded-2xl p-8 text-white">
          <p className="mb-2 text-[#415FFF]">
            Electronics Sale
          </p>

          <h2 className="text-3xl font-bold mb-3">
            Accessories & Electronics
          </h2>

          <p className="mb-6">
            Speakers, remotes, chargers and more.
          </p>

          <a
            href="/products"
            className="inline-block bg-[#415FFF] px-5 py-3 rounded-lg font-semibold"
          >
            Explore Now
          </a>
        </div>

      </div>
    </section>
  );
}