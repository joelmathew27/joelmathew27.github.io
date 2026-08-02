import Hero from "./components/Hero";
import { ProjectsBentoGrid } from "./components/Grid";
import { MarqueeFull } from "@/components/scrolling_cards";
import { Links } from "@/components/Links";

export default function Home() {
  return (
    <>
      <Hero />
      <MarqueeFull />
      <ProjectsBentoGrid />

      <footer
        style={{
          background: "#0a3558",
          borderTop: "1px solid rgba(56,189,248,0.12)",
          padding: "28px 24px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "32px",
          flexWrap: "wrap",
        }}
      >
        <span style={{ color: "#94a3b8", fontSize: "0.8rem" }}>
          Joel Mathew &middot; jmathew27.career@gmail.com
        </span>
        <span style={{ color: "#94a3b8", fontSize: "0.75rem", opacity: 0.5 }}>|</span>
        <a href="https://github.com/joelmathew27" target="_blank" rel="noopener noreferrer"
          style={{ color: "#94a3b8", fontSize: "0.8rem", textDecoration: "none" }}
          className="hover:text-[#e2e8f0] transition">GitHub</a>
        <a href="https://www.linkedin.com/in/joelmathew27/" target="_blank" rel="noopener noreferrer"
          style={{ color: "#94a3b8", fontSize: "0.8rem", textDecoration: "none" }}
          className="hover:text-[#e2e8f0] transition">LinkedIn</a>
        <a href="./jmathew_site-resume.pdf" target="_blank" rel="noopener noreferrer"
          style={{ color: "#94a3b8", fontSize: "0.8rem", textDecoration: "none" }}
          className="hover:text-[#38bdf8] transition">Resume</a>
      </footer>

      <section className="fixed bottom-0 right-0 z-50">
        <Links />
      </section>
    </>
  );
}