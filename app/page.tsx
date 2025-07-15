import Hero from "./components/Hero";
import ExtendedHero from "./components/ExtendedHero";
import { ProjectsBentoGrid } from "./components/Grid";
import { MarqueeFull } from "@/components/scrolling_cards";
import { AnimatedSkillIcons } from "@/components/SkillIcons";
import { Links } from "@/components/Links";

export default function Home() {
  return (
    <section>
      {/* <section
        className="space-y-10 p-10 md:p-8 fixed top-0 right-0 h-full"
        //style={{ zIndex: 500, width: "120" }}
      >
        <Links />
      </section> */}
      <section className="space-y-10 p-4 fixed top-0 right-0 h-full w-48 z-50">
  <Links />
</section>

      <section >
      <Hero />
      </section>
      <section>
      <ExtendedHero />
      </section>
      <section>
      <MarqueeFull />
      </section>
      <section className="pb-8" style={{ background: "#012346" }}>
        <ProjectsBentoGrid />
      </section>
      <footer className="w-full bg-neutral-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left">
            <h2 className="text-lg font-semibold">Thanks for visiting!</h2>
            <p className="text-sm text-neutral-400">{/*new Date().getFullYear()*/}- Joel Mathew</p>
          </div>
          <div className="flex gap-4">
            <a
              href="jmathew27.career@gmail.com"
              className="hover:text-blue-400 transition"
            >
              Email
            </a>
            <a
              href="./jmathew_site-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
            >
              Resume
            </a>
          </div>
        </div>
      </footer>

    </section>
  );
}
