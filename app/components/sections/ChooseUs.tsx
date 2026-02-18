import { outfit } from "../../fonts";

export default function ChooseUs() {
  return (
    <section className="w-full bg-gradient-to-b from-[#0B0F14] to-[#06090D] flex justify-center">
      
      {/* Container */}
      <div
        className="w-full max-w-[1440px]
                   px-6 sm:px-10 lg:px-[120px]
                   pt-[120px] pb-[120px]"
      >

        {/* Main Layout */}
        <div
          className="flex flex-col lg:flex-row
                     justify-between
                     gap-16 lg:gap-0"
        >

          {/* ================= LEFT SIDE ================= */}
          <div className="w-full lg:w-[600px]">

            {/* Label */}
            <p
              className={`${outfit.className}
                text-[#4EA62F]
                text-[14px]
                font-medium
                mb-6
              `}
            >
              Keep Pushing Forward
            </p>

            {/* Heading */}
            <h2
              className={`${outfit.className}
                text-[38px] sm:text-[52px] lg:text-[72px]
                leading-[46px] sm:leading-[62px] lg:leading-[88px]
                font-semibold
                text-white
                mb-10 sm:mb-12 lg:mb-[60px]
              `}
            >
              Quality which you
              <br className="hidden lg:block" />
              {" "}can
              <br className="block sm:hidden" />
              {" "}
              <span className="text-[#4EA62F]">
                always Trust
              </span>
            </h2>

            {/* Image */}
            <div
              className="w-full
                         h-[240px] sm:h-[300px] lg:h-[360px]
                         rounded-[20px]
                         overflow-hidden"
            >
              <img
                src="/chooseus.png"
                alt="Choose Us"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* ================= RIGHT SIDE ================= */}
          <div
            className="w-full lg:w-[360px]
                       lg:self-end
                       mt-16 lg:mt-0"
          >

            {/* Title */}
            <h3
              className={`${outfit.className}
                text-[20px] sm:text-[24px]
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
                mb-12
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
                src="/line.png"
                alt="Scroll icon"
                className="w-[16px] h-[24px]"
              />
              <span
                className={`${outfit.className}
                  text-[13px] sm:text-[14px]
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
