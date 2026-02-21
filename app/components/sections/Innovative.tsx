import { outfit } from "../../fonts";

export default function Innovative() {
  return (
    <section className="w-full bg-[#0B0F14] flex justify-center overflow-hidden">

      {/* Container */}
      <div className="w-full max-w-[1440px] px-[20px] lg:px-[80px] py-[60px] lg:py-[30px]">

        {/* ================= HEADING ================= */}
        <div className="mb-[60px] lg:mb-[80px] flex flex-col">

          <h2
            className={`${outfit.className}
              text-[36px] lg:text-[72px]
              leading-[110%]
              font-semibold
              text-white
              mb-[16px]
              max-w-[826px]
            `}
          >
            Innovate with Confidence
          </h2>

          <p
            className={`${outfit.className}
              text-[16px] lg:text-[18px]
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
        <div className="flex flex-col lg:flex-row justify-between items-center gap-[60px] lg:gap-0">

          {/* ================= LEFT FEATURES ================= */}
          <div className="flex flex-col gap-[60px] lg:gap-[120px] w-full lg:w-auto">

            <FeatureItem
              title="Clean modern design"
              desc="We create visually stunning, user-friendly designs that make your brand look professional and trustworthy."
              icon="/innovativeicon1.png"
            />

            <FeatureItem
              title="Fast Delivery"
              desc="Quick turnaround times with efficient workflows to launch your project on schedule."
              icon="/innovativeicon2.png"
            />

            <FeatureItem
              title="Affordable Pricing"
              desc="High-quality services at budget-friendly rates with clear and transparent costs."
              icon="/innovativeicon3.png"
            />

          </div>

          {/* ================= CENTER PHONE ================= */}
          <div className="relative flex justify-center items-center mt-[40px] lg:mt-[0px]">

           

            {/* PHONE IMAGE */}
            <img
              src="/hand.png"
              alt="Phone"
              className="w-[300px] lg:w-[420px] h-auto object-contain mt-[0px] lg:mt-[40px] mb-[0px] lg:mb-[-40px] relative z-10"
            />

          </div>

          {/* ================= RIGHT FEATURES ================= */}
          <div className="flex flex-col gap-[60px] lg:gap-[120px] w-full lg:w-auto">

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

/* ================= FEATURE COMPONENT ================= */

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
    <div className="flex items-start gap-[16px] lg:gap-[24px] max-w-full lg:max-w-[360px]">

      {/* ICON */}
      <img
        src={icon}
        alt={title}
        className="w-[60px] h-[60px] lg:w-[84px] lg:h-[84px] object-contain"
      />

      {/* TEXT */}
      <div>

        <h4
          className={`${outfit.className}
            text-white
            text-[18px] lg:text-[24px]
            leading-[28px] lg:leading-[32px]
            font-medium
            mb-[6px] lg:mb-[8px]
          `}
        >
          {title}
        </h4>

        <p
          className={`${outfit.className}
            text-white/40
            text-[14px] lg:text-[18px]
            leading-[22px] lg:leading-[26px]
            font-normal
          `}
        >
          {desc}
        </p>

      </div>
    </div>
  );
}