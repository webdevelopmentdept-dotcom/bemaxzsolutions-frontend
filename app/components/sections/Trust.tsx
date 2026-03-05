import { outfit } from "../../fonts";

export default function Trust() {
  return (
  <section className={`${outfit.className} w-full bg-[#191818] flex justify-center pt-[80px] pb-[80px] md:pt-[160px] md:pb-[136px]`}>

      {/* Main Container */}
      <div className="w-full max-w-[1120px] px-[16px] md:px-0 flex flex-col gap-[60px]">

        {/* ================= HEADING ================= */}
        <div className="flex flex-col gap-[24px]">

          <div className="w-fit px-[16px] py-[8px] rounded-[40px] border border-white/10 bg-white/5">
            <p className=" text-[14px] text-white/70">
              Trusted Innovation
            </p>
          </div>

          <h2 className=" text-[36px] md:text-[72px] font-semibold text-white leading-[100%]">
            Innovate with Confidence
          </h2>

          <p className=" text-[16px] md:text-[18px] text-white/60 max-w-[471px">
            Drive your progress with our advanced reliable solutions
          </p>
        </div>


        {/* ================= GRID SECTION ================= */}
        <div className="w-full flex flex-col md:flex-row gap-[24px]">

          {/* ================= LEFT SIDE ================= */}
          <div className="w-full md:w-[704px] flex flex-col gap-[24px]">

            {/* ===== Top Big Card ===== */}
            <div className="
              w-full
            min-h-[267px]
              p-[24px]
              rounded-[24px]
              border border-white/10
              bg-[#141414]
              flex flex-col md:flex-row gap-[20px]
            ">

              {/* Left Content */}
              <div className="w-full md:w-[321px] flex flex-col justify-between">

                {/* Title Row */}
                <div className="flex items-center justify-between">

                  <div className="flex items-center gap-[8px]">
                    <img src="/security-safe.png" className="w-[16px] h-[16px]" />
                    <p className="text-white text-[18px] font-medium">Protection</p>
                  </div>

                  <div className="w-[32px] h-[32px] bg-white/10 rounded-[6px] flex items-center justify-center">
                    <img src="/arrowtopright.png" className="w-[16px] h-[16px]" />
                  </div>

                </div>

                {/* Middle */}
                <div className="flex flex-col gap-[26px]">
                  <h3 className="text-white text-[18px] leading-[140%]">
                    Protect all your Digital documents Data through UI Wiki
                  </h3>

                  <p className="text-white/40 text-[16px]">
                    Protection features ensure the safety and security of your data.
                  </p>
                </div>

              </div>

              {/* Right Graph Card */}
              <div className="
                w-full md:w-[311px]
                rounded-[12px]
                border border-white/[0.08]
                bg-[#111111]
                p-[16px]
                flex flex-col gap-[16px]
              ">

                {/* Top */}
                <div className="flex items-start justify-between">

                  <div className="flex flex-col gap-[8px]">
                    <p className=" text-white/40 text-[14px]">
                      System scan
                    </p>

                    <p className=" text-white text-[28px] font-medium">
                      40
                      <span className="text-white/40 text-[14px] ml-[2px]">/100</span>
                    </p>

                    <p className="text-white/40 text-[13px]">
                      Protection of data
                    </p>
                  </div>

                  <div className="
                    h-[34px]
                    px-[16px]
                    flex items-center gap-[8px]
                    rounded-[40px]
                    bg-white/[0.03]
                    border border-white/[0.08]
                    text-white text-[14px]
                 ">
                    Weekly
                    <img src="/chevrondown.png" className="w-[16px] h-[16px]" />
                  </div>

                </div>

                {/* Graph */}
              {/* Graph */}
<div className="flex flex-col gap-[4px]">

  <div className="relative h-[90px] overflow-hidden">
    <img
      src="/trust-graph.png"
      className="w-full h-full object-cover opacity-90"
    />
  </div>

  <div className="flex justify-between text-white/30 text-[12px] px-[4px]">
    <span>0</span>
    <span>20</span>
    <span>40</span>
    <span>60</span>
    <span>100</span>
  </div>

</div>


              </div>

            </div>


            {/* ===== Bottom Cards ===== */}
            <div className="flex flex-col md:flex-row gap-[24px]">

              {/* Card 1 */}
              <div className="w-full md:w-1/2 h-[144px] p-[24px] rounded-[24px] border border-white/10 bg-[#141414] flex flex-col gap-[16px]">

                <div className="flex items-center justify-between">
                  <div className="flex gap-[8px] items-center">
                    <img src="/layer.png" className="w-[16px] h-[16px]" />
                    <p className="text-white text-[18px] font-medium">Multi-layers</p>
                  </div>

                  <div className="w-[32px] h-[32px] bg-white/10 rounded-[6px] flex items-center justify-center">
                    <img src="/arrowtopright.png" className="w-[16px] h-[16px]" />
                  </div>
                </div>

                <p className="text-white/40 text-[16px]">
                  Multi-layers offer enhanced depth by integrating various functionality.
                </p>

              </div>

              {/* Card 2 */}
              <div className="w-full md:w-1/2 h-[144px] p-[24px] rounded-[24px] border border-white/10 bg-[#141414] flex flex-col gap-[16px]">

                <div className="flex items-center justify-between">
                  <div className="flex gap-[8px] items-center">
                    <img src="/security-safe.png" className="w-[16px] h-[16px]" />
                    <p className="text-white text-[18px] font-medium">Encryption</p>
                  </div>

                  <div className="w-[32px] h-[32px] bg-white/10 rounded-[6px] flex items-center justify-center">
                    <img src="/arrowtopright.png" className="w-[16px] h-[16px]" />
                  </div>
                </div>

                <p className="text-white/40 text-[16px]">
                  Encryption safeguards your sensitive information by code converting
                </p>

              </div>

            </div>

          </div>


          {/* ================= RIGHT SIDE ================= */}
          <div className="w-full md:w-[392px] flex flex-col gap-[24px]">

            {/* AI Card */}
            <div className=" p-[24px] rounded-[24px] border border-white/10 bg-[#141414] flex flex-col gap-[16px]">

              <div className="flex justify-between">
                <div className="flex gap-[8px] items-center">
                  <img src="/magicpen.png" className="w-[16px] h-[16px]" />
                  <p className="text-white text-[18px] font-medium">
                    Artificial intelligence
                  </p>
                </div>

                <div className="w-[32px] h-[32px] bg-white/10 rounded-[6px] flex items-center justify-center">
                  <img src="/arrowtopright.png" className="w-[16px] h-[16px]" />
                </div>
              </div>

              <p className="text-white/50 text-[16px]">
                AI transforms industries by automating tasks, enhancing decision-making, and driving innovation
              </p>

            </div>


            {/* Image Card */}
            <div className="p-[24px] rounded-[24px] border border-white/10 bg-[#141414] flex flex-col gap-[16px]">

              <div className="h-[140px] rounded-[16px] overflow-hidden">
                <img src="/trustback.png" className="w-full h-full object-cover" />
              </div>

              <div className="flex justify-between items-center">
                <div className="flex gap-[8px] items-center">
                  <img src="/security-safe.png" className="w-[16px] h-[16px]" />
                  <p className="text-white text-[18px] font-medium">Encryption</p>
                </div>

                <div className="w-[32px] h-[32px] bg-white/10 rounded-[6px] flex items-center justify-center">
                  <img src="/arrowtopright.png" className="w-[16px] h-[16px]" />
                </div>
              </div>

            </div>

          </div>

        </div>


        {/* Button */}
        <div className="flex justify-center">
          <button className={`${outfit.className} px-[24px] h-[48px] rounded-[40px] bg-[#4EA62F] text-white text-[18px] font-semibold`}>
            Browse all
          </button>
        </div>

      </div>
    </section>
  );
}