import { outfit } from "../../fonts";

export default function Footer() {
  return (
    <footer className={`${outfit.className} w-full bg-[#191818] flex justify-center px-[20px] md:px-[80px] xl:px-[160px] py-[80px]`}>

      <div className="w-full max-w-[1120px] flex flex-col gap-[60px] md:gap-[80px]">

        {/* TOP SECTION */}
        <div className="flex flex-col lg:flex-row justify-between gap-[50px]">

          {/* LEFT SIDE */}
          <div className="flex flex-col gap-[40px] max-w-[520px]">

            <h2 className="text-white text-[32px] md:text-[48px] font-semibold leading-[120%]">
              UI Wiki today and <br />
              transform your design!
            </h2>

            <p className="text-white text-[32px] md:text-[48px] font-semibold">
              Start by a{" "}
              <span className="text-[#4EA62F] underline">
                Hello
              </span>
            </p>

          </div>

          {/* RIGHT MENU */}
          <div className="flex flex-col gap-[16px]">

            <p className="text-white text-[18px] font-medium">
              Meet us at
            </p>

            <p className="text-white/40 text-[14px]">
              123 Maple Street, Springfield
            </p>

            <div className="flex flex-col gap-[20px] mt-[16px]">

              {["Home", "Features", "Blogs", "Pricing"].map((item, i) => (
                <a
                  key={i}
                  className={`relative w-fit cursor-pointer transition-colors duration-300 
                  ${item === "Features"
                      ? "text-[#4EA62F]"
                      : "text-white/60 hover:text-[#4EA62F] group"
                    }`}
                >
                  {item}

                  {item !== "Features" && (
                    <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#4EA62F] transition-all duration-300 group-hover:w-full"></span>
                  )}
                </a>
              ))}

            </div>

          </div>

        </div>

        {/* DIVIDER */}
        <div className="border-t border-white/10"></div>

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-[20px] text-white/40 text-[14px]">

          {/* LEFT */}
          <div className="flex items-center gap-[12px]">
            <img src="/uiwiki-logo.png" className="w-[40px] h-[40px]" />
            <p>© 2024 Copyright by UI Wiki</p>
          </div>

          {/* RIGHT */}
          <div className="flex gap-[24px]">
            <a className="cursor-pointer hover:text-white transition">
              Privacy policy
            </a>

            <a className="cursor-pointer hover:text-white transition">
              Terms and condition
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
}