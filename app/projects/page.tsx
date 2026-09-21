import { ArrowUpRight } from "lucide-react"
import type { Metadata } from "next"
import Image from "next/image"

import { projects } from "@/lib/profile/projects"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"

const categories = ["Products", "Open source", "Knowledge"] as const

export const metadata: Metadata = {
    title: "Projects",
    description:
        "Personal products, open-source libraries, and experiments built by Ram — Journey, Thirukkural, geojson4j, and more.",
    alternates: { canonical: "https://codewithram.dev/projects" },
    openGraph: {
        title: "Projects | Code With Ram",
        description:
            "Personal products, open-source libraries, and experiments built by Ram.",
        url: "https://codewithram.dev/projects",
        type: "website",
    },
}

export default function ProjectsPage() {
    return (
        <main className="overflow-hidden">
            <SiteHeader />

            <section className="mx-auto max-w-6xl px-6 pt-20 pb-16 lg:px-8 lg:pt-28">
                <p className="mb-3 text-sm font-semibold tracking-[0.18em] text-primary uppercase">
                    Selected work
                </p>
                <h1 className="font-heading text-5xl font-semibold tracking-[-0.05em] sm:text-6xl">
                    Things I&apos;ve built
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
                    A mix of personal products, experiments, writing, and
                    libraries that reflect how I like to solve problems.
                </p>
            </section>

            <section className="border-t border-border/70 py-20">
                <div className="mx-auto max-w-6xl space-y-16 px-6 lg:px-8">
                    {categories.map((category) => (
                        <div key={category}>
                            <div className="mb-6 flex items-center gap-4">
                                <h2 className="font-heading text-2xl font-semibold tracking-tight">
                                    {category}
                                </h2>
                                <span className="h-px flex-1 bg-border/70" />
                            </div>
                            <div className="space-y-6">
                                {projects
                                    .filter(
                                        (project) =>
                                            project.category === category
                                    )
                                    .map((project) => {
                                        const Icon = project.icon
                                        return (
                                            <article
                                                className="glass-panel group rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 sm:p-8"
                                                key={project.title}
                                            >
                                                <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                                                    <div className="flex gap-4">
                                                        <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                                            {project.logo ? (
                                                                <Image
                                                                    alt={`${project.title} logo`}
                                                                    className="size-8 rounded object-contain"
                                                                    height={32}
                                                                    src={
                                                                        project.logo
                                                                    }
                                                                    width={32}
                                                                />
                                                            ) : (
                                                                <Icon
                                                                    aria-hidden="true"
                                                                    className="size-6"
                                                                />
                                                            )}
                                                        </div>
                                                        <div>
                                                            <p className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">
                                                                {project.label}
                                                            </p>
                                                            <h2 className="font-heading text-2xl font-semibold tracking-tight">
                                                                {project.title}
                                                            </h2>
                                                            <span className="mt-1 inline-flex rounded-full border border-border/70 px-2.5 py-0.5 text-xs text-muted-foreground">
                                                                {project.status}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <p className="mt-5 max-w-3xl text-sm leading-6 text-muted-foreground">
                                                    {project.longDescription}
                                                </p>
                                                <div className="mt-5 flex flex-wrap gap-2">
                                                    {project.stack.map(
                                                        (tech) => (
                                                            <span
                                                                className="rounded-full border border-border/70 bg-background px-3 py-1 text-xs text-foreground"
                                                                key={tech}
                                                            >
                                                                {tech}
                                                            </span>
                                                        )
                                                    )}
                                                </div>
                                                <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
                                                    {project.links.map(
                                                        (link) => (
                                                            <a
                                                                className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground underline-offset-4 hover:text-primary hover:underline"
                                                                href={link.href}
                                                                key={link.href}
                                                                rel="noopener noreferrer"
                                                                target="_blank"
                                                            >
                                                                {link.label}
                                                                <ArrowUpRight
                                                                    aria-hidden="true"
                                                                    className="size-3.5"
                                                                />
                                                            </a>
                                                        )
                                                    )}
                                                </div>
                                            </article>
                                        )
                                    })}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <SiteFooter />
        </main>
    )
}
