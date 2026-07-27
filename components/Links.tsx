import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
    IconBrandGithub,
    IconBrandLinkedin,
} from "@tabler/icons-react";

export function Links() {
        const links = [
                {
                        title: "LinkedIn",
                        icon: (
                                <IconBrandLinkedin className="h-full w-full bg-opacity-5 hover:bg-[#eef1f3] rounded-md" />
                        ),
                        href: "https://www.linkedin.com/in/joelmathew27/",
                },

                {
                        title: "GitHub",
                        icon: (
                                <IconBrandGithub className="h-full w-full bg-opacity-5 hover:bg-[#eef1f3] rounded-md" />
                        ),
                        href: "https://github.com/joelmathew27",
                },
        ];
        return (
                <div>
                        <FloatingDock
                                items={links}
                        />
                </div>
        );
}
