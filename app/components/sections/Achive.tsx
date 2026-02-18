import { outfit } from "../../fonts";
import Image from "next/image";

export default function Achive() {
  return (
    <section className="w-full bg-[#0B0F14] flex justify-center">
      
      {/* Container */}
      <div
        className="
          w-full max-w-[1440px]
          px-6 sm:px-10 lg:px-[160px]
          py-16 sm:py-24 lg:py-[136px]
        "
      >

        {/* ================= TOP CONTENT ================= */}
        <div className="flex flex-col items-center text-center">

          {/* Heading */}
          <h2
            className={`${outfit.className}
              text-[36px] leading-[44px]
              sm:text-[52px] sm:leading-[64px]
              lg:text-[72px] lg:leading-[88px]
              font-semibold
              text-white
              mb-6
            `}
          >
            Achieve the <br />
            unimaginable
          </h2>

          {/* Paragraph */}
          <p
            className={`${outfit.className}
              text-[14px] leading-[22px]
              sm:text-[16px] sm:leading-[24px]
              lg:text-[18px] lg:leading-[28px]
              text-white/40
              max-w-[455px]
              mb-8
            `}
          >
            UI Wiki helps maintain design uniformity by centralizing
            UI guidelines and best practices.
          </p>

        {/* Buttons */}
<div className="flex flex-row justify-center items-center gap-[12px] mb-[60px] lg:mb-[85px]">

  {/* Learn More */}
  <button
    className={`${outfit.className}
      h-[40px] sm:h-[48px]
      px-[18px] sm:px-[24px]
      rounded-[40px]
      border border-[#FFFFFF33]
      text-white
      text-[14px] sm:text-[18px]
      font-normal
      flex items-center justify-center
      whitespace-nowrap
    `}
  >
    Learn more
  </button>

  {/* Get Started */}
  <button
    className={`${outfit.className}
      h-[40px] sm:h-[48px]
      px-[18px] sm:px-[24px]
      rounded-[40px]
      bg-[#4EA62F]
      text-white
      text-[14px] sm:text-[18px]
      font-semibold
      flex items-center justify-center
      whitespace-nowrap
    `}
  >
    Get started
  </button>

</div>

        </div>

        {/* ================= CARD GRID ================= */}
        <div className="flex justify-center">

         <div
  className="
    grid
    grid-cols-1
    sm:grid-cols-2
    lg:grid-cols-3
    gap-y-8
    lg:gap-0
  "
>


            {/* CARD 1 */}
            <div className="
  w-full sm:w-[239px] 
  h-[159px] 
  bg-[#2B2A2A] 
  sm:bg-transparent 
  lg:bg-[#2B2A2A]
  rounded-[24px]
  px-[55px] py-[24px]
  flex flex-col items-center
  gap-[16px]
  text-center
"
>
              <img src="/icon1.png" alt="Design Icon" className="w-[48px] h-[48px] object-contain" />
              <h4 className={`${outfit.className} text-white text-[18px] font-medium leading-[20px]`}>
                Design
              </h4>
              <p className={`${outfit.className} text-white/40 text-[16px] leading-[20px]`}>
                12 course
              </p>
            </div>

            {/* CARD 2 */}
            <div className="
  w-full sm:w-[239px]
  h-[159px]
  bg-[#2B2A2A]
  sm:bg-transparent
  rounded-[24px]
  sm:rounded-none
  px-[55px] py-[24px]
  flex flex-col items-center
  gap-[16px]
  text-center
"


>
              <img src="/icons2.png" alt="Development Icon" className="w-[48px] h-[48px] object-contain" />
              <h4 className={`${outfit.className} text-white text-[18px] font-medium leading-[20px]`}>
                Development
              </h4>
              <p className={`${outfit.className} text-white/40 text-[16px] leading-[20px]`}>
                12 course
              </p>
            </div>

            {/* CARD 3 */}
            <div  className="
  w-full sm:w-[239px] 
  h-[159px] 
  bg-[#2B2A2A] 
  sm:bg-transparent 
  lg:bg-[#2B2A2A]
  rounded-[24px]
  px-[55px] py-[24px]
  flex flex-col items-center
  gap-[16px]
  text-center
"
>
              <img src="/icon1.png" alt="Marketing Icon" className="w-[48px] h-[48px] object-contain" />
              <h4 className={`${outfit.className} text-white text-[18px] font-medium leading-[20px]`}>
                Marketing
              </h4>
              <p className={`${outfit.className} text-white/40 text-[16px] leading-[20px]`}>
                12 course
              </p>
            </div>

            {/* CARD 4 */}
            <div className="
  w-full sm:w-[239px]
  h-[159px]
  bg-[#2B2A2A]
  sm:bg-transparent
  rounded-[24px]
  sm:rounded-none
  px-[55px] py-[24px]
  flex flex-col items-center
  gap-[16px]
  text-center
"

>
              <img src="/icon1.png" alt="Film Icon" className="w-[48px] h-[48px] object-contain" />
              <h4 className={`${outfit.className} text-white text-[18px] font-medium leading-[20px]`}>
                Film and Art
              </h4>
              <p className={`${outfit.className} text-white/40 text-[16px] leading-[20px]`}>
                12 course
              </p>
            </div>

            {/* CARD 5 */}
            <div className="
  w-full sm:w-[239px] 
  h-[159px] 
  bg-[#2B2A2A] 
  sm:bg-transparent 
  lg:bg-[#2B2A2A]
  rounded-[24px]
  px-[55px] py-[24px]
  flex flex-col items-center
  gap-[16px]
  text-center
"
>
              <img src="/icon1.png" alt="CRM Icon" className="w-[48px] h-[48px] object-contain" />
              <h4 className={`${outfit.className} text-white text-[18px] font-medium leading-[20px]`}>
                CRM
              </h4>
              <p className={`${outfit.className} text-white/40 text-[16px] leading-[20px]`}>
                12 course
              </p>
            </div>

            {/* CARD 6 */}
            <div 
className="
  w-full sm:w-[239px]
  h-[159px]
  bg-[#2B2A2A]
  sm:bg-transparent
  rounded-[24px]
  sm:rounded-none
  px-[55px] py-[24px]
  flex flex-col items-center
  gap-[16px]
  text-center
"

>
              <img src="/icon1.png" alt="Consultancy Icon" className="w-[48px] h-[48px] object-contain" />
              <h4 className={`${outfit.className} text-white text-[18px] font-medium leading-[20px]`}>
                Consultancy
              </h4>
              <p className={`${outfit.className} text-white/40 text-[16px] leading-[20px]`}>
                12 course
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
