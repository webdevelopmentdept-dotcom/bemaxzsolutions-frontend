import { outfit } from "../../fonts";

export default function Roadmap() {
  return (
    <section className="w-full bg-[#0B0F14] flex justify-center py-[100px]">

      <div className="w-full max-w-[1200px] px-[20px] lg:px-[40px]">

        {/* ================= TOP TEXT ================= */}
        <div className="flex flex-col items-center text-center mb-[80px]">

          <p className={`${outfit.className} text-white text-[14px] tracking-[2px] mb-[12px]`}>
            Clear Steps for Great Results
          </p>

          <h2
            className={`${outfit.className}
              text-[32px] lg:text-[64px]
              font-semibold
              text-white
              leading-[110%]
              mb-[16px]
            `}
          >
            The Roadmap to Success
          </h2>

          <p className={`${outfit.className} text-white/40 text-[14px] lg:text-[18px] max-w-[600px]`}>
            With a well-structured approach, we ensure your satisfaction at every stage
          </p>

        </div>

        {/* ================= ROADMAP ================= */}
        <div className="relative w-full flex justify-center">

          {/* BACKGROUND IMAGE */}
          <img
            src="/roadmap.png"
            alt="roadmap"
            className="hidden lg:block w-[1100px]"
          />

          {/* ================= STEP 1 ================= */}
<div className="hidden lg:block absolute left-[8%] top-[10%]">



  {/* NUMBER */}
 <div className="absolute left-[111px] top-[8px]">
  <span
    className={`${outfit.className} 
      text-white
      text-[64px] 
      font-semibold 
      leading-none`}
  >
    1
  </span>
</div>

 {/* TEXT */}
<div className="mt-[80px] flex flex-col items-center text-center ml-[40px]">

 
  {/* TITLE */}
  <h4
    className={`${outfit.className} text-white text-[24px] mt-[1px]`}
  >
    Design
  </h4>

  {/* DESCRIPTION */}
  <p
    className={`${outfit.className} text-white/40 text-[15px] mt-[6px] max-w-[180px]`}
  >
    Identify what makes your goals unique
  </p>

</div>

</div>

          {/* ================= STEP 2 ================= */}
  <div className="hidden lg:block absolute left-[50%] -translate-x-1/2 top-[15%] text-center">


<div className="absolute  top-[80px] -ml-[10px] ">
  <span
    className={`${outfit.className} 
      text-white
      text-[64px] 
      font-semibold 
      leading-none`}
  >
    2
  </span>
</div>
  {/* TEXT */}

 <div className="flex flex-col items-center text-center mt-[150px] -ml-[80px]">

  {/* TITLE */}
  <h4
    className={`${outfit.className} text-white text-[24px] font-medium mb-[6px]`}
  >
    Develop
  </h4>

  {/* DESCRIPTION */}
  <p
    className={`${outfit.className} text-white/40 text-[15px] leading-[22px] max-w-[180px]`}
  >
    Create a strategy that works
  </p>

</div>

</div>


         {/* ================= STEP 2 ================= */}
<div className="hidden lg:block absolute right-[25%] top-[0%] text-right">

  {/* NUMBER */}
 <div className="absolute left-[111px] top-[-18px]">
  <span
    className={`${outfit.className} 
      text-white
      text-[64px] 
      font-semibold 
      leading-none`}
  >
    3
  </span>
</div>

  {/* TEXT */}
<div className="flex flex-col items-center text-center mt-[50px] translate-x-[40px]">

 

  {/* TITLE */}
  <h4 className={`${outfit.className} text-white text-[24px] font-medium mb-[6px]`}>
    Launch
  </h4>

  {/* DESCRIPTION */}
  <p className={`${outfit.className} text-white/40 text-[15px] leading-[22px] max-w-[180px]`}>
    Delivering impactful results
  </p>

</div>

</div>

        </div>

        {/* ================= MOBILE VERSION ================= */}
        <div className="flex flex-col gap-[40px] lg:hidden mt-[40px] items-center">

          <Step number="1" title="Design" desc="Identify what makes your goals unique" />
          <Step number="2" title="Develop" desc="Create a strategy that works" highlight />
          <Step number="3" title="Launch" desc="Delivering impactful results" />

        </div>

        {/* ================= CTA ================= */}
       <div className="flex justify-center mt-[80px]">
  <button
    className={`
      ${outfit.className}
      bg-[#4EA62F]
      hover:bg-[#3e8f25]
      text-white
      text-[18px]
      font-medium
      px-[24px]
      py-[12px]
      rounded-[40px]
      leading-none
    `}
  >
    Learn more
  </button>
</div>

      </div>
    </section>
  );
}

/* ================= CIRCLE ================= */

function Circle({
  number,
  highlight,
}: {
  number: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`
        w-[64px] h-[64px] rounded-full flex items-center justify-center text-[18px]
        ${highlight ? "bg-white text-black" : "bg-white/10 text-white"}
      `}
    >
      {number}
    </div>
  );
}

/* ================= MOBILE STEP ================= */

function Step({
  number,
  title,
  desc,
  highlight,
}: {
  number: string;
  title: string;
  desc: string;
  highlight?: boolean;
}) {
  return (
    <div className="flex flex-col items-center text-center">

      <Circle number={number} highlight={highlight} />

      <h4 className={`${outfit.className} text-white mt-[12px] text-[18px]`}>
        {title}
      </h4>

      <p className={`${outfit.className} text-white/40 text-[14px] mt-[4px] max-w-[260px]`}>
        {desc}
      </p>

    </div>
  );
}