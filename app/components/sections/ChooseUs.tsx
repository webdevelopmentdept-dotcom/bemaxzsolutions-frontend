import { outfit } from "../../fonts";

export default function ChooseUs() {
  return (
    <section className="w-full bg-[#0B0F14] flex justify-center">

      {/* 1440 Container */}
      <div className="w-full max-w-[1440px] px-[160px] py-[136px]">

        {/* Main Row */}
        <div className="flex justify-between">

          {/* ================= LEFT SIDE ================= */}
          <div className="w-[589px]">

            {/* Label */}
            <p
              className={`${outfit.className}
                text-[#4EA62F]
                text-[14px]
                leading-[18px]
                font-medium
                mb-[16px]
              `}
            >
              Keep Pushing Forward
            </p>

            {/* Heading */}
            <h2
              className={`${outfit.className}
                text-[72px]
                leading-[90px]
                font-semibold
                text-white
                mb-[60px]
              `}
            >
              Quality which you <br />
              can{" "}
              <span className="text-[#4EA62F]">
                always Trust
              </span>
            </h2>

            {/* Image */}
            <div className="w-[589px] h-[360px] rounded-[20px] overflow-hidden">
              <img
                src="/chooseus.png"
                alt="Choose Us"
                className="w-full h-full object-cover"
              />
            </div>

          </div>

          {/* ================= RIGHT SIDE ================= */}
          <div className="w-[360px] mt-[212px]">

            {/* Title */}
            <h3
              className={`${outfit.className}
                text-[24px]
                leading-[32px]
                font-semibold
                text-white
                mb-[16px]
              `}
            >
              Who you are
            </h3>

            {/* Paragraph */}
            <p
              className={`${outfit.className}
                text-[16px]
                leading-[26px]
                text-white/40
                mb-[56px]
              `}
            >
              Bemaxz is a creative digital studio focused on crafting
              modern websites, mobile apps, and brand identities.
              We combine design thinking with development to deliver
              powerful digital experiences.
            </p>

            {/* Scroll Indicator */}
            <div className="flex items-center gap-[12px]">

              <img
                src="/mouse.svg"
                alt="Scroll icon"
                className="w-[16px] h-[24px] object-contain"
              />

              <span
                className={`${outfit.className}
                  text-[14px]
                  leading-[18px]
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
