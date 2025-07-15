import { cn } from "@/lib/utils";
import { Marquee } from "./magicui/marquee";

const hardSkills = [
    {
        title: "Java",
        icon: "https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/4/java-3l83r8hh7v5yhem0n2e1d.png/java-uny7np2dj70tb7u5at0ko.png?_a=DAJFJtWIZAAC",
    },
    {
        title: "C",
        icon: "https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/1/c-3fmg5qcy5xko4zzhxbanw.png/c-qblcbw2ypwbu6pf776zfe.png?_a=DAJFJtWIZAAC",
    },
    {
        title: "C++",
        icon: "https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/1/c-plusplus-q5dtfsdialc5m55xz541c.png/c-plusplus-hevd3f3v1tu8a52wk35g.png?_a=DAJFJtWIZAAC",
    },
    {
        title: "C#",
        icon: "https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/1/c-sharp-poj0zzaqfzdyt3h7dna2a.png/c-sharp-yxrbxrrcg52dci2asgw45.png?_a=DAJFJtWIZAAC",
    },
    {
        title: "Python",
        icon: "https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/2/python-po4azchn31kosiru27eiq.png/python-ac501tf6xzjdkig0nu8xbr.png?_a=DAJFJtWIZAAC",
    },
    {
        title: "Linux (Kali, Ubuntu, Arch)",
        icon: "https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/c4/linux-2vu2x40h79pxfi6jnpfcas.png/linux-ndc7a74uzdtt0ckfybesj.png?_a=DAJFJtWIZAAC",
    },
    {
        title: "Git/GitHub",
        icon: "https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/3/git-icon-8q586zkd4wh37xs9in39sb.png/git-icon-ua1ejgt0kyhuc1lw1amdph.png?_a=DAJFJtWIZAAC",
    },
    // {
    //     title: "HTML + CSS",
    //     icon: "https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/programming/web-5bo658rz2zve5v85jiw13.png/web-mp9ned0u0ye6rxn5p0r2nh.png?_a=DAJFJtWIZAAC",
    // },
    // {
    //     title: "JavaScript",
    //     icon: "https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/4/javascript-i6s6gyhw6x6szrqfjm904.png/javascript-x7m5qkc90bh0s7blgakdvii.png?_a=DAJFJtWIZAAC",
    // },
    {
        title: "React",
        icon: "https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/2/react-of56d29pe4h55iptu3crb.png/react-2uh0qk5jwsgxiiribs5ox.png?_a=DAJFJtWIZAAC",
    },
    {
        title: "TypeScript",
        icon: "https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/5/typescript-icon-72zw2qe1mom0nafkd5pj6n.png/typescript-icon-lks16d1xu9b9qyidink7t.png?_a=DAJFJtWIZAAC",
    },
    {
        title: "Next.js",
        icon: "https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/2/nextjs-icon-v87ssxlr84kha596abb0ca.png/nextjs-icon-fkqmlurjtjr7i68y2pe56.png?_a=DAJFJtWIZAAC",
    },    
    {
        title: "GDScript",
        icon: "https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/3/godot-icon-rymps5ecsgm2u7rana84b3.png/godot-icon-ksitsdlez933w0nz1wk4u.png?_a=DAJFJtWIZAAC",
    },
];

const softSkills = [
    {
        title: "Communication",
        icon: "https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/social/communication-6xvuhhb3iu47ct4ks5n29.png/communication-ek9e05425ag4mkjmdouz5.png?_a=DAJFJtWIZAAC",
    },
    {
        title: "Teamwork",
        icon: "https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/social/groups-bcd7koszuydsmcaygml6d.png/groups-z2uq3vxfblq9771vzui2au.png?_a=DAJFJtWIZAAC",
    },
    {
        title: "Problem-Solving",
        icon: "https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/common-actions/extension-fill-dusfm9tnitq1jx5zxcgd4v.png/extension-fill-xi7h1xzjdujkksscp9aid.png?_a=DAJFJtWIZAAC",
    },
    {
        title: "Leadership",
        icon: "https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/leadership/cogwheel-group-people-95xm6rjkxyobpqcrmqcn1k.png/cogwheel-group-people-gtqhp8aj91mcwacd0gc1mj.png?_a=DAJFJtWIZAAC",
    },
    {
        title: "Creativity",
        icon: "https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/ecology/electric-lightbulb-jvesjbour5hbwj3mzzlrl.png/electric-lightbulb-cy92o0hgme58jtp6f40w5j.png?_a=DAJFJtWIZAAC",
    },
    {
        title: "Adaptability",
        icon: "https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/basic-ui/vertical-sliders-lines-lwwsod3k4o2usf8wp52vq.png/vertical-sliders-lines-tp9gn6yw6dlkglukdm3r.png?_a=DAJFJtWIZAAC",
    },
    {
        title: "Organization",
        icon: "https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/basic-ui/folders-2r9tzgb3blaus1lh68d0m.png/folders-jtjudrmpajcjse40y55xl.png?_a=DAJFJtWIZAAC",
    },
    {
        title: "Agile Lifecycle Development",
        icon: "https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/2/slack-icon-bsls37wl0rk02mw8bns8z5h.png/slack-icon-di7fxx7q2ppk7t28rm4b4.png?_a=DAJFJtWIZAAC",
    },
    {
        title: "Work Ethic",
        icon: "https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/phosphor-duotone/phosphor-duotone/duotone/gavel-duotone-h1sm8099q8jybfmc8a0s1.png?_a=DAJFJtWIZAAC",
    },
    {
        title: "Conflict Resolution",
        icon: "https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/c5/question-answering-acu9udt3794s2wtnyw0u3d.png/question-answering-itaw8p9h1pru9b5laz34y.png?_a=DAJFJtWIZAAC",
    },
];

const certifications = 
[
    {
        title: "Cisco Certified Technician - Cybersecurity",
        icon: "https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/logos/cisco-l3gskuuxwrn2ucf37bndyo.png/cisco-c4imfoaakqdtknvresynr.png?_a=DAJFJtWIZAAC",
    },
    {
        title: "Certified IT Specialist in Cybersecurity",
        icon: "https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/internet-security/shield-server-kxwu0agz6nhofvnvard1go.png/shield-server-557t5rfs02vwegdiz47gd.png?_a=DAJFJtWIZAAC",
    },
];

const firstRow = hardSkills;
const secondRow = softSkills;

const ReviewCard = ({
    icon,
    title,
}: {
    icon: string;
    title: string;
    certificate?: boolean;
}) => {
    return (
        <figure
            className={cn(
            "relative h-full w-40 cursor-pointer overflow-hidden rounded-xl border p-2",
            // light styles
            "border-[#aed6f1]/[.1] bg-[#134374] hover:bg-[#aed6f1]/[.05]",
            // dark styles
            "dark:border-[#aed6f1]/[.1] dark:bg-[#012346] dark:hover:bg-[#aed6f1]/[.15]",
            )}
        >
            <div className="flex flex-col items-center justify-between h-full gap-1">
            <img className="rounded-md" width="48" height="48" alt="" src={icon} />
            <figcaption
                className="text-sm font-medium text-[#aed6f1] text-center mt-auto mb-auto"
                style={{
                fontSize: `clamp(0.75rem, ${Math.max(1.5 - title.length * 0.05, 0.75)}rem, 1rem)`,
                }}
            >
                {title}
            </figcaption>
            </div>
        </figure>
    );
};


export function MarqueeFull() {
    return (
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-[#012346] pb-8">
            <p
            style={{
            fontSize: '1.5rem',
            marginBottom: '20px',
            fontWeight: 400,
            color: '#aed6f1',
            }}
            >Certifications / Skills</p>
            <Marquee pauseOnHover repeat={1} className="[--duration:10000000s] max-w-4xl mx-auto">
                {certifications.map((cert) => (
                    <ReviewCard key={cert.title} icon={cert.icon} title={cert.title} />
                ))}
            </Marquee>
            <Marquee pauseOnHover repeat={4} className="[--duration:30s] max-w-4xl mx-auto">
                {firstRow.map((skill) => (
                    <ReviewCard key={skill.title} icon={skill.icon} title={skill.title} />
                ))}
            </Marquee>
            <Marquee reverse pauseOnHover repeat={4} className="[--duration:25s] max-w-4xl mx-auto">
                {secondRow.map((skill) => (
                    <ReviewCard key={skill.title} icon={skill.icon} title={skill.title} />
                ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6  max-w-4xl mx-auto"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6  max-w-4xl mx-auto"></div>
        </div>
    );
}
