import { cn } from "@/lib/utils";
import { Marquee } from "./magicui/marquee";

const hardSkills = [
  { title: "C", icon: "https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/1/c-3fmg5qcy5xko4zzhxbanw.png/c-qblcbw2ypwbu6pf776zfe.png?_a=DAJFJtWIZAAC" },
  { title: "C++", icon: "https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/1/c-plusplus-q5dtfsdialc5m55xz541c.png/c-plusplus-hevd3f3v1tu8a52wk35g.png?_a=DAJFJtWIZAAC" },
  { title: "Java", icon: "https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/4/java-3l83r8hh7v5yhem0n2e1d.png/java-uny7np2dj70tb7u5at0ko.png?_a=DAJFJtWIZAAC" },
  { title: "Python", icon: "https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/2/python-po4azchn31kosiru27eiq.png/python-ac501tf6xzjdkig0nu8xbr.png?_a=DAJFJtWIZAAC" },
  { title: "C#", icon: "https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/1/c-sharp-poj0zzaqfzdyt3h7dna2a.png/c-sharp-yxrbxrrcg52dci2asgw45.png?_a=DAJFJtWIZAAC" },
  { title: "GDScript", icon: "https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/3/godot-icon-rymps5ecsgm2u7rana84b3.png/godot-icon-ksitsdlez933w0nz1wk4u.png?_a=DAJFJtWIZAAC" },
  { title: "TypeScript", icon: "https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/5/typescript-icon-72zw2qe1mom0nafkd5pj6n.png/typescript-icon-lks16d1xu9b9qyidink7t.png?_a=DAJFJtWIZAAC" },
  { title: "React / Next.js", icon: "https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/2/react-of56d29pe4h55iptu3crb.png/react-2uh0qk5jwsgxiiribs5ox.png?_a=DAJFJtWIZAAC" },
  { title: "Linux", icon: "https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/c4/linux-2vu2x40h79pxfi6jnpfcas.png/linux-ndc7a74uzdtt0ckfybesj.png?_a=DAJFJtWIZAAC" },
  { title: "Git / GitHub", icon: "https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/3/git-icon-8q586zkd4wh37xs9in39sb.png/git-icon-ua1ejgt0kyhuc1lw1amdph.png?_a=DAJFJtWIZAAC" },
];

const softSkills = [
  { title: "Problem Solving", icon: "https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/common-actions/extension-fill-dusfm9tnitq1jx5zxcgd4v.png/extension-fill-xi7h1xzjdujkksscp9aid.png?_a=DAJFJtWIZAAC" },
  { title: "Technical Writing", icon: "https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/basic-ui/folders-2r9tzgb3blaus1lh68d0m.png/folders-jtjudrmpajcjse40y55xl.png?_a=DAJFJtWIZAAC" },
  { title: "Rapid Prototyping", icon: "https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/ecology/electric-lightbulb-jvesjbour5hbwj3mzzlrl.png/electric-lightbulb-cy92o0hgme58jtp6f40w5j.png?_a=DAJFJtWIZAAC" },
  { title: "Team Leadership", icon: "https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/leadership/cogwheel-group-people-95xm6rjkxyobpqcrmqcn1k.png/cogwheel-group-people-gtqhp8aj91mcwacd0gc1mj.png?_a=DAJFJtWIZAAC" },
  { title: "Systems Thinking", icon: "https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/basic-ui/vertical-sliders-lines-lwwsod3k4o2usf8wp52vq.png/vertical-sliders-lines-tp9gn6yw6dlkglukdm3r.png?_a=DAJFJtWIZAAC" },
];

const certifications = [
  { title: "Google Cybersecurity Professional Cert", icon: "https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/logos/google-logo-k9hftedfg7qbpekzcbnf.png/google-logo-xc73ec45iidg9pnamrrgn.png?_a=DATAg1AAZAA0" },
  { title: "Cisco Certified Technician — Cybersecurity", icon: "https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/logos/cisco-l3gskuuxwrn2ucf37bndyo.png/cisco-c4imfoaakqdtknvresynr.png?_a=DAJFJtWIZAAC" },
  { title: "Certified IT Specialist in Cybersecurity", icon: "https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/internet-security/shield-server-kxwu0agz6nhofvnvard1go.png/shield-server-557t5rfs02vwegdiz47gd.png?_a=DAJFJtWIZAAC" },
];

const SkillCard = ({ icon, title }: { icon: string; title: string }) => (
  <figure
    className={cn(
      "relative h-full w-36 cursor-default overflow-hidden rounded-xl border p-2",
      "border-[#aed6f1]/[.1] bg-[#0a1a2e] hover:bg-[#134374] transition-colors duration-200",
    )}
  >
    <div className="flex flex-col items-center justify-between h-full gap-1">
      <img className="rounded-md" width="40" height="40" alt="" src={icon} />
      <figcaption
        className="text-xs font-medium text-[#aed6f1] text-center"
        style={{ fontSize: `clamp(0.62rem, ${Math.max(1.2 - title.length * 0.04, 0.58)}rem, 0.82rem)`, fontFamily: "system-ui, -apple-system, sans-serif" }}
      >
        {title}
      </figcaption>
    </div>
  </figure>
);

const CertCard = ({ icon, title }: { icon: string; title: string }) => (
  <div
    className={cn(
      "flex items-center gap-3 rounded-xl border p-3",
      "border-[#aed6f1]/[.1] bg-[#0a1a2e] hover:bg-[#134374] transition-colors duration-200",
    )}
  >
    <img className="rounded-md flex-shrink-0" width="32" height="32" alt="" src={icon} />
    <span className="text-xs font-medium text-[#cbd5e1] leading-tight" style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}>
      {title}
    </span>
  </div>
);

export function MarqueeFull() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-[#012346] pb-16">
      {/* Section header */}
      <div className="max-w-7xl mx-auto w-full px-4 mb-6 mt-14">
        <div className="flex items-center gap-3">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#38bdf8]">
            Skills &amp; Certifications
          </span>
          <div style={{ flex: 1, height: "1px", background: "linear-gradient(90deg, #38bdf840, transparent)" }} />
        </div>
      </div>

      {/* Certs — static grid */}
      <div className="max-w-3xl mx-auto w-full px-4 mb-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
        {certifications.map((cert) => (
          <CertCard key={cert.title} icon={cert.icon} title={cert.title} />
        ))}
      </div>

      {/* Hard skills — marquee */}
      <Marquee pauseOnHover repeat={3} className="[--duration:28s] max-w-4xl mx-auto">
        {hardSkills.map((skill) => (
          <SkillCard key={skill.title} icon={skill.icon} title={skill.title} />
        ))}
      </Marquee>

      {/* Soft skills — marquee */}
      <Marquee reverse pauseOnHover repeat={3} className="[--duration:22s] max-w-4xl mx-auto mt-4">
        {softSkills.map((skill) => (
          <SkillCard key={skill.title} icon={skill.icon} title={skill.title} />
        ))}
      </Marquee>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 max-w-4xl mx-auto" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 max-w-4xl mx-auto" />
    </div>
  );
}