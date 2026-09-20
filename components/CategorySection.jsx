import {
  Smartphone,
  Tv,
  Speaker,
  Headphones,
  BatteryCharging,
  Cable,
  Gamepad2,
  HardDrive,
} from "lucide-react";

const categories = [
  {
    name: "Mobile",
    icon: Smartphone,
  },
  {
    name: "TV Remote",
    icon: Tv,
  },
  {
    name: "Speaker",
    icon: Speaker,
  },
  {
    name: "Earphone",
    icon: Headphones,
  },
  {
    name: "Charger",
    icon: BatteryCharging,
  },
  {
    name: "Cable",
    icon: Cable,
  },
  {
    name: "Gaming",
    icon: Gamepad2,
  },
  {
    name: "Memory Card",
    icon: HardDrive,
  },
];

export default function CategorySection() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">

      <div className="text-center mb-10">
        <p className="text-[#415FFF] font-semibold">
          Electronics Store
        </p>

        <h2 className="text-3xl md:text-4xl font-black">
          Electronics & Accessories
        </h2>

        <p className="text-gray-500 mt-3">
          Everything you need in one place.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">

        {categories.map((category) => {
          const Icon = category.icon;

          return (
            <div
              key={category.name}
              className="group border rounded-2xl p-5 text-center hover:bg-[#415FFF] hover:text-white transition cursor-pointer"
            >
              <div className="flex justify-center mb-4">
                <Icon
                  size={35}
                  className="text-[#415FFF] group-hover:text-white"
                />
              </div>

              <h3 className="font-semibold text-sm">
                {category.name}
              </h3>
            </div>
          );
        })}

      </div>
    </section>
  );
}