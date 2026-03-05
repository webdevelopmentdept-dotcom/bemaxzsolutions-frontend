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
    <section
      className={`${outfit.className} w-full bg-[#191818] flex justify-center py-[60px] md:py-[140px]`}
    >
      <div className="w-full max-w-[1120px] flex flex-col items-center gap-[40px] md:gap-[60px] px-[16px]">

        {/* Tag */}
        <div className="px-[14px] py-[6px] md:px-[16px] md:py-[8px] rounded-full border border-white/[0.08]">
          <p className="text-[12px] md:text-[14px] text-white">Our Services</p>
        </div>

        {/* Heading */}
        <div className="text-center flex flex-col gap-[12px] md:gap-[16px]">

          <h2 className="text-white text-[26px] sm:text-[32px] md:text-[64px] font-semibold leading-tight">
            For Brands That Want More
          </h2>

          <p className="text-white/40 text-[14px] md:text-[18px] max-w-[90%] md:max-w-[720px] mx-auto">
            We combine sharp strategy, creative firepower, and performance precision to help
            ambitious brands scale fast — and smart.
          </p>

        </div>

        {/* Cards */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[20px] md:gap-[24px]">

          {services.map((item, i) => (
            <div key={i} className="flex flex-col gap-[14px] md:gap-[16px]">

              {/* Image Card */}
              <div className="relative">

                {/* Arrow */}
                <div className="absolute top-3 right-3 md:top-4 md:right-4 bg-[#4EA62F] w-[36px] h-[36px] md:w-[44px] md:h-[44px] rounded-full flex items-center justify-center">
                  <span className="text-white text-[14px] md:text-[18px]">↗</span>
                </div>

                <img
                  src={item.img}
                  className="w-full h-auto object-cover rounded-[12px]"
                />
              </div>

              {/* Text */}
              <div className="flex flex-col gap-[6px] md:gap-[8px]">

                <h3 className="text-white text-[16px] md:text-[20px] font-semibold">
                  {item.title}
                </h3>

                <p className="text-white/40 text-[13px] md:text-[16px] leading-[140%]">
                  {item.desc}
                </p>

              </div>

            </div>
          ))}

        </div>

        {/* Button */}
        <button className="mt-[10px] md:mt-[20px] flex items-center justify-center gap-[10px] bg-[#4EA62F] text-white px-[24px] md:px-[32px] py-[14px] md:py-[16px] rounded-[80px] text-[14px] md:text-[16px] leading-none hover:opacity-90 transition w-full sm:w-auto">
          <span>View Services</span>
          <img src="/servicearrow-right.png" className="w-[16px] h-[16px]" />
        </button>

      </div>
    </section>
  );
}