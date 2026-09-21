import { ArrowUpRight, Code2, ExternalLink } from "lucide-react"
import Link from "next/link"

import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"
import { projects, type ProjectDetail } from "@/lib/projects"

const capabilities = [
    "Full-stack product development",
    "REST APIs and backend systems",
    "Modern web applications",
    "Java and open-source libraries",
]

function ProjectCard({ project }: Readonly<{ project: ProjectDetail }>) {
    const Icon = project.icon

    return (
        <a
            className="group glass-panel flex h-full flex-col rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10"
            href={project.href}
            rel="noopener noreferrer"
            target="_blank"
        >
            <div className="mb-8 flex items-start justify-between gap-4">
                <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20">
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
            <h3 className="font-heading text-2xl font-semibold tracking-tight transition-colors group-hover:text-primary">
                {project.title}
            </h3>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {project.description}
            </p>
            <span className="mt-auto flex items-center gap-2 pt-8 text-sm font-medium text-foreground">
                Visit {project.title}{" "}
                <ExternalLink aria-hidden="true" className="size-4" />
            </span>
        </a>
    )
}

export default function Page() {
    return (
        <main className="overflow-hidden">
            <div className="premium-grid pointer-events-none absolute inset-x-0 top-0 -z-10 h-[52rem] opacity-60" />
            <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[38rem] bg-[radial-gradient(circle_at_top,#3459e633,transparent_58%)] dark:bg-[radial-gradient(circle_at_top,#3459e629,transparent_58%)]" />

            <SiteHeader />

            <section className="mx-auto grid max-w-6xl items-center gap-14 px-6 pt-20 pb-28 lg:grid-cols-[1.12fr_0.88fr] lg:gap-20 lg:px-8 lg:pt-28 lg:pb-36">
                <div>
                    <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/8 px-3 py-1.5 text-xs font-semibold tracking-[0.14em] text-primary uppercase shadow-sm">
                        <span className="size-1.5 rounded-full bg-emerald-500" />
                        Full-stack engineer
                    </p>
                    <h1 className="font-heading text-5xl leading-[0.98] font-semibold tracking-[-0.06em] sm:text-7xl lg:text-[5.6rem]">
                        I build software
                        <br />
                        <span className="text-gradient">with purpose.</span>
                    </h1>
                    <p className="mt-7 max-w-xl text-lg leading-8 text-muted-foreground sm:text-xl">
                        I&apos;m Ram, a senior software engineer creating
                        reliable products, APIs, and open-source tools from idea
                        to launch.
                    </p>
                    <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                        <Button
                            asChild
                            className="h-11 rounded-full px-6"
                            size="lg"
                        >
                            <Link href="#work">
                                Explore my work{" "}
                                <ArrowUpRight aria-hidden="true" />
                            </Link>
                        </Button>
                        <Button
                            asChild
                            className="h-11 rounded-full px-6"
                            size="lg"
                            variant="outline"
                        >
                            <Link href="/about">
                                More about me{" "}
                                <ArrowUpRight aria-hidden="true" />
                            </Link>
                        </Button>
                    </div>
                </div>
                <div className="relative mx-auto w-full max-w-md lg:mx-0 lg:justify-self-end">
                    <div className="absolute -inset-6 rounded-[2rem] bg-primary/15 blur-3xl" />
                    <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-[#101a2b] p-6 text-slate-100 shadow-2xl shadow-primary/20">
                        <div className="pointer-events-none absolute -top-16 -right-16 size-48 rounded-full bg-primary/20 blur-3xl" />
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
                        <div className="relative font-mono text-sm leading-7">
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
                    <div className="glass-panel absolute -right-3 -bottom-5 rounded-2xl px-4 py-3">
                        <p className="text-xs text-muted-foreground">
                            Currently exploring
                        </p>
                        <p className="mt-1 flex items-center gap-2 text-sm font-medium">
                            <Code2 className="size-4 text-primary" /> AI &amp;
                            open source
                        </p>
                    </div>
                </div>
            </section>

            <section
                className="scroll-mt-8 border-y border-border/70 bg-muted/35 py-24"
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
                                className="rounded-xl border border-border/70 bg-card/60 px-4 py-3 text-sm text-foreground shadow-sm transition-colors hover:border-primary/40 hover:bg-primary/5"
                                key={capability}
                            >
                                {capability}
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-wrap gap-3 pt-5">
                        <Button
                            asChild
                            className="rounded-full"
                            variant="outline"
                        >
                            <Link href="/resume">
                                View full résumé{" "}
                                <ArrowUpRight aria-hidden="true" />
                            </Link>
                        </Button>
                        <Button
                            asChild
                            className="rounded-full"
                            variant="ghost"
                        >
                            <Link href="/projects">
                                All projects <ArrowUpRight aria-hidden="true" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>

            <SiteFooter />
        </main>
    )
}
