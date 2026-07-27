import Hero from "./components/Hero";
import ExtendedHero from "./components/ExtendedHero";
import { ProjectsBentoGrid } from "./components/Grid";
import { MarqueeFull } from "@/components/scrolling_cards";
import { Links } from "@/components/Links";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#020b18]">
      <div className="fixed bottom-4 right-4 z-50">
        <Links />
      </div>
      <Hero />
      <ExtendedHero />
      <MarqueeFull />
      <ProjectsBentoGrid />
      <footer className="border-t border-white/10 bg-[#020b18] text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 py-10 md:flex-row md:items-center lg:px-8">
          <div>
            <h2 className="text-lg font-bold">Ready to talk embedded systems.</h2>
            <p className="mt-2 text-sm text-slate-400">Joel Mathew · Texas A&amp;M · jmathew27.career@gmail.com</p>
          </div>
          <div className="flex gap-4 text-sm font-bold">
            <a href="mailto:jmathew27.career@gmail.com" className="text-cyan-200 transition hover:text-orange-200">
              Email
            </a>
            <a href="/jmathew_site-resume.pdf" target="_blank" rel="noopener noreferrer" className="text-cyan-200 transition hover:text-orange-200">
              Resume
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
