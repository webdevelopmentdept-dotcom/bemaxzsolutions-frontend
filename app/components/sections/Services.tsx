import { outfit } from "../../fonts";

const services = [
  {
    title: "Performance Marketing",
    desc: "ROI-focused campaigns that turn clicks into conversions",
    img: "/service1.png",
  },
  {
    title: "Brand Consulting",
    desc: "We shape your brand’s voice and vision using insights and creativity",
    img: "/service2.png",
  },
  {
    title: "Content Marketing",
    desc: "Content that engages, builds loyalty, and grows reach",
    img: "/service3.png",
  },
];

export default function Services() {
  return (
    <section className={`${outfit.className} w-full bg-[#191818] flex justify-center py-[80px] md:py-[140px]`}>

      <div className="w-full max-w-[1120px] flex flex-col items-center gap-[60px] px-[16px]">

        {/* Tag */}
        <div className="px-[16px] py-[8px] rounded-full border border-white/[0.08]">
          <p className="text-[14px] text-white">Our Services</p>
        </div>

        {/* Heading */}
        <div className="text-center flex flex-col gap-[16px]">

          <h2 className="text-white text-[32px] md:text-[64px] font-semibold leading-tight">
            For Brands That Want More
          </h2>

          <p className="text-white/40 text-[16px] md:text-[18px] max-w-[720px] mx-auto">
            We combine sharp strategy, creative firepower, and performance precision to help
            ambitious brands scale fast — and smart.
          </p>

        </div>

        {/* Cards */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-[24px]">

          {services.map((item, i) => (
            <div
              key={i}
              className="flex flex-col gap-[16px]"
            >

              {/* Image Card */}
              <div className="relative bg-[#232323] rounded-[24px] p-[20px] md:p-[24px]">

                {/* Arrow */}
                <div className="absolute top-4 right-4 bg-[#4EA62F] w-[44px] h-[44px] rounded-full flex items-center justify-center">
                  <span className="text-white text-[18px]">↗</span>
                </div>

                <img
                  src={item.img}
                  className="w-full h-auto object-contain rounded-[12px]"
                />
              </div>

              {/* Text */}
              <div className="flex flex-col gap-[8px]">

                <h3 className="text-white text-[18px] md:text-[20px] font-semibold">
                  {item.title}
                </h3>

                <p className="text-white/40 text-[14px] md:text-[16px] leading-[140%]">
                  {item.desc}
                </p>

              </div>

            </div>
          ))}

        </div>

        {/* Button */}
        <button className="mt-[20px] bg-[#4EA62F] text-white px-[28px] py-[12px] rounded-full text-[14px] hover:opacity-90 transition">
          View Services →
        </button>

      </div>
    </section>
  );
}