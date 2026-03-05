import { generalSans } from "../../fonts";

export default function Brand() {
  return (
    <section
      className={`${generalSans.className} w-full bg-[#191818] flex justify-center
      py-[80px] sm:py-[100px] lg:py-[120px]`}
    >
      {/* Container */}
      <div
        className="w-full max-w-[1093px]
        flex flex-col lg:flex-row
        items-center
        gap-[40px] lg:gap-[150px]
        px-6 sm:px-10 lg:px-0"
      >
        {/* LEFT */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src="/integrations.png"
            className="w-full max-w-[320px] sm:max-w-[420px]"
          />
        </div>

        {/* RIGHT */}
        <div
          className="w-full lg:w-[463px]
          flex flex-col
          gap-[14px] sm:gap-[16px]
          text-center lg:text-left"
        >
          {/* TAG */}
          <div className="w-fit mx-auto lg:mx-0 px-[16px] py-[8px] rounded-[100px] border border-white/30 text-[14px] text-[#FFE6A1] leading-none">
            Our Client
          </div>

          {/* HEADING */}
          <h2
            className="
              text-white
              text-[36px] sm:text-[52px] lg:text-[72px]
              leading-[42px] sm:leading-[60px] lg:leading-[74px]
              tracking-[-1px]
              font-semibold
            "
          >
            Trusted By <br /> Global Brands
          </h2>

          {/* DESCRIPTION */}
          <p
            className="
              text-white/40
              text-[16px] sm:text-[18px]
              leading-[24px] sm:leading-[26px]
            "
          >
            We deliver tailored marketing solutions designed to scale your brand and drive measurable results
          </p>

          {/* BUTTON */}
          <button
            className="mt-[12px] flex items-center gap-[10px]
            bg-[#4EA62F] text-white
            px-[24px] sm:px-[28px]
            py-[12px] sm:py-[14px]
            rounded-[80px]
            text-[14px] sm:text-[16px]
            leading-none
            w-fit
            mx-auto lg:mx-0"
          >
            <span>View all</span>
            <img
              src="/servicearrow-right.png"
              className="w-[14px] h-[14px]"
            />
          </button>
        </div>
      </div>
    </section>
  );
}