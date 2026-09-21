import Image from "next/image"
import Link from "next/link"

import { NavLink } from "@/components/nav-link"
import { ThemeToggle } from "@/components/theme-toggle"

const navItems = [
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
    { href: "/resume", label: "Resume" },
]

export function SiteHeader() {
    return (
        <header className="sticky top-0 z-20 mx-auto mt-3 flex max-w-6xl items-center justify-between rounded-2xl border border-border/70 bg-background/70 px-4 py-3 shadow-lg shadow-black/[0.03] backdrop-blur-xl sm:px-6 lg:px-8">
            <div className="flex min-w-0 items-center gap-3">
                <Link
                    className="flex shrink-0 items-center gap-2.5 font-heading text-lg font-bold tracking-tight"
                    href="/"
                >
                    <Image
                        alt="Code with Ram logo"
                        className="size-9 rounded-xl object-cover shadow-md shadow-primary/20"
                        height={36}
                        priority
                        src="/CodeWithRam-512x512.png"
                        width={36}
                    />
                    Code<span className="text-primary">With</span>Ram
                </Link>
                <span className="hidden border-l border-border/80 pl-3 text-[0.68rem] font-medium tracking-[0.16em] text-muted-foreground uppercase sm:inline-flex">
                    Curiosity Driven Engineering
                </span>
            </div>
            <nav
                aria-label="Primary navigation"
                className="hidden items-center gap-1 rounded-full border border-border/60 bg-muted/45 p-1 text-sm text-muted-foreground md:flex"
            >
                {navItems.map((item) => (
                    <NavLink href={item.href} key={item.href}>
                        {item.label}
                    </NavLink>
                ))}
            </nav>
            <ThemeToggle />
        </header>
    )
}
