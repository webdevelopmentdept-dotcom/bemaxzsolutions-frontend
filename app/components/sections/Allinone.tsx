import { outfit } from "../../fonts";

export default function Allinone() {
  const features = [
    {
      img: "/Allimg1.png",
      value: "100+",
      title: "Digital marketing",
      desc: "Drive impact and growth with our strategic digital marketing solutions",
    },
    {
      img: "/Allimg2.png",
      value: "90%",
      title: "Sales Operation",
      desc: "Maximize revenue and drive growth with our comprehensive sales.",
    },
    {
      img: "/Allimg3.png",
      value: "250k",
      title: "3d animations",
      desc: "Drive impact and growth with our strategic digital marketing solutions",
    },
  ];

  return (
    <section
      className={`${outfit.className} w-full bg-[#191818] flex justify-center py-[80px] md:py-[140px]`}
    >
      <div className="w-full max-w-[1120px] flex flex-col items-center gap-[60px] px-[16px] md:px-0">

        {/* Tag */}
        <div className="px-[16px] py-[8px] rounded-[40px] border border-white/[0.08]">
          <p className="text-[14px] text-white">Robust Features</p>
        </div>

        {/* Heading */}
        <div className="flex flex-col items-center gap-[16px] text-center">
          <h2 className="text-white text-[32px] md:text-[72px] font-semibold leading-[100%]">
            All-In-One Solutions
          </h2>

          <p className="text-white/40 text-[14px] md:text-[18px] max-w-[664px] leading-[140%]">
            Our all-in-one solutions streamline your workflow by integrating essential tools into a single, cohesive package
          </p>
        </div>

        {/* Features */}
        <div className="w-full flex flex-col md:flex-row gap-[24px] md:gap-[50px]">

          {features.map((item, i) => (
            <div
              key={i}
              className="w-full md:w-[340px] p-[24px] md:p-[40px] rounded-[16px] border border-white/[0.08] flex flex-col gap-[20px] md:gap-[24px] hover:border-white/20 hover:bg-white/[0.02] transition"
            >

              {/* Icon + Number */}
              <div className="flex items-center gap-[12px] md:gap-[16px]">
                <img
                  src={item.img}
                  className="w-[40px] h-[40px] md:w-[48px] md:h-[48px]"
                />

                <h3 className="text-white text-[24px] md:text-[32px] font-semibold leading-none">
                  {item.value}
                </h3>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-[8px] md:gap-[12px]">
                <p className="text-white text-[16px] md:text-[18px] font-semibold">
                  {item.title}
                </p>

                <p className="text-white/40 text-[14px] md:text-[16px] leading-[22px]">
                  {item.desc}
                </p>
              </div>

              {/* Learn More */}
              <div className="flex items-center gap-[6px] md:gap-[8px] text-[#4EA62F] text-[14px] md:text-[16px] cursor-pointer">
                <span>Learn more</span>
                <img
                  src="/arrow-right.png"
                  className="h-[18px] w-[18px] md:h-[24px] md:w-[24px]"
                />
              </div>

            </div>
          ))}

        </div>

        {/* Trusted By */}
        <div className="w-full flex flex-col gap-[16px] md:gap-[24px] mt-[20px] md:mt-[40px]">

          <p className="text-white/40 text-[14px] md:text-[18px] text-center md:text-left">
            We are trusted by
          </p>

          <div className="w-full flex flex-wrap md:flex-nowrap justify-center md:justify-between items-center gap-[24px] md:gap-0 opacity-40">

            {[1, 2, 3, 4, 5].map((i) => (
              <img
                key={i}
                src={`/Companyimg${i}.png`}
                className="h-[40px] md:h-[60px] lg:h-[80px] object-contain"
              />
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}