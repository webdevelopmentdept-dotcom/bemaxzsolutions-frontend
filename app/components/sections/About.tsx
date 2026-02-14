import { outfit } from "../../fonts";

export default function About() {
  return (
    <section className="w-full bg-[#0B0F14] py-[136px] relative overflow-hidden">
      
      {/* 1440 Container */}
      <div className="max-w-[1440px] h-[566px] mx-auto px-[20px] relative">

        {/* Center Content Block (603 x 284) */}
        <div className="w-[603px] h-[284px] mx-auto flex flex-col items-center text-center">

          {/* ================= TAG ================= */}
         {/* Tag */}
<div className="mb-[16px]">
  <span
    className={`
      ${outfit.className}
      text-[14px]
      leading-[20px]
      font-normal
      text-white
      px-[16px]
      py-[8px]
      border
      border-white/20
      rounded-full
      inline-block
    `}
  >
    Strong Will Power
  </span>
</div>

          {/* ================= TITLE ================= */}
         <h2
  className={`
    ${outfit.className}
    text-[72px]
    leading-[87px]
    font-semibold
    text-white
    mb-[16px]
  `}
>
  Fuel Your Ambitions
</h2>


          {/* ================= PARAGRAPH ================= */}
          <p
            className={`
              ${outfit.className}
              w-[569px]
              text-[16px]
              leading-[24px]
              font-normal
              text-white/40
              mb-[24px]
            `}
          >
            UI Wiki is a collaborative platform for documenting and
            sharing user interface design and development guidelines.
          </p>

          {/* ================= BUTTONS ================= */}
          <div className="flex items-center gap-[24px]">

            {/* Primary Button */}
            <button
              className={`
                ${outfit.className}
                h-[48px]
                px-[24px]
                bg-[#4EA62F]
                text-white
                text-[16px]
                font-semibold
                rounded-full
              `}
            >
              Get started
            </button>

            {/* Secondary Button */}
            <button
              className={`
                ${outfit.className}
                h-[48px]
                px-[24px]
                bg-white
                text-black
                text-[16px]
                font-semibold
                rounded-full
                flex
                items-center
                gap-[12px]
              `}
            >
              {/* Play Icon Dot */}
              <span className="w-[8px] h-[8px] bg-black rounded-full"></span>
              Play video
            </button>

          </div>

        </div>
      </div>
    </section>
  );
}
