import { ArrowUpRight } from "lucide-react"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

import {
    capabilities,
    getAboutIntro,
    highlights,
    hobbies,
    inspirations,
    passions,
} from "@/lib/profile/about"
import { getExperienceLabel } from "@/lib/profile/career"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
    title: "About",
    description: `Senior software engineer with ${getExperienceLabel()} years of experience specializing in Java, Spring Boot, Angular, and automation — background, capabilities, and interests.`,
    alternates: { canonical: "https://codewithram.dev/about" },
    openGraph: {
        title: "About | Code With Ram",
        description:
            "Senior software engineer specializing in Java, Spring Boot, Angular, and automation.",
        url: "https://codewithram.dev/about",
        type: "profile",
    },
}

export default function AboutPage() {
    const aboutIntro = getAboutIntro()

    return (
        <main className="overflow-hidden">
            <SiteHeader />

            <section className="relative mx-auto max-w-4xl px-6 pt-20 pb-16 lg:px-8 lg:pt-28">
                <p className="mb-3 text-sm font-semibold tracking-[0.18em] text-primary uppercase">
                    About me
                </p>
                <h1 className="font-heading text-5xl font-semibold tracking-[-0.05em] sm:text-6xl">
                    Curious by default.
                    <br />
                    Practical by design.
                </h1>
                <div className="mt-8 space-y-5 text-lg leading-8 text-muted-foreground">
                    {aboutIntro.map((paragraph) => (
                        <p key={paragraph.slice(0, 24)}>{paragraph}</p>
                    ))}
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                    <Button asChild className="rounded-full">
                        <Link href="/resume">
                            View résumé <ArrowUpRight aria-hidden="true" />
                        </Link>
                    </Button>
                    <Button asChild className="rounded-full" variant="outline">
                        <Link href="/contact">
                            Get in touch <ArrowUpRight aria-hidden="true" />
                        </Link>
                    </Button>
                </div>
            </section>

            <section className="border-y border-border/70 bg-muted/30 py-24">
                <div className="mx-auto max-w-6xl px-6 lg:px-8">
                    <p className="mb-3 text-sm font-semibold tracking-[0.18em] text-primary uppercase">
                        What I do
                    </p>
                    <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
                        Where I focus my craft
                    </h2>
                    <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                        {capabilities.map((capability) => {
                            const Icon = capability.icon
                            return (
                                <div
                                    className="glass-panel rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
                                    key={capability.title}
                                >
                                    <div className="mb-4 flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                        <Icon
                                            aria-hidden="true"
                                            className="size-5"
                                        />
                                    </div>
                                    <h3 className="font-heading text-lg font-semibold tracking-tight">
                                        {capability.title}
                                    </h3>
                                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                                        {capability.description}
                                    </p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            <section className="mx-auto max-w-4xl px-6 py-20 lg:px-8">
                <p className="mb-3 text-sm font-semibold tracking-[0.18em] text-primary uppercase">
                    Highlights
                </p>
                <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
                    A few things worth knowing
                </h2>
                <ul className="mt-8 space-y-3">
                    {highlights.map((highlight) => (
                        <li
                            className="rounded-xl border border-border/70 bg-card/60 px-4 py-3 text-sm leading-6 text-foreground"
                            key={highlight.slice(0, 24)}
                        >
                            {highlight}
                        </li>
                    ))}
                </ul>

                <div className="mt-14 grid gap-10 sm:grid-cols-2">
                    <div>
                        <h3 className="font-heading text-xl font-semibold tracking-tight">
                            Passions & interests
                        </h3>
                        <ul className="mt-4 space-y-2 text-sm leading-6 text-muted-foreground">
                            {passions.map((passion) => (
                                <li key={passion}>{passion}</li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-heading text-xl font-semibold tracking-tight">
                            Beyond the code
                        </h3>
                        <ul className="mt-4 space-y-2 text-sm leading-6 text-muted-foreground">
                            {hobbies.map((hobby) => (
                                <li key={hobby}>{hobby}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            <section className="border-t border-border/70 py-20">
                <div className="mx-auto max-w-6xl px-6 lg:px-8">
                    <p className="mb-3 text-sm font-semibold tracking-[0.18em] text-primary uppercase">
                        Inspiration
                    </p>
                    <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
                        People who shaped my mindset
                    </h2>
                    <div className="mt-10 grid gap-6 sm:grid-cols-2">
                        {inspirations.map((person) => (
                            <a
                                className="glass-panel group flex flex-col items-center gap-4 rounded-2xl p-8 text-center transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5"
                                href={person.href}
                                key={person.name}
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                <Image
                                    alt={person.name}
                                    className="size-28 rounded-full object-cover shadow-md"
                                    height={112}
                                    src={person.image}
                                    width={112}
                                />
                                <div>
                                    <h3 className="font-heading text-lg font-semibold tracking-tight group-hover:text-primary">
                                        {person.name}
                                    </h3>
                                    <p className="text-xs text-muted-foreground">
                                        {person.role}
                                    </p>
                                </div>
                                <p className="text-sm leading-6 text-muted-foreground italic">
                                    &ldquo;{person.quote}&rdquo;
                                </p>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            <SiteFooter />
        </main>
    )
}
