import type { LucideIcon } from "lucide-react"
import { Briefcase, GitBranch, Mail, MapPin } from "lucide-react"

export type SocialLink = {
    label: string
    value: string
    href: string
    icon: LucideIcon
}

export const socialLinks: SocialLink[] = [
    {
        label: "GitHub",
        value: "nramc",
        href: "https://github.com/nramc",
        icon: GitBranch,
    },
    {
        label: "LinkedIn",
        value: "Ramachandran Nellaiyappan",
        href: "https://www.linkedin.com/in/ramachandran-nellaiyappan/",
        icon: Briefcase,
    },
    {
        label: "Email",
        value: "ramachandrannellai@gmail.com",
        href: "mailto:ramachandrannellai@gmail.com",
        icon: Mail,
    },
    {
        label: "Location",
        value: "Munich, Germany",
        href: "https://www.google.com/maps/place/Munich",
        icon: MapPin,
    },
]
