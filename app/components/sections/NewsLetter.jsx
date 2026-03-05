import { outfit } from "../../fonts";

export default function Newsletter() {
  return (
    <section className={`${outfit.className} w-full bg-[#191818] flex justify-center`}>
      
      {/* MAIN CONTAINER */}
      <div className="w-full max-w-[1120px] px-[20px] md:px-0 py-[60px] md:py-[140px] flex flex-col gap-[60px] md:gap-[80px]">

        {/* ================= TOP SECTION ================= */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-[40px] md:gap-[120px]">

          {/* LEFT */}
          <div className="flex flex-col gap-[16px] max-w-[370px]">

            {/* Tag */}
            <div className="w-fit h-[36px] px-[14px] flex items-center justify-center rounded-full border border-white/[0.06] ">
              <p className="text-[14px] text-white leading-none">
                Grow More
              </p>
            </div>

            {/* Heading */}
            <h2 className="text-white text-[32px] md:text-[48px] font-semibold leading-[120%] tracking-[-0.5px]">
              Empowering You <br /> to Achieve
            </h2>

            {/* Description */}
            <p className="text-white/40 text-[14px] md:text-[18px] leading-[160%]">
              UI Wiki helps maintain design uniformity by centralizing UI guidelines and best practices.
            </p>

          </div>

          {/* RIGHT */}
          <div className="flex flex-col gap-[16px] w-full md:w-auto">

            {/* Label */}
            <p className="text-white text-[24px] font-medium leading-none">
              Subscribe to our Newsletter
            </p>

            {/* Input + Button */}
          <div className="flex flex-col sm:flex-row items-center gap-[12px] w-full">

              {/* Input */}
              <div className="flex items-center gap-[10px] h-[48px] pl-[16px] pr-[18px] rounded-full bg-white/[0.02] border border-white/[0.08] w-full sm:w-[277px]">
<img src="/message.png" className="h-[18px] w-[18px]" alt="message icon" />

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-transparent outline-none text-white text-[18px] placeholder:text-white w-full"
                />

              </div>

              {/* Button */}
              <button className="h-[48px] px-[24px] rounded-full bg-[#4EA62F] text-white text-[18px] font-semibold whitespace-nowrap hover:opacity-90 transition">
                Notify me
              </button>

            </div>

          </div>

        </div>

        {/* ================= TESTIMONIALS ================= */}
      {/* TESTIMONIALS */}
<div className="w-full max-w-[1120px] px-[16px] md:px-0 mt-[-10px] md:mt-[-20px] overflow-x-auto no-scrollbar">

<div className="flex gap-[20px] md:gap-[50px] pb-[10px]">

    {[
      {
        name: "Arun Kumar",
        role: "Startup Founder",
        text: "Bemaxz delivered our website perfectly and on time. The design looks modern and professional. Highly recommended!",
      },
      {
        name: "Priya Sharma",
        role: "Product Manager",
        text: "Amazing UI/UX work! Our app became much easier to use after redesign. Great communication throughout the project.",
      },
      {
        name: "Karthik R",
        role: "Small Shop Owner",
        text: "They built a fast, responsive website for our business. Very reliable team and smooth experience overall.",
      },
    ].map((item, i) => (

     <div
  key={i}
  className="
 min-w-[280px] md:min-w-[340px]
min-h-[213px]
  border border-white/[0.08]
  bg-white/[0.02]
  rounded-[24px]
  px-[24px] py-[24px]
  flex flex-col
"
>
  
  {/* HEADER */}
  <div className="flex items-center justify-between">

    <div className="flex items-center gap-[10px]">

      <img
        src="/dashboard.png"
        className="w-[24px] h-[24px]"
        alt="icon"
      />

      <div className="leading-none">
        <p className="text-white text-[16px] font-medium">
          {item.name},
        </p>
        <p className="text-white/40 text-[12px] mt-[4px]">
          {item.role}
        </p>
      </div>

    </div>

    {/* ARROW BUTTON */}
<div className=" flex items-center justify-center">
      <img
        src="/newsicon.png"
        className="w-[32px] h-[32px]"
        alt="icon"
      />
    </div>

  </div>

  {/* DIVIDER */}
  <div className="w-full h-[1px] bg-white/[0.06] my-[24px]" />

  {/* TEXT */}
  <p className="text-white/40 text-[16px] leading-[160%]">
    “{item.text}”
  </p>

</div>

    ))}

  </div>

</div>

      </div>
    </section>
  );
}