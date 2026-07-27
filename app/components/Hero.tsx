import React from "react";

const highlights = [
  "Embedded systems",
  "Cybersecurity",
  "FPGA + MCU projects",
  "C / C++ / Python",
];

const Hero = () => {
  return (
    <section className="relative isolate overflow-hidden bg-[#020b18] px-6 py-24 text-[#e6f6ff] sm:py-32 lg:px-8">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,_rgba(20,184,166,0.28),_transparent_34%),radial-gradient(circle_at_80%_20%,_rgba(59,130,246,0.24),_transparent_28%),linear-gradient(135deg,_#020b18_0%,_#012346_55%,_#03111f_100%)]" />
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent" />
      <div className="absolute left-1/2 top-16 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-200/20 bg-white/5 px-4 py-2 text-sm text-cyan-100 shadow-[0_0_40px_rgba(45,212,191,0.12)] backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_16px_#6ee7b7]" />
            Career fair ready: embedded, hardware, and security
          </div>
          <h1 className="max-w-4xl text-5xl font-bold tracking-tight text-white sm:text-7xl">
            Joel Mathew
            <span className="block bg-gradient-to-r from-cyan-200 via-blue-200 to-orange-200 bg-clip-text text-3xl text-transparent sm:text-5xl">
              Computer engineer building reliable connected devices.
            </span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
            Texas A&amp;M student focused on embedded systems, electrical design,
            cybersecurity, and practical software. I like turning messy hardware
            constraints into polished demos recruiters can understand in seconds.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="/jmathew_site-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-cyan-200 px-6 py-3 text-center font-bold text-[#02101e] shadow-[0_0_32px_rgba(103,232,249,0.28)] transition hover:-translate-y-1 hover:bg-white"
            >
              Open resume
            </a>
            <a
              href="mailto:jmathew27.career@gmail.com"
              className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-center font-bold text-white backdrop-blur transition hover:-translate-y-1 hover:border-orange-200 hover:text-orange-200"
            >
              Contact me
            </a>
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            {highlights.map((highlight) => (
              <span
                key={highlight}
                className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm text-cyan-50"
              >
                {highlight}
              </span>
            ))}
          </div>
        </div>

        <div className="relative rounded-[2rem] border border-cyan-200/20 bg-white/[0.06] p-6 shadow-2xl shadow-cyan-950/40 backdrop-blur">
          <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-orange-300/20 blur-2xl" />
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-200">Recruiter snapshot</p>
          <div className="mt-6 space-y-4">
            {[
              ["Target roles", "Embedded Software • Firmware • Hardware Security"],
              ["Hands-on", "STM32, ESP32, Raspberry Pi, FPGA PWM motor control"],
              ["Toolchain", "KiCad, I2S, HDL simulation, Linux, Git/GitHub"],
              ["Signal", "Cybersecurity certificates + team hackathon/game jam delivery"],
            ].map(([label, value]) => (
              <div key={label} className="rounded-2xl border border-white/10 bg-[#021426]/80 p-4">
                <dt className="text-xs uppercase tracking-widest text-slate-400">{label}</dt>
                <dd className="mt-1 text-base font-bold text-white">{value}</dd>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
