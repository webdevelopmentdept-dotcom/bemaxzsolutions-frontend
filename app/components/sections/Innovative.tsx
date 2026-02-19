import { outfit } from "../../fonts";
import Image from "next/image";

export default function Innovative() {
  return (
    <section className="w-full bg-[#0B0F14] flex justify-center overflow-hidden">

      {/* 1440 Container px-[160px] py-[120px]" */}
      <div className="w-full max-w-[1440px] px-[80px] py-[30px]">

   <div className="mb-[80px] flex flex-col">

  {/* Heading */}
  <h2
    className={`${outfit.className}
      text-[72px]
      leading-[110%]
      font-semibold
      text-white
      mb-[16px]
      max-w-[826px]
    `}
  >
    Innovate with Confidence
  </h2>

  {/* Subtitle */}
  <p
    className={`${outfit.className}
      text-[18px]
      leading-[26px]
      font-normal
      text-white/40
      max-w-[471px]
    `}
  >
    Drive your progress with our advanced reliable solutions
  </p>

</div>




        {/* ================= MAIN GRID ================= */}
        <div className="flex justify-between items-center">

          {/* ================= LEFT FEATURES ================= */}
          <div className="flex flex-col gap-[120px]">

            {/* Item 1 */}
            <FeatureItem
              title="Clean modern design"
              desc="We create visually stunning, user-friendly designs that make your brand look professional and trustworthy."
              icon="/innovativeicon1.png"
            />

            {/* Item 2 */}
            <FeatureItem
              title="Fast Delivery"
              desc="Quick turnaround times with efficient workflows to launch your project on schedule."
              icon="/innovativeicon2.png"
            />

            {/* Item 3 */}
            <FeatureItem
              title="Affordable Pricing"
              desc="High-quality services at budget-friendly rates with clear and transparent costs."
              icon="/innovativeicon3.png"
            />

          </div>

          {/* ================= CENTER PHONE ================= */}
         <div className="relative flex justify-center items-center">
<img
  src="/hand.png"
  alt="Phone"
  className="w-[420px] h-auto object-contain mt-[40px] mb-[-40px]"
/>


</div>

          {/* ================= RIGHT FEATURES ================= */}
          <div className="flex flex-col gap-[120px]">

            <FeatureItem
              title="Friendly Communication"
              desc="Easy to work with, regular updates, and always available to answer your questions."
              icon="/innovativeicon4.png"
            />

            <FeatureItem
              title="End-to-End Solutions"
              desc="From idea and design to development and launch — everything under one roof."
              icon="/innovativeicon5.png"
            />

            <FeatureItem
              title="Full Support"
              desc="From planning to launch and beyond, we provide continuous support and maintenance."
              icon="/innovativeicon6.png"
            />

          </div>

        </div>
      </div>
    </section>
  );
}

/* ================= REUSABLE FEATURE COMPONENT ================= */

function FeatureItem({
  title,
  desc,
  icon,
}: {
  title: string;
  desc: string;
  icon: string;
}) {
  return (
    <div className="flex items-start gap-[24px] max-w-[360px]">

      {/* Green Circle */}

        <img
          src={icon}
          alt={title}
          className="w-[84px] h-[84px] object-contain"
        />
    

      {/* Text */}
      <div>
        <h4
  className={`${outfit.className}
    text-white
    text-[24px]
    leading-[32px]
    font-medium
    mb-[8px]
  `}
>
  {title}
</h4>


       <p
  className={`${outfit.className}
    text-white/40
    text-[18px]
    leading-[26px]
    font-normal
  `}
>
  {desc}
</p>

      </div>

    </div>
  );
}
