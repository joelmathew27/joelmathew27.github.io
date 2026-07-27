import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import {
  IconAdjustments,
  IconAlignBoxBottomRight,
  IconCpu,
  IconDashboard,
  IconDeviceDesktopAnalytics,
  IconLock,
  IconTableColumn,
} from "@tabler/icons-react";
import Image from "next/image";

export function ProjectsBentoGrid() {
  return (
    <section className="bg-[#020b18] px-6 py-20 text-[#e6f6ff] lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.35em] text-cyan-200">Selected work</p>
            <h2 className="mt-3 text-4xl font-bold text-white sm:text-5xl">Projects that start conversations</h2>
          </div>
          <p className="max-w-xl text-slate-300">
            Prioritized for embedded systems recruiters: microcontrollers, digital logic,
            secure data handling, hardware protocols, and evidence of shipping with teams.
          </p>
        </div>
        <BentoGrid className="md:auto-rows-[24rem]">
          {items.map((item) => (
            <BentoGridItem
              key={item.title}
              title={item.title}
              description={item.description}
              header={<ProjectImage imageSrc={item.imageSrc} title={item.title} />}
              className={item.className}
              icon={item.icon}
              link={item.link}
              tags={item.tags}
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}

const ProjectImage = ({ imageSrc, title }: { imageSrc: string; title: string }) => (
  <div className="relative flex min-h-[11rem] flex-1 overflow-hidden rounded-2xl border border-white/10 bg-[#031426]">
    <Image
      src={imageSrc}
      alt={`${title} preview`}
      width={700}
      height={420}
      className="h-full w-full object-cover transition duration-500 group-hover/bento:scale-105"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-[#020b18]/80 via-transparent to-transparent" />
  </div>
);

const iconClass = "h-5 w-5 text-cyan-200";

const items = [
  {
    title: "ESP32 Audio Playback Device",
    description:
      "Prototyped and validated audio flow with Raspberry Pi, I2S timing, KiCad schematics, and signal-flow planning for an embedded audio pipeline.",
    imageSrc: "/esp32_note.png",
    className: "md:col-span-2",
    icon: <IconCpu className={iconClass} />,
    tags: ["ESP32", "I2S", "KiCad", "Audio"],
    link: "https://github.com/joelmathew27",
  },
  {
    title: "STM32 Secure Note-taking Device",
    description:
      "Building a portable notebook concept that combines audio input, chorded-key input, and encryption-minded storage on an STM32 platform.",
    imageSrc: "/stm32.png",
    className: "md:col-span-1",
    icon: <IconLock className={iconClass} />,
    tags: ["STM32", "Security", "Input", "Firmware"],
    link: "https://github.com/joelmathew27",
  },
  {
    title: "FPGA State-Controlled Motor",
    description:
      "Designed a state-based PWM motor controller in hardware description logic and verified behavior with waveform simulation plus hardware testing.",
    imageSrc: "/altera_max.jpg",
    className: "md:col-span-2",
    icon: <IconDeviceDesktopAnalytics className={iconClass} />,
    tags: ["FPGA", "PWM", "HDL", "Verification"],
    link: "https://github.com/joelmathew27",
  },
  {
    title: "Data Structures and Algorithms",
    description: "Practice repository for strengthening implementation fundamentals in Java and C++.",
    imageSrc: "/dataStructuresGithub.png",
    className: "md:col-span-1",
    icon: <IconAlignBoxBottomRight className={iconClass} />,
    tags: ["Java", "C++", "Algorithms"],
    link: "https://github.com/joelmathew27/dataStructures",
  },
  {
    title: "This Website",
    description: "A high-signal portfolio built with Next.js and Tailwind CSS to make my resume, projects, and contact path easy to scan.",
    imageSrc: "/websiteDev.png",
    className: "md:col-span-1",
    icon: <IconDashboard className={iconClass} />,
    tags: ["Next.js", "Tailwind", "UX"],
    link: "https://github.com/joelmathew27/joelmathew27.github.io",
  },
  {
    title: "Project Ember",
    description: "Godot game project for practicing efficient programming design, music production, scope control, and project management.",
    imageSrc: "/emberPreview.png",
    className: "md:col-span-1",
    icon: <IconAdjustments className={iconClass} />,
    tags: ["Godot", "GDScript", "Design"],
    link: "https://github.com/joelmathew27/project_ember",
  },
  {
    title: "Dime - TAMUHack 2025",
    description: "College finance app built during TAMUHack 2025 with a fast-moving team and a demo-focused delivery cycle.",
    imageSrc: "/dimeSS.png",
    className: "md:col-span-1",
    icon: <IconTableColumn className={iconClass} />,
    tags: ["Hackathon", "Product", "Team"],
    link: "https://github.com/joelmathew27/project_dime",
  },
  {
    title: "Blind Faith - Chillenium 2025",
    description: "Team-built game jam project showing creative collaboration, deadline execution, and player-focused iteration.",
    imageSrc: "/blindFaithTitle.png",
    className: "md:col-span-2",
    icon: <IconTableColumn className={iconClass} />,
    tags: ["Game jam", "Team", "Delivery"],
    link: "https://fish-food-studios.itch.io/blind-faith",
  },
];
