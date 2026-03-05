import { outfit } from "../../fonts";

export default function TheTeam() {
  return (
    <section className="w-full bg-[#0B0F14] flex justify-center">

      <div className="w-full max-w-[1440px] px-6 sm:px-10 lg:px-[120px] py-[100px] lg:py-[140px]">

        {/* HEADER */}
        <div className="flex flex-col items-center text-center mb-[60px]">

          <p className={`${outfit.className} text-white/40 text-[14px] leading-[14px] tracking-[0.5px] mb-[10px]`}>
            Future-Focused
          </p>

          <h2 className={`${outfit.className} text-white text-[36px] sm:text-[48px] lg:text-[64px] leading-[44px] sm:leading-[56px] lg:leading-[72px] font-semibold mt-[8px] mb-[40px]`}>
            The Team
          </h2>
        </div>

        {/* WRAPPER (ROW GAP) */}
        <div className="flex flex-col gap-[60px]">

          {/* ================= ROW 1 ================= */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[24px] sm:gap-[30px] lg:gap-[40px] justify-items-center">

            {/* CARD 1 */}
            <div className="w-full max-w-[340px] flex flex-col">
              <div className="w-full aspect-square lg:h-[340px] rounded-[24px] overflow-hidden bg-[#1A1A1A] border border-white/10">
                <img src="/ceo.png" className="w-full h-full object-cover" />
              </div>

              <div className="flex flex-col mt-[12px] lg:mt-[16px]">
                <h4 className="text-white text-[18px] font-medium leading-[22px]">Eddy Denison</h4>
                <p className="text-white/40 text-[14px] lg:text-[16px] leading-[18px] lg:leading-[20px]">CEO</p>

                <p className="text-white/40 text-[14px] lg:text-[16px] leading-[22px] mt-[10px] lg:mt-[12px]">
                  Our CEO leads with vision and dedication, driving innovation and inspiring our team to achieve new heights.
                </p>
              </div>
            </div>

            {/* CARD 2 (reverse) */}
            <div className="w-full max-w-[340px] flex flex-col gap-[16px]">

              <div className="flex flex-col mt-[12px] lg:mt-[16px]">
                <h4 className="text-white text-[18px] font-medium leading-[22px]">Raghav</h4>
                <p className="text-white/40 text-[14px] lg:text-[16px] leading-[18px] lg:leading-[20px]">FO</p>

                <p className="text-white/40 text-[14px] lg:text-[16px] leading-[22px] mt-[10px] lg:mt-[12px]">
                  Our FO builds a culture of innovation and progress.
                </p>
              </div>

              <div className="w-full aspect-square lg:h-[340px] rounded-[24px] overflow-hidden bg-[#1A1A1A] border border-white/10">
                <img src="/fo.png" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* CARD 3 */}
            <div className="w-full max-w-[340px] flex flex-col">
              <div className="w-full aspect-square lg:h-[340px] rounded-[24px] overflow-hidden bg-[#1A1A1A] border border-white/10">
                <img src="/cto.png" className="w-full h-full object-cover" />
              </div>

              <div className="flex flex-col mt-[12px] lg:mt-[16px]">
                <h4 className="text-white text-[18px] font-medium leading-[22px]">Ravi charandhan</h4>
                <p className="text-white/40 text-[14px] lg:text-[16px] leading-[18px] lg:leading-[20px]">CTO</p>

                <p className="text-white/40 text-[14px] lg:text-[16px] leading-[22px] mt-[10px] lg:mt-[12px]">
                  Our CTO spearheads technology and innovation, ensuring our solutions are cutting-edge and future-ready
                </p>
              </div>
            </div>

          </div>

          {/* ================= ROW 2 ================= */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[24px] sm:gap-[30px] lg:gap-[40px] justify-items-center">

            {/* CARD 4 */}
            <div className="w-full max-w-[340px] flex flex-col">
              <div className="w-full aspect-square lg:h-[340px] rounded-[24px] overflow-hidden bg-[#1A1A1A] border border-white/10">
                <img src="/cdo.png" className="w-full h-full object-cover" />
              </div>

              <div className="flex flex-col mt-[12px] lg:mt-[16px]">
                <h4 className="text-white text-[18px] font-medium leading-[22px]">Eddy Denison</h4>
                <p className="text-white/40 text-[14px] lg:text-[16px] leading-[18px] lg:leading-[20px]">CDO</p>

                <p className="text-white/40 text-[14px] lg:text-[16px] leading-[22px] mt-[10px] lg:mt-[12px]">
                  Our CDO brings strategic vision and financial expertise, guiding our growth and ensuring long-term stability
                </p>
              </div>
            </div>

            {/* CARD 5 (reverse) */}
            <div className="w-full max-w-[340px] flex flex-col gap-[16px]">

              <div className="flex flex-col mt-[12px] lg:mt-[16px]">
                <h4 className="text-white text-[18px] font-medium leading-[22px]">Sara</h4>
                <p className="text-white/40 text-[14px] lg:text-[16px] leading-[18px] lg:leading-[20px]">CMO</p>

                <p className="text-white/40 text-[14px] lg:text-[16px] leading-[22px] mt-[10px] lg:mt-[12px]">
                  Our CMO leads with vision and dedication, driving innovation and inspiring our team to achieve new heights
                </p>
              </div>

              <div className="w-full aspect-square lg:h-[340px] rounded-[24px] overflow-hidden bg-[#1A1A1A] border border-white/10">
                <img src="/fo.png" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* CARD 6 */}
            <div className="w-full max-w-[340px] flex flex-col">
              <div className="w-full aspect-square lg:h-[340px] rounded-[24px] overflow-hidden bg-[#1A1A1A] border border-white/10">
                <img src="/cfo.png" className="w-full h-full object-cover" />
              </div>

              <div className="flex flex-col mt-[12px] lg:mt-[16px]">
                <h4 className="text-white text-[18px] font-medium leading-[22px]">John.J Dawson</h4>
                <p className="text-white/40 text-[14px] lg:text-[16px] leading-[18px] lg:leading-[20px]">CFO</p>

                <p className="text-white/40 text-[14px] lg:text-[16px] leading-[22px] mt-[10px] lg:mt-[12px]">
                  Our CFO brings strategic vision and financial expertise, guiding our growth and ensuring long-term stability
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}