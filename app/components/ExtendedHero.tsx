import React from "react";
import Image from "next/image";

const focusAreas = [
  "Firmware debugging",
  "Secure device thinking",
  "PCB / schematic literacy",
  "Hardware-software integration",
];

const HeroExtended = () => {
  return (
    <section className="bg-[#020b18] px-6 py-20 text-[#e6f6ff] lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-cyan-300/10 to-blue-500/10 p-4 shadow-2xl shadow-blue-950/30">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(103,232,249,0.22),transparent_45%)]" />
          <Image
            src="/room1.png"
            alt="Joel Mathew portfolio illustration"
            width={620}
            height={460}
            className="relative h-full min-h-[320px] w-full rounded-[1.5rem] object-cover opacity-90 saturate-125 transition duration-500 group-hover:scale-[1.02]"
            priority
          />
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-orange-200">Why talk to me</p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            I bring systems thinking from circuit diagrams to user-facing demos.
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            My portfolio is now tuned for embedded systems career fair conversations:
            quick proof of hands-on hardware work, clear technical keywords from my
            resume, and project cards that explain what I built, tested, and learned.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {focusAreas.map((area) => (
              <div key={area} className="rounded-2xl border border-cyan-200/15 bg-white/[0.05] p-4 text-cyan-50">
                <span className="mr-2 text-orange-200">▸</span>
                {area}
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-2xl border border-orange-200/20 bg-orange-200/10 p-5 text-sm leading-6 text-orange-50">
            <strong className="text-orange-100">Career fair pitch:</strong> I am looking for embedded, firmware,
            hardware validation, and security-adjacent internships where I can pair low-level coding with disciplined testing.
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroExtended;
