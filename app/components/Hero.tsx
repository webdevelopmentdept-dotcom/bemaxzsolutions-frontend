import Image from "next/image";
import { outfit } from "../fonts";

export default function Hero() {
  return (
   
       


    <section className="bg-[#111111] text-white pt-[100px] md:pt-[136px] pb-[80px] md:pb-[120px]">
  <div className="max-w-[1214px] mx-auto px-[20px] md:px-0">

    {/* Top Tags */}
    <div className="flex items-center gap-[20px] mb-[24px] md:mb-[32px]">

      <div className="flex items-center gap-[8px]">
        <div className="w-[8px] h-[8px] bg-[#4EA62F] rounded-full" />
        <span className={`${outfit.className} text-[14px] md:text-[18px] font-semibold`}>
          Design
        </span>
      </div>

      <div className="flex items-center gap-[8px]">
        <div className="w-[8px] h-[8px] bg-[#4EA62F] rounded-full" />
        <span className={`${outfit.className} text-[14px] md:text-[18px] font-semibold`}>
          Build
        </span>
      </div>

      <div className="flex items-center gap-[8px]">
        <div className="w-[8px] h-[8px] bg-[#4EA62F] rounded-full" />
        <span className={`${outfit.className} text-[14px] md:text-[18px] font-semibold`}>
          Launch
        </span>
      </div>

    </div>

    {/* Heading */}
    <h1
      className={`${outfit.className} 
      text-[34px] 
      md:text-[66px] 
      font-semibold 
      leading-[42px] 
      md:leading-[80px] 
      mb-[24px]`}
    >
      We create modern websites, apps & digital products that{" "}
      <span className="text-[#4EA62F]">
        grow your business.
      </span>
    </h1>

   {/* Description + Buttons - Exact Figma Layout */}
{/* Description + Buttons */}
<div
  className="
    flex 
    flex-col 
    md:flex-row 
    items-start 
    gap-[24px] 
    md:gap-[32px] 
    mt-[32px]
  "
>

  {/* Paragraph */}
  <p
    className={`
      ${outfit.className}
      text-[16px]
      leading-[24px]
      font-normal
      text-[#FFFFFF66]
      max-w-full
      md:max-w-[313px]
    `}
  >
    Our designs inspire you to innovate and achieve your creative goals.
  </p>

  {/* CTA Buttons */}
<div className="flex flex-row gap-[16px]">

  <button
    className={`
      ${outfit.className}
      h-[48px]
      px-[20px]
      bg-[#4EA62F]
      text-white
      text-[16px]
      font-semibold
      rounded-full
      whitespace-nowrap
    `}
  >
    Hire Me
  </button>

  <button
    className={`
      ${outfit.className}
      h-[48px]
      px-[20px]
      bg-[#4EA62F]
      text-white
      text-[16px]
      font-semibold
      rounded-full
      whitespace-nowrap
    `}
  >
    View Work
  </button>

</div>



</div>



 {/* Image */}
<div className="mt-[60px]">
  <Image
    src="/heroimg.png"
    alt="Team"
    width={1214}
    height={288}   // ✅ exact figma height
    className="
      w-full
      h-[288px]     // ✅ force exact height
      rounded-[24px]
      object-cover
    "
    priority
  />
</div>


  </div>
</section>

  );
}
