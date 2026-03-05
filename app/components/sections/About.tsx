import { outfit } from "../../fonts";

export default function About() {
  return (
    <section className="w-full bg-[#0B0F14] relative overflow-hidden">

      {/* 1440 Container */}
     <div className="max-w-[1440px] lg:h-[566px] mx-auto relative px-4 lg:px-0 pt-16 lg:py-0">

        {/* ================= CENTER CONTENT ================= */}
        <div className="max-w-[1120px] mx-auto flex flex-col items-center text-center">

          {/* Tag */}
          <div className="mb-[16px]">
            <span
              className={`${outfit.className}
                text-[13px] lg:text-[14px]
                leading-[20px]
                text-white
                px-[16px]
                py-[8px]
                border border-white/20
                rounded-full
              `}
            >
              Strong Will Power
            </span>
          </div>

          {/* Title */}
          <h2
            className={`${outfit.className}
              text-[36px] sm:text-[48px] lg:text-[72px]
              leading-[44px] sm:leading-[60px] lg:leading-[91px]
              font-semibold
              text-white
              mb-[16px]
            `}
          >
            Fuel Your Ambitions
          </h2>

          {/* Paragraph */}
          <p
            className={`${outfit.className}
              w-full max-w-[569px]
              text-[14px] lg:text-[16px]
              leading-[22px] lg:leading-[24px]
              text-white/40
              mb-[24px]
            `}
          >
            UI Wiki is a collaborative platform for documenting and
            sharing user interface design and development guidelines.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-[16px] lg:gap-[24px] mt-[8px]">

            {/* Primary */}
            <button
              className={`${outfit.className}
                h-[44px] lg:h-[48px]
                px-[24px]
                bg-[#4EA62F]
                text-white
                text-[16px] lg:text-[18px]
                font-semibold
                rounded-[40px]
                flex items-center justify-center
              `}
            >
              Get started
            </button>

            {/* Secondary */}
            <button
              className={`${outfit.className}
                h-[44px] lg:h-[48px]
                px-[24px]
                bg-white
                text-black
                text-[16px] lg:text-[18px]
                font-semibold
                rounded-[40px]
                flex items-center justify-center gap-[12px]
              `}
            >
              <span className="w-[18px] h-[18px] lg:w-[20px] lg:h-[20px] rounded-full bg-black flex items-center justify-center">
                <span className="w-0 h-0 border-l-[6px] border-l-white border-y-[4px] border-y-transparent ml-[2px]" />
              </span>
              Play video
            </button>
          </div>
        </div>

       {/* ================= LEFT FLOATING CARDS ================= */}
<div
  className="
  mt-12 flex justify-center
  lg:absolute lg:top-[140px] lg:left-[0px]
  "
>
  <img
    src="/card.png"
    alt="Get Discount"
    className="w-[260px] sm:w-[300px] lg:w-[341px] h-auto object-contain"
  />
</div>

       {/* ================= RIGHT EMI CARD ================= */}
<div
  className="
  mt-12 flex justify-center
  lg:absolute lg:right-[10px] lg:top-[120px]
  "
>
  <img
    src="/content.png"
    alt="EMI Card"
    className="w-[220px] sm:w-[240px] lg:w-[300px] h-auto object-contain"
  />
</div>
      </div>

      {/* ================= LOGO ROW ================= */}
<div className="-mt-16 flex justify-center px-6 lg:-mt-10">
  <img
    src="/companies.png"
    alt="Companies"
    className="w-full max-w-[622px] h-auto object-contain opacity-40"
  />
</div>

    </section>
  );
}
