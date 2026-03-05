import { generalSans } from "../../fonts";

export default function Contact() {
  return (
 <section className={`${generalSans.className} w-full bg-[#191818] flex justify-center px-[20px] md:px-[60px] xl:px-[100px] py-[80px] md:py-[136px]`}>

      {/* MAIN CONTAINER */}
      <div className="w-full max-w-[1240px] flex flex-col lg:flex-row items-start justify-between gap-[60px] lg:gap-[100px]">

        {/* LEFT SIDE */}
        <div className="w-full lg:w-[653px] flex flex-col gap-[32px] md:gap-[40px]">

          {/* Heading */}
          <div className="flex flex-col gap-[16px]">

           <h2 className="text-white text-[32px] md:text-[44px] font-medium leading-[120%]">
              Get in Touch – <br /> We're Here to Help!
            </h2>

            <p className="text-white/70 text-[18px] leading-[160%]">
              Have questions or need assistance? Our team is always ready to guide you on your journey.
            </p>

          </div>

          {/* CONTACT GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-[40px] md:gap-x-[80px] gap-y-[24px]">

            {/* Call Center */}
            <div className="flex flex-col gap-[6px]">
              <p className="text-white text-[18px] font-medium">Call Center</p>
              <p className="text-white/40 text-[14px]">(208) 555-0112</p>
            </div>

            {/* Location */}
            <div className="flex flex-col gap-[6px]">
              <p className="text-white text-[18px] font-medium">Our Location</p>
              <p className="text-white/40 text-[14px]">
                1901 Thornridge Cir. Shiloh, Hawaii
              </p>
            </div>

            {/* Social */}
            <div className="flex flex-col gap-[8px]">
              <p className="text-white text-[18px] font-medium">Social Network</p>
              <p className="text-white/40 text-[14px]">Nusa Penida, Indonesia</p>

              <div className="flex gap-[10px] mt-[4px]">

                <div className="w-[40px] h-[40px] rounded-full border border-white/20 flex items-center justify-center">
                  <img src="/facebook.png" className="w-[17px] h-[17px]" />
                </div>

                <div className="w-[40px] h-[40px] rounded-full border border-white/20 flex items-center justify-center">
                  <img src="/twitter.png" className="w-[17px] h-[17px]" />
                </div>

                <div className="w-[40px] h-[40px] rounded-full border border-white/20 flex items-center justify-center">
                  <img src="/instagram-fill.png" className="w-[17px] h-[17px]" />
                </div>

                <div className="w-[40px] h-[40px] rounded-full border border-white/20 flex items-center justify-center">
                  <img src="/linkedin.png" className="w-[17px] h-[17px]" />
                </div>

              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col gap-[6px]">
              <p className="text-white text-[18px] font-medium">Email</p>
              <p className="text-white/40 text-[14px]">
                nathan.roberts@example.com
              </p>
            </div>

          </div>
        </div>

    {/* RIGHT SIDE FORM */}
<div className="w-full lg:w-[487px] p-[24px] flex flex-col gap-[24px]">

  {/* Heading */}
  <div className="flex flex-col gap-[6px]">

    <h3 className="text-white text-[22px] font-medium">
      Send Us a Message
    </h3>

    <p className="text-white/60 text-[16px] leading-[160%]">
      Have questions or need assistance? Our team is always ready to guide you on your journey.
    </p>

  </div>


  {/* FORM */}
  <div className="flex flex-col gap-[16px]">

    {/* Full Name */}
    <div className="flex flex-col gap-[6px]">

  <label className="text-white/40 text-[14px]">
    Full Name
  </label>

  <input
    type="text"
    placeholder="Your full name"
    className="h-[48px] px-[16px] rounded-[14px] bg-transparent border border-white/40 text-white text-[14px] outline-none placeholder:text-white/40"
  />

</div>
<div className="flex flex-col gap-[6px]">

  <label className="text-white/40 text-[14px]">
   Email
  </label>

  <input
    type="text"
    placeholder="Your Subject"
    className="h-[48px] px-[16px] rounded-[14px] bg-transparent border border-white/40 text-white text-[14px] outline-none placeholder:text-white/40"
  />

</div>
<div className="flex flex-col gap-[6px]">

  <label className="text-white/40 text-[14px]">
Subject
  </label>

  <input
    type="text"
    placeholder="Your full subject"
    className="h-[48px] px-[16px] rounded-[14px] bg-transparent border border-white/40 text-white text-[14px] outline-none placeholder:text-white/40"
  />

</div>
<div className="flex flex-col gap-[6px]">

  <label className="text-white/40 text-[14px]">
Message
  </label>

  <input
    type="text"
    placeholder="Your message"
    className="h-[48px] px-[16px] rounded-[14px] bg-transparent border border-white/40 text-white text-[14px] outline-none placeholder:text-white/40"
  />

</div>

   
 

    

  </div>


  {/* Button */}
  <button className="h-[56px] rounded-full bg-white text-black text-[16px] font-medium hover:opacity-90 transition">
    Send Message
  </button>

</div>

      </div>
    </section>
  );
}