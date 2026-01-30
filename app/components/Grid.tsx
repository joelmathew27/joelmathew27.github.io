import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import {
  IconAdjustments,
  IconAlignBoxBottomRight,
  IconDashboard,
  IconTableColumn,
} from "@tabler/icons-react";
import { JetBrains_Mono } from 'next/font/google'
import Image from "next/image";

const jetBrainsMono = JetBrains_Mono({ subsets: ['latin'], weight: ['400', '700'] });

export function ProjectsBentoGrid() {
  return (
    <div className={jetBrainsMono.className} style={{backgroundColor: "#012346"}}>
      <h1 className="text-3xl font-bold text-center mb-4 text-[#aed6f1] ">Projects</h1>
      <p className="text-lg text-center mb-8 text-[#aed6f1] ">
      A collection of my work.
      </p>
      <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={<span className={`text-[#aed6f1] hover:text-orange-500 transition ${jetBrainsMono.className}`}>{item.title}</span>}
            description={<span className={`text-[#aed6f1] hover:text-orange-500 transition ${jetBrainsMono.className}`}>{item.description}</span>}
            header={item.header}
            className={`${item.className} ${jetBrainsMono.className}`}
            icon={item.icon}
            link={item.link}
          />
        ))}
      </BentoGrid>
    </div>
  );
}

const Skeleton = ({ imageSrc }: { imageSrc: string }) => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl dark:bg-dot-white/[0.2] bg-dot-black/[0.2] border border-transparent dark:border-white/[0.2] bg-[#012346] dark:bg-black">
      <Image
        src={imageSrc}
        alt="Cover Image"
        width={400}
        height={250}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          borderRadius: "0.75rem",
        }}
        className="rounded-xl"
      />
    </div>
);
const items = [
  {
    title: "This Website",
    description: "Made a website to showcase my projects. Learned a lot about web development. Used Next.js and Tailwind CSS",
    header: <Skeleton imageSrc="./websiteDev.png" />,
    className: "md:col-span-2",
    icon: <IconDashboard className="h-4 w-4 text-[#aed6f1]" />,
    link: "https://github.com/joelmathew27/joelmathew27.github.io"
  },
  {
    title: "ESP32 Audio Playback Device [In Progress]",
    description: "Protoyped and validated audio flow using Raspberry Pi to test I2S communication and timing behavior. Created schematics and diagrams in KiCad to draft component connections and signal flow.",
    header: <Skeleton imageSrc="./esp32_note.png" />,
    className: "md:col-span-1",
    icon: <IconAdjustments className="h-4 w-4 text-[#aed6f1]" />,
    link: "https://github.com/joelmathew27"
  },
  {
    title: "STM32 Secure Note-taking Device [In Progress]",
    description: "Developing a device that can take in audio and chorded-key input while encrypting the data, acting as a secure, portable, digital notebook.",
    header: <Skeleton imageSrc="./stm32.png" />,
    className: "md:col-span-1",
    icon: <IconAdjustments className="h-4 w-4 text-[#aed6f1]" />,
    link: "https://github.com/joelmathew27"
  },
  {
    title: "FPGA State-Controlled Motor",
    description: "Designed a state-based PWM motor control system using hardware description logic. Verified functionality through waveform simulation testing as well as hardware testing.",
    header: <Skeleton imageSrc="./altera_max.jpg" />,
    className: "md:col-span-2",
    icon: <IconAdjustments className="h-4 w-4 text-[#aed6f1]" />,
    link: "https://github.com/joelmathew27"
  },
  {
    title: "Data Structures and Algorithms",
    description: "Practicing making data structures and Algorithms in Java and C++",
    header: <Skeleton imageSrc="./dataStructuresGithub.png" />,
    className: "md:col-span-2",
    icon: <IconAlignBoxBottomRight className="h-4 w-4 text-[#aed6f1]" />,
    link: "https://github.com/joelmathew27/dataStructures"
  },
  {
    title: "Project Ember [In Progress]",
    description: "Making a game in Godot. Practicing efficient programming design, music production, and project management skills in a passion project.",
    header: <Skeleton imageSrc="./emberPreview.png" />,
    className: "md:col-span-1",
    icon: <IconAdjustments className="h-4 w-4 text-[#aed6f1]" />,
    link: "https://github.com/joelmathew27/project_ember"
  },
  
  
  {
    title: "Dime - TAMUHack 2025",
    description:
      "An app designed for college students to track and manage their finances. Made during TAMUHack2025.",
    header: <Skeleton imageSrc="./dimeSS.png" />,
    className: "md:col-span-1",
    icon: <IconTableColumn className="h-4 w-4 text-[#aed6f1]" />,
    link: "https://github.com/joelmathew27/project_dime"
  },
  
  {
    title: "Blind Faith - Chillenium 2025",
    description:
      "Worked with a team to create a game for Chillenium 2025.",
    header: <Skeleton imageSrc="./blindFaithTitle.png" />,
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-[#aed6f1]" />,
    link: "https://fish-food-studios.itch.io/blind-faith"
  },
  {
    title: "Jungle King - Chillenium 2024",
    description:
      "Worked with a team to create a game for Chillenium 2024.",
    header: <Skeleton imageSrc="./jungleKingGodot.png" />,
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-[#aed6f1]" />,
    link: "https://fish-food-studios.itch.io/jungle-king"
  },
];
