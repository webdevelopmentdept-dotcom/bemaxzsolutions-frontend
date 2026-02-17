import { outfit } from "../../fonts";

export default function ChooseUs() {
  return (
    <section className="w-full bg-[#0B0F14] flex justify-center overflow-hidden">
      
      {/* 1440 Container */}
      <div className="w-full max-w-[1440px] px-6 sm:px-10 lg:px-[160px] py-16 sm:py-24 lg:py-[136px]">

        {/* Main Row */}
        <div className="flex flex-col lg:flex-row lg:justify-between gap-16 lg:gap-0">

          {/* ================= LEFT SIDE ================= */}
          <div className="w-full lg:w-[589px]">

            {/* Label */}
            <p
              className={`${outfit.className}
                text-[#4EA62F]
                text-[12px] sm:text-[14px]
                leading-[16px] sm:leading-[18px]
                font-medium
                mb-3 sm:mb-4
              `}
            >
              Keep Pushing Forward
            </p>

            {/* Heading */}
            <h2
              className={`${outfit.className}
                text-[32px] sm:text-[48px] lg:text-[72px]
                leading-[40px] sm:leading-[58px] lg:leading-[90px]
                font-semibold
                text-white
                mb-8 sm:mb-10 lg:mb-[60px]
              `}
            >
              Quality which you
              <br className="hidden lg:block" />
              can{" "}
              <span className="text-[#4EA62F]">
                always Trust
              </span>
            </h2>

            {/* Image */}
            <div className="w-full lg:w-[589px] h-[220px] sm:h-[300px] lg:h-[360px] rounded-[20px] overflow-hidden">
              <img
                src="/chooseus.png"
                alt="Choose Us"
                className="w-full h-full object-cover"
              />
            </div>

          </div>

          {/* ================= RIGHT SIDE ================= */}
          <div className="w-full lg:w-[360px] lg:mt-[212px]">

            {/* Title */}
            <h3
              className={`${outfit.className}
                text-[20px] sm:text-[24px]
                leading-[28px] sm:leading-[32px]
                font-semibold
                text-white
                mb-4
              `}
            >
              Who you are
            </h3>

            {/* Paragraph */}
            <p
              className={`${outfit.className}
                text-[14px] sm:text-[16px]
                leading-[22px] sm:leading-[26px]
                text-white/40
                mb-10 sm:mb-14
              `}
            >
              Bemaxz is a creative digital studio focused on crafting
              modern websites, mobile apps, and brand identities.
              We combine design thinking with development to deliver
              powerful digital experiences.
            </p>

            {/* Scroll Indicator */}
            <div className="flex items-center gap-3">

              <img
                src="/mouse.svg"
                alt="Scroll icon"
                className="w-[14px] h-[20px] sm:w-[16px] sm:h-[24px]"
              />

              <span
                className={`${outfit.className}
                  text-[12px] sm:text-[14px]
                  leading-[16px] sm:leading-[18px]
                  text-white
                `}
              >
                Scroll for features
              </span>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
