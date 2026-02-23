import { outfit } from "../../fonts";

export default function Trust() {
  return (
    <section className="w-full bg-[#191818] flex justify-center pt-[160px] pb-[136px]">

      {/* Main Container */}
      <div className="w-full max-w-[1120px] flex flex-col gap-[60px]">

        {/* ================= HEADING ================= */}
        <div className="flex flex-col gap-[24px]">

          <div className="w-fit px-[16px] py-[8px] rounded-[40px] border border-white/10 bg-white/5">
            <p className={`${outfit.className} text-[14px] text-white/70`}>
              Trusted Innovation
            </p>
          </div>

          <h2 className={`${outfit.className} text-[72px] font-semibold text-white leading-[100%]`}>
            Innovate with Confidence
          </h2>

          <p className={`${outfit.className} text-[18px] text-white/60 max-w-[471px]`}>
            Drive your progress with our advanced reliable solutions
          </p>
        </div>


        {/* ================= GRID SECTION ================= */}
       <div className="w-full flex items-start gap-[24px]">

  {/* ================= LEFT SIDE (704px) ================= */}
  <div className="w-[704px] flex flex-col gap-[24px]">

    {/* ===== Top Big Card (Protection) ===== */}
    <div className="
      w-full
      h-[219px]
      p-[24px]
      rounded-[24px]
      border border-white/10
      bg-[#141414]
      flex
      justify-between
    ">

      {/* Left Content */}
  <div className={`w-[321px] h-full flex flex-col justify-between ${outfit.className}`}>

  {/* ===== Title Row ===== */}
  <div className="flex items-center justify-between">

    <div className="flex items-center gap-[8px]">
      
      <div className="w-[16px] h-[16px] flex items-center justify-center">
        <img
          src="/security-safe.png"
          alt="Protection icon"
          className="w-full h-full object-contain"
        />
      </div>

      <p className="text-white text-[18px] font-medium leading-[100%]">
        Protection
      </p>
    </div>

    <div className="w-[32px] h-[32px] p-[8px] bg-white/10 rounded-[6px] flex items-center justify-center">
      <img
        src="/arrowtopright.png"
        alt="arrow"
        className="w-[16px] h-[16px]"
      />
    </div>

  </div>


  {/* ===== Middle Content ===== */}
  <div className="flex flex-col gap-[16px]">

    <h3 className="text-white text-[18px] font-medium leading-[140%]">
      Protect all your Digital documents Data through UI Wiki
    </h3>

    <p className="text-white/40 text-[16px] font-normal leading-[140%]">
      Protection features ensure the safety and security of your data.
    </p>

  </div>

</div>
      {/* Right Graph Area */}
      <div className="
        w-[311px]
        h-full
        rounded-[12px]
        border border-white/10
        bg-[#111111]
        p-[16px]
        flex
        flex-col
        justify-between
      ">

        <div className="flex justify-between items-center">
          <p className="text-white/70 text-[13px]">System scan</p>
          <div className="text-white/60 text-[12px] bg-white/5 px-[10px] py-[4px] rounded-[20px]">
            Weekly
          </div>
        </div>

        <div>
          <p className="text-white text-[24px] font-semibold">
            40<span className="text-white/50 text-[14px]">/100</span>
          </p>
          <p className="text-white/40 text-[12px]">
            Protection of data
          </p>
        </div>

        {/* Fake graph placeholder */}
        <div className="h-[60px] bg-gradient-to-r from-[#34C759]/40 to-transparent rounded-[8px]" />

      </div>

    </div>


    {/* ===== Bottom Two Cards ===== */}
    <div className="w-full flex gap-[24px]">

      {/* Multi-layers */}
      <div className="
        w-1/2
        h-[144px]
        p-[24px]
        rounded-[24px]
        border border-white/10
        bg-[#141414]
        flex flex-col gap-[16px]
      ">

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[8px]">
            <div className="w-[10px] h-[10px] bg-[#34C759] rounded-full" />
            <p className="text-white text-[14px] font-medium">
              Multi-layers
            </p>
          </div>

          <div className="w-[28px] h-[28px] bg-white/5 rounded-[8px] flex items-center justify-center text-white/60 text-sm">
            ↗
          </div>
        </div>

        <p className="text-white/50 text-[14px] leading-[140%]">
          Multi-layers offer enhanced depth by integrating various functionality.
        </p>

      </div>


      {/* Encryption */}
      <div className="
        w-1/2
        h-[144px]
        p-[24px]
        rounded-[24px]
        border border-white/10
        bg-[#141414]
        flex flex-col gap-[16px]
      ">

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[8px]">
            <div className="w-[10px] h-[10px] bg-[#34C759] rounded-full" />
            <p className="text-white text-[14px] font-medium">
              Encryption
            </p>
          </div>

          <div className="w-[28px] h-[28px] bg-white/5 rounded-[8px] flex items-center justify-center text-white/60 text-sm">
            ↗
          </div>
        </div>

        <p className="text-white/50 text-[14px] leading-[140%]">
          Encryption safeguards your sensitive information by code converting
        </p>

      </div>

    </div>

  </div>


  {/* ================= RIGHT SIDE (392px) ================= */}
  <div className="w-[392px] flex flex-col gap-[24px]">

    {/* Artificial Intelligence Card */}
    <div className="
      w-full
      h-[164px]
      p-[24px]
      rounded-[24px]
      border border-white/10
      bg-[#141414]
      flex flex-col gap-[16px]
    ">

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-[8px]">
          <div className="w-[10px] h-[10px] bg-[#34C759] rounded-full" />
          <p className="text-white text-[14px] font-medium">
            Artificial intelligence
          </p>
        </div>

        <div className="w-[28px] h-[28px] bg-white/5 rounded-[8px] flex items-center justify-center text-white/60 text-sm">
          ↗
        </div>
      </div>

      <p className="text-white/50 text-[14px] leading-[140%]">
        AI transforms industries by automating tasks, enhancing decision-making, and driving innovation
      </p>

    </div>


    {/* Image Card */}
    <div className="
      w-full
      h-[247px]
      p-[24px]
      rounded-[24px]
      border border-white/10
      bg-[#141414]
      overflow-hidden
      flex flex-col gap-[16px]
    ">

      <div className="h-[140px] rounded-[16px] bg-white/10" />

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-[8px]">
          <div className="w-[10px] h-[10px] bg-[#34C759] rounded-full" />
          <p className="text-white text-[14px] font-medium">
            Encryption
          </p>
        </div>

        <div className="w-[28px] h-[28px] bg-white/5 rounded-[8px] flex items-center justify-center text-white/60 text-sm">
          ↗
        </div>
      </div>

    </div>

  </div>

</div>
        {/* ================= GRID END ================= */}


        {/* Browse Button */}
        <div className="flex justify-center">
          <button className="
            px-[32px]
            h-[48px]
            rounded-[40px]
            bg-[#34C759]
            text-black
            text-[14px]
            font-medium
          ">
            Browse all
          </button>
        </div>

      </div>
    </section>
  );
}