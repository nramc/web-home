import {
    ArrowUpRight,
    BookOpen,
    Code2,
    ExternalLink,
    GitBranch,
    Globe2,
    Layers3,
    Map,
    Sparkles,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"

type Project = {
    title: string
    description: string
    href: string
    label: string
    icon: LucideIcon
    featured?: boolean
}

const projects: Project[] = [
    {
        title: "Portfolio",
        description:
            "A personal profile and experience site with a closer look at my background and work.",
        href: "https://myprofile.codewithram.dev/",
        label: "Personal site",
        icon: Globe2,
        featured: true,
    },
    {
        title: "Blog",
        description:
            "Technical writing, lessons learned, and practical notes from building software.",
        href: "https://blog.codewithram.dev/",
        label: "Writing",
        icon: BookOpen,
        featured: true,
    },
    {
        title: "Thirukkural",
        description:
            "A favorite Tamil Thirukkural experience backed by a REST API for exploring timeless wisdom.",
        href: "https://kural.codewithram.dev/",
        label: "Web app + API",
        icon: Layers3,
        featured: true,
    },
    {
        title: "Journey",
        description:
            "A journey application with a dedicated frontend and REST API backend.",
        href: "https://journey.codewithram.dev/home",
        label: "Product",
        icon: Map,
    },
    {
        title: "Journey API",
        description:
            "The REST API powering the Journey application, available as a standalone backend service.",
        href: "https://journey-api.codewithram.dev/",
        label: "Backend API",
        icon: Code2,
    },
    {
        title: "geojson4j",
        description:
            "An open-source Java library for working with GeoJSON data and geospatial workflows.",
        href: "https://github.com/nramc/geojson4j",
        label: "Open source",
        icon: GitBranch,
    },
    {
        title: "Video Generator",
        description:
            "A proof-of-concept project exploring programmatic video generation and creative tooling.",
        href: "https://github.com/nramc/video-generator",
        label: "Proof of concept",
        icon: Sparkles,
    },
]

const capabilities = [
    "Full-stack product development",
    "REST APIs and backend systems",
    "Modern web applications",
    "Java and open-source libraries",
]

function ProjectCard({ project }: Readonly<{ project: Project }>) {
    const Icon = project.icon

    return (
        <a
            className="group flex h-full flex-col rounded-2xl border border-border/70 bg-card/70 p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5"
            href={project.href}
            rel="noreferrer"
            target="_blank"
        >
            <div className="mb-8 flex items-start justify-between gap-4">
                <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon aria-hidden="true" className="size-5" />
                </div>
                <ArrowUpRight
                    aria-hidden="true"
                    className="size-5 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary"
                />
            </div>
            <p className="mb-2 text-xs font-semibold tracking-[0.18em] text-primary uppercase">
                {project.label}
            </p>
            <h3 className="font-heading text-2xl font-semibold tracking-tight">
                {project.title}
            </h3>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {project.description}
            </p>
            <span className="mt-auto flex items-center gap-2 pt-8 text-sm font-medium text-foreground">
                Visit project{" "}
                <ExternalLink aria-hidden="true" className="size-4" />
            </span>
        </a>
    )
}

export default function Page() {
    return (
        <main className="overflow-hidden">
            <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[38rem] bg-[radial-gradient(circle_at_top,oklch(0.62_0.2_264/0.16),transparent_58%)] dark:bg-[radial-gradient(circle_at_top,oklch(0.5_0.2_264/0.2),transparent_58%)]" />

            <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
                <div className="flex min-w-0 items-center gap-3">
                    <Link
                        className="flex shrink-0 items-center gap-2.5 font-heading text-lg font-bold tracking-tight"
                        href="/"
                    >
                        <Image
                            alt="Code with Ram logo"
                            className="size-9 rounded-xl object-cover shadow-sm"
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
                <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
                    <a
                        className="transition-colors hover:text-foreground"
                        href="#work"
                    >
                        Work
                    </a>
                    <a
                        className="transition-colors hover:text-foreground"
                        href="#about"
                    >
                        About
                    </a>
                </nav>
                <ThemeToggle />
            </header>

            <section className="mx-auto grid max-w-6xl items-center gap-14 px-6 pt-14 pb-20 lg:grid-cols-[1.12fr_0.88fr] lg:gap-20 lg:px-8 lg:pt-20 lg:pb-24">
                <div>
                    <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-xs font-semibold tracking-[0.14em] text-primary uppercase">
                        <span className="size-1.5 rounded-full bg-emerald-500" />
                        Full-stack engineer
                    </p>
                    <h1 className="font-heading text-5xl leading-[1.02] font-semibold tracking-tighter sm:text-7xl lg:text-[5.25rem]">
                        I build software
                        <br />
                        <span className="text-primary">with purpose.</span>
                    </h1>
                    <p className="mt-7 max-w-xl text-lg leading-8 text-muted-foreground sm:text-xl">
                        I&apos;m Ram, a senior software engineer creating
                        reliable products, APIs, and open-source tools from idea
                        to launch.
                    </p>
                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                        <Button
                            asChild
                            className="h-11 rounded-full px-6"
                            size="lg"
                        >
                            <a href="#work">
                                Explore my work{" "}
                                <ArrowUpRight aria-hidden="true" />
                            </a>
                        </Button>
                        <Button
                            asChild
                            className="h-11 rounded-full px-6"
                            size="lg"
                            variant="outline"
                        >
                            <a
                                href="https://myprofile.codewithram.dev/"
                                rel="noreferrer"
                                target="_blank"
                            >
                                More about me{" "}
                                <ExternalLink aria-hidden="true" />
                            </a>
                        </Button>
                    </div>
                </div>
                <div className="relative mx-auto w-full max-w-md lg:mx-0 lg:justify-self-end">
                    <div className="absolute -inset-4 rounded-[2rem] bg-primary/10 blur-3xl" />
                    <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-slate-950 p-5 text-slate-100 shadow-2xl shadow-primary/10 dark:bg-slate-900">
                        <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-4">
                            <div className="flex gap-1.5">
                                <span className="size-2.5 rounded-full bg-red-400/80" />
                                <span className="size-2.5 rounded-full bg-amber-300/80" />
                                <span className="size-2.5 rounded-full bg-emerald-400/80" />
                            </div>
                            <span className="font-mono text-[11px] text-slate-400">
                                ram.ts
                            </span>
                        </div>
                        <div className="font-mono text-sm leading-7">
                            <p className="text-slate-500">01</p>
                            <p>
                                <span className="text-fuchsia-300">const</span>{" "}
                                <span className="text-sky-300">ram</span> ={" "}
                                {"{"}
                            </p>
                            <p className="pl-5">
                                focus:{" "}
                                <span className="text-emerald-300">
                                    &quot;useful software&quot;
                                </span>
                                ,
                            </p>
                            <p className="pl-5">
                                craft:{" "}
                                <span className="text-emerald-300">
                                    &quot;full-stack&quot;
                                </span>
                                ,
                            </p>
                            <p className="pl-5">
                                values: [
                                <span className="text-amber-200">
                                    &quot;clarity&quot;
                                </span>
                                ,{" "}
                                <span className="text-amber-200">
                                    &quot;curiosity&quot;
                                </span>
                                ],
                            </p>
                            <p>{"}"}</p>
                            <p className="mt-5 text-slate-500">
                                <span className="text-emerald-300">✓</span>{" "}
                                shipping ideas that matter
                            </p>
                        </div>
                    </div>
                    <div className="absolute -right-3 -bottom-5 rounded-2xl border border-border/70 bg-background/90 px-4 py-3 shadow-xl backdrop-blur">
                        <p className="text-xs text-muted-foreground">
                            Currently exploring
                        </p>
                        <p className="mt-1 flex items-center gap-2 text-sm font-medium">
                            <Code2 className="size-4 text-primary" /> APIs &amp;
                            open source
                        </p>
                    </div>
                </div>
            </section>

            <section
                className="scroll-mt-8 border-y border-border/70 bg-muted/30 py-24"
                id="work"
            >
                <div className="mx-auto max-w-6xl px-6 lg:px-8">
                    <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
                        <div>
                            <p className="mb-3 text-sm font-semibold tracking-[0.18em] text-primary uppercase">
                                Selected work
                            </p>
                            <h2 className="font-heading text-4xl font-semibold tracking-tight sm:text-5xl">
                                Things I&apos;ve built
                            </h2>
                        </div>
                        <p className="max-w-sm text-sm leading-6 text-muted-foreground">
                            A mix of personal products, experiments, writing,
                            and libraries that reflect how I like to solve
                            problems.
                        </p>
                    </div>
                    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                        {projects.map((project) => (
                            <ProjectCard
                                key={project.title}
                                project={project}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <section
                className="mx-auto grid max-w-6xl scroll-mt-8 gap-12 px-6 py-24 lg:grid-cols-[1fr_1.15fr] lg:px-8 lg:py-32"
                id="about"
            >
                <div>
                    <p className="mb-3 text-sm font-semibold tracking-[0.18em] text-primary uppercase">
                        A little about me
                    </p>
                    <h2 className="font-heading text-4xl font-semibold tracking-tight sm:text-5xl">
                        Curious by default.
                        <br />
                        Practical by design.
                    </h2>
                </div>
                <div className="space-y-6 text-lg leading-8 text-muted-foreground">
                    <p>
                        I enjoy turning ideas into dependable software:
                        understanding the problem, shaping a simple solution,
                        and carrying it through to a thoughtful implementation.
                    </p>
                    <p>
                        From web experiences and APIs to Java libraries and
                        creative experiments, I care about clarity,
                        maintainability, and building things people can actually
                        use.
                    </p>
                    <div className="grid gap-3 pt-3 sm:grid-cols-2">
                        {capabilities.map((capability) => (
                            <div
                                className="rounded-xl border border-border/70 bg-card/60 px-4 py-3 text-sm text-foreground"
                                key={capability}
                            >
                                {capability}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <footer className="border-t border-border/70">
                <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between lg:px-8">
                    <p>
                        <span className="font-medium text-foreground">Ram</span>{" "}
                        — building with curiosity and care.
                    </p>
                    <p className="font-mono text-xs text-muted-foreground/70">
                        codewithram.dev
                    </p>
                </div>
            </footer>
        </main>
    )
}
