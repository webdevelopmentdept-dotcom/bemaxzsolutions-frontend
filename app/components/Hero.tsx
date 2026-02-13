import Image from "next/image";

export default function Hero() {
  return (
    <section className="px-10 pt-20 pb-10 text-center">
      
      {/* Small Tags */}
      <div className="flex justify-center gap-6 text-sm text-green-400 mb-6">
        <span>● Design</span>
        <span>● Build</span>
        <span>● Launch</span>
      </div>

      {/* Heading */}
      <h1 className="text-5xl md:text-6xl font-bold leading-tight max-w-4xl mx-auto">
        We create modern websites, apps & digital products that{" "}
        <span className="text-green-500">
          grow your business.
        </span>
      </h1>

      {/* Description */}
      <p className="text-gray-400 mt-6 max-w-xl mx-auto">
        Our designs inspire you to innovate and achieve your creative goals.
      </p>

      {/* Buttons */}
      <div className="flex justify-center gap-6 mt-8">
        <button className="bg-green-500 px-6 py-3 rounded-full font-medium hover:opacity-90 transition">
          Hire Me
        </button>

        <button className="bg-green-700 px-6 py-3 rounded-full font-medium hover:opacity-90 transition">
          View Work
        </button>
      </div>

      {/* Image */}
      <div className="mt-16 flex justify-center">
        <Image
          src="/hero.png"
          alt="Hero Image"
          width={900}
          height={400}
          className="rounded-2xl"
        />
      </div>
    </section>
  );
}
