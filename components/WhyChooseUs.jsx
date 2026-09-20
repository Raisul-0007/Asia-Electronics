const features = [
  {
    title: "Genuine Products",
    text: "We provide quality and genuine products.",
  },
  {
    title: "Best Price",
    text: "Competitive prices for mobiles and electronics.",
  },
  {
    title: "Warranty",
    text: "Warranty support available on selected products.",
  },
  {
    title: "Customer Support",
    text: "Our team is always ready to help you.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-black text-white py-16">

      <div className="max-w-7xl mx-auto px-4">

        <div className="text-center mb-10">
          <p className="text-[#415FFF] font-semibold">
            Why Asia Electronics
          </p>

          <h2 className="text-3xl md:text-4xl font-black">
            Why Choose Us?
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {features.map((feature) => (
            <div
              key={feature.title}
              className="border border-gray-700 rounded-2xl p-6"
            >
              <div className="w-12 h-12 rounded-full bg-[#415FFF] mb-5" />

              <h3 className="text-xl font-bold mb-2">
                {feature.title}
              </h3>

              <p className="text-gray-400">
                {feature.text}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}