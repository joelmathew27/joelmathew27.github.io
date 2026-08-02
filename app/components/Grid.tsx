import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import {
  IconAdjustments,
  IconAlignBoxBottomRight,
  IconDashboard,
  IconTableColumn,
  IconShieldLock,
} from "@tabler/icons-react";
import { JetBrains_Mono } from "next/font/google";
import Image from "next/image";

const jetBrainsMono = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "700"] });

/* ── Section header ─────────────────────────────────────────────── */
const SectionLabel = ({ label, color }: { label: string; color: string }) => (
  <div className="max-w-7xl mx-auto px-4 mb-6 mt-14 first:mt-10">
    <div className="flex items-center gap-3">
      <span
        className="text-xs font-bold tracking-[0.2em] uppercase"
        style={{ color }}
      >
        {label}
      </span>
      <div
        style={{
          flex: 1,
          height: "1px",
          background: `linear-gradient(90deg, ${color}40, transparent)`,
        }}
      />
    </div>
  </div>
);

/* ── Card image with overlay ────────────────────────────────────── */
const CardImage = ({ src }: { src: string }) => (
  <div className="relative flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden bg-[#0a1a2e]">
    <Image
      src={src}
      alt=""
      width={400}
      height={250}
      style={{ width: "100%", height: "100%", objectFit: "cover" }}
      className="rounded-xl"
    />
    <div
      style={{
        position: "absolute",
        inset: 0,
        background: "linear-gradient(180deg, transparent 60%, rgba(1,35,70,0.6) 100%)",
        borderRadius: "0.75rem",
      }}
    />
  </div>
);

/* ── Tech tags ──────────────────────────────────────────────────── */
const Tags = ({ tags }: { tags: string[] }) => (
  <div className="flex flex-wrap gap-1.5 mt-2">
    {tags.map((t) => (
      <span
        key={t}
        className="text-[0.62rem] px-2 py-0.5 rounded-full border border-white/[0.08] text-[#94a3b8]"
        style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
      >
        {t}
      </span>
    ))}
  </div>
);

/* ── Engineering projects ───────────────────────────────────────── */
const engineeringProjects = [
  {
    title: "ESP32 I2S Audio Playback Device",
    subtitle: "Spring 2025",
    description:
      "Validated the I2S audio pipeline on Raspberry Pi before porting to ESP32. Designed schematics and component layouts in KiCad. Firmware in C with I2S peripheral drivers.",
    header: <CardImage src="./esp32_note.png" />,
    className: "md:col-span-2",
    icon: <IconAdjustments className="h-4 w-4 text-[#38bdf8]" />,
    link: "https://github.com/joelmathew27",
    tags: ["C", "ESP32", "I2S", "KiCad", "Embedded"],
    featured: true,
  },
  {
    title: "STM32 Secure Notebook",
    subtitle: "Spring 2025",
    description:
      "Portable encrypted note-taking device with chorded-key input. STM32 firmware with on-device encryption for secure, untethered data capture.",
    header: <CardImage src="./stm32.png" />,
    className: "md:col-span-1",
    icon: <IconShieldLock className="h-4 w-4 text-[#38bdf8]" />,
    link: "https://github.com/joelmathew27",
    tags: ["C", "STM32", "Encryption"],
  },
  {
    title: "FPGA PWM Motor Controller",
    subtitle: "Fall 2024",
    description:
      "State-based PWM motor controller designed in HDL on Altera MAX. Verified control logic through waveform simulation and validated on physical hardware.",
    header: <CardImage src="./altera_max.jpg" />,
    className: "md:col-span-2",
    icon: <IconAdjustments className="h-4 w-4 text-[#38bdf8]" />,
    link: "https://github.com/joelmathew27",
    tags: ["HDL", "FPGA", "Altera MAX", "PWM"],
    featured: true,
  },
  {
    title: "Data Structures & Algorithms",
    subtitle: "Ongoing",
    description:
      "Hash tables, balanced trees, graph algorithms, and sorting in Java and C++. Deliberate practice for systems-level problem solving and technical interviews.",
    header: <CardImage src="./dataStructuresGithub.png" />,
    className: "md:col-span-1",
    icon: <IconAlignBoxBottomRight className="h-4 w-4 text-[#38bdf8]" />,
    link: "https://github.com/joelmathew27/dataStructures",
    tags: ["Java", "C++", "DSA"],
  },
  {
    title: "Portfolio Website",
    subtitle: "Spring 2025",
    description:
      "This site — Next.js, TypeScript, Tailwind CSS. Static export deployed on GitHub Pages. Designed for career fair recruiters to scan in under 30 seconds.",
    header: <CardImage src="./websiteDev.png" />,
    className: "md:col-span-2",
    icon: <IconDashboard className="h-4 w-4 text-[#38bdf8]" />,
    link: "https://github.com/joelmathew27/joelmathew27.github.io",
    tags: ["Next.js", "TypeScript", "Tailwind"],
  },
];

/* ── Creative projects ──────────────────────────────────────────── */
const creativeProjects = [
  {
    title: "Project Ember",
    subtitle: "Ongoing",
    description:
      "Long-form game built in Godot. Original music, systems architecture, and project management on a sustained creative work.",
    header: <CardImage src="./emberPreview.png" />,
    className: "md:col-span-1",
    icon: <IconAdjustments className="h-4 w-4 text-[#a78bfa]" />,
    link: "https://github.com/joelmathew27/project_ember",
    tags: ["Godot", "GDScript", "Game Design"],
  },
  {
    title: "Dime — TAMUHack 2025",
    subtitle: "Jan 2025",
    description:
      "College budgeting app built in a weekend. Tracks student expenses and income with a clean mobile interface.",
    header: <CardImage src="./dimeSS.png" />,
    className: "md:col-span-1",
    icon: <IconTableColumn className="h-4 w-4 text-[#a78bfa]" />,
    link: "https://github.com/joelmathew27/project_dime",
    tags: ["Hackathon", "Mobile"],
  },
  {
    title: "Blind Faith — Chillenium 2025",
    subtitle: "Spring 2025",
    description:
      "48-hour game jam entry. Collaborated on a team to design, build, and ship a complete game under deadline.",
    header: <CardImage src="./blindFaithTitle.png" />,
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-[#a78bfa]" />,
    link: "https://fish-food-studios.itch.io/blind-faith",
    tags: ["Game Jam", "Godot", "Team"],
  },
  {
    title: "Jungle King — Chillenium 2024",
    subtitle: "Fall 2024",
    description:
      "Game jam entry in Godot. Rapid prototyping and iteration with a small team over a weekend.",
    header: <CardImage src="./jungleKingGodot.png" />,
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-[#a78bfa]" />,
    link: "https://fish-food-studios.itch.io/jungle-king",
    tags: ["Game Jam", "Godot"],
  },
];

/* ── Main component ─────────────────────────────────────────────── */
export function ProjectsBentoGrid() {
  return (
    <div className={jetBrainsMono.className} style={{ background: "#012346", paddingBottom: "3rem" }}>
      {/* Engineering */}
      <SectionLabel label="Engineering" color="#38bdf8" />
      <BentoGrid className="max-w-7xl mx-auto md:auto-rows-[20rem]">
        {engineeringProjects.map((item, i) => (
          <BentoGridItem
            key={i}
            title={
              <div>
                <div className="font-bold text-[#e2e8f0] text-sm">{item.title}</div>
                <div className="text-[0.65rem] text-[#38bdf8] mt-0.5 opacity-70" style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}>
                  {item.subtitle}
                </div>
              </div>
            }
            description={
              <div style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}>
                <span className="text-[#94a3b8] text-xs leading-relaxed">{item.description}</span>
                <Tags tags={item.tags} />
              </div>
            }
            header={item.header}
            className={`${item.className} ${(item as any).featured ? 'md:row-span-1' : ''}`}
            icon={item.icon}
            link={item.link}
          />
        ))}
      </BentoGrid>

      {/* Creative */}
      <SectionLabel label="Creative" color="#a78bfa" />
      <BentoGrid className="max-w-7xl mx-auto md:auto-rows-[20rem]">
        {creativeProjects.map((item, i) => (
          <BentoGridItem
            key={i}
            title={
              <div>
                <div className="font-bold text-[#e2e8f0] text-sm">{item.title}</div>
                <div className="text-[0.65rem] text-[#a78bfa] mt-0.5 opacity-70" style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}>
                  {item.subtitle}
                </div>
              </div>
            }
            description={
              <div style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}>
                <span className="text-[#94a3b8] text-xs leading-relaxed">{item.description}</span>
                <Tags tags={item.tags} />
              </div>
            }
            header={item.header}
            className={item.className}
            icon={item.icon}
            link={item.link}
          />
        ))}
      </BentoGrid>
    </div>
  );
}