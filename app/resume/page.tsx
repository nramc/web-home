import { ArrowUpRight, Download, GraduationCap, Trophy } from "lucide-react"
import type { Metadata } from "next"
import Image from "next/image"

import {
    awards,
    certifications,
    education,
    experience,
    getResumeSummary,
    languages,
    resumePdfHref,
    skillGroups,
    softSkills,
    toolGroups,
} from "@/lib/profile/resume"
import { getExperienceLabel } from "@/lib/profile/career"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
    title: "Résumé",
    description: `${getExperienceLabel()} years of experience building scalable Java, Spring Boot, and Angular applications — professional experience, skills, education, and certifications.`,
    alternates: { canonical: "https://codewithram.dev/resume" },
    openGraph: {
        title: "Résumé | Code With Ram",
        description: `${getExperienceLabel()} years of experience building scalable Java, Spring Boot, and Angular applications.`,
        url: "https://codewithram.dev/resume",
        type: "profile",
    },
}

export default function ResumePage() {
    const resumeSummary = getResumeSummary()

    return (
        <main className="overflow-hidden">
            <div className="print:hidden">
                <SiteHeader />
            </div>

            <section className="mx-auto max-w-4xl px-6 pt-20 pb-14 lg:px-8 lg:pt-28 print:pt-6">
                <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
                    <div>
                        <p className="mb-3 text-sm font-semibold tracking-[0.18em] text-primary uppercase print:text-black">
                            Résumé
                        </p>
                        <h1 className="font-heading text-5xl font-semibold tracking-[-0.05em] sm:text-6xl">
                            Ramachandran Nellaiyappan
                        </h1>
                        <p className="mt-1 text-lg text-muted-foreground">
                            Senior Java Developer
                        </p>
                    </div>
                    <Button
                        asChild
                        className="h-11 rounded-full px-6 print:hidden"
                    >
                        <a
                            href={resumePdfHref}
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            Download PDF <Download aria-hidden="true" />
                        </a>
                    </Button>
                </div>
                <p className="mt-8 max-w-3xl text-lg leading-8 text-muted-foreground">
                    {resumeSummary}
                </p>
            </section>

            <section className="border-y border-border/70 bg-muted/30 py-24 print:border-none print:bg-transparent print:py-8">
                <div className="mx-auto max-w-4xl px-6 lg:px-8">
                    <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
                        Professional experience
                    </h2>
                    <ol className="mt-10 space-y-10 border-l border-border/70 pl-8">
                        {experience.map((entry) => (
                            <li
                                className="relative rounded-2xl border border-border/60 bg-card/45 p-6 pl-7 transition-colors hover:border-primary/35"
                                key={entry.role + entry.company}
                            >
                                <span className="absolute top-8 -left-[2.28rem] size-3 rounded-full border-2 border-background bg-primary shadow-[0_0_0_5px_color-mix(in_oklch,var(--primary)_15%,transparent)]" />
                                <p className="text-xs font-semibold tracking-[0.14em] text-primary uppercase">
                                    {entry.period}
                                </p>
                                <h3 className="mt-1 font-heading text-xl font-semibold tracking-tight">
                                    {entry.role}
                                </h3>
                                <a
                                    className="text-sm font-medium text-muted-foreground underline-offset-4 hover:text-primary hover:underline"
                                    href={entry.companyHref}
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    {entry.company}
                                </a>
                                <ul className="mt-4 space-y-2 text-sm leading-6 text-muted-foreground">
                                    {entry.highlights.map((highlight) => (
                                        <li
                                            className="flex gap-2"
                                            key={highlight.slice(0, 24)}
                                        >
                                            <span aria-hidden="true">–</span>
                                            <span>{highlight}</span>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ol>
                </div>
            </section>

            <section className="mx-auto max-w-4xl px-6 py-20 lg:px-8 print:py-8">
                <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
                    Technical skills
                </h2>
                <div className="mt-10 grid gap-6 sm:grid-cols-2">
                    {skillGroups.map((group) => (
                        <div key={group.category}>
                            <h3 className="text-sm font-semibold tracking-[0.1em] text-foreground uppercase">
                                {group.category}
                            </h3>
                            <div className="mt-3 flex flex-wrap gap-2">
                                {group.skills.map((skill) => (
                                    <span
                                        className="rounded-full border border-border/70 bg-card/60 px-3 py-1 text-xs text-foreground"
                                        key={skill}
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-14 grid gap-10 sm:grid-cols-2">
                    <div>
                        <h3 className="font-heading text-xl font-semibold tracking-tight">
                            Soft skills
                        </h3>
                        <div className="mt-4 flex flex-wrap gap-2">
                            {softSkills.map((skill) => (
                                <span
                                    className="rounded-full border border-border/70 bg-card/60 px-3 py-1 text-xs text-foreground"
                                    key={skill}
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h3 className="font-heading text-xl font-semibold tracking-tight">
                            Languages
                        </h3>
                        <ul className="mt-4 space-y-1.5 text-sm text-muted-foreground">
                            {languages.map((language) => (
                                <li key={language.name}>
                                    <span className="text-foreground">
                                        {language.name}
                                    </span>{" "}
                                    — {language.level}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="mt-14">
                    <h3 className="font-heading text-xl font-semibold tracking-tight">
                        Tools
                    </h3>
                    <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {toolGroups.map((group) => (
                            <div key={group.category}>
                                <p className="text-xs font-semibold tracking-[0.1em] text-muted-foreground uppercase">
                                    {group.category}
                                </p>
                                <p className="mt-1 text-sm text-foreground">
                                    {group.tools.join(", ")}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-t border-border/70 py-20 print:border-none print:py-8">
                <div className="mx-auto max-w-4xl px-6 lg:px-8">
                    <div className="flex items-center gap-3">
                        <GraduationCap
                            aria-hidden="true"
                            className="size-6 text-primary"
                        />
                        <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
                            Education
                        </h2>
                    </div>
                    {education.map((entry) => (
                        <div className="mt-8" key={entry.degree}>
                            <h3 className="font-heading text-xl font-semibold tracking-tight">
                                {entry.degree}
                            </h3>
                            <p className="mt-1 text-sm text-muted-foreground">
                                {entry.institution} · {entry.period}
                            </p>
                            <p className="text-sm text-muted-foreground">
                                {entry.grade}
                            </p>
                            {entry.project && (
                                <div className="mt-4 rounded-xl border border-border/70 bg-card/60 p-5">
                                    <p className="font-medium text-foreground">
                                        Project: {entry.project.title}
                                    </p>
                                    <ul className="mt-2 space-y-1.5 text-sm leading-6 text-muted-foreground">
                                        {entry.project.description.map(
                                            (line) => (
                                                <li key={line.slice(0, 24)}>
                                                    – {line}
                                                </li>
                                            )
                                        )}
                                    </ul>
                                    {entry.project.href && (
                                        <a
                                            className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-primary underline-offset-4 hover:underline"
                                            href={entry.project.href}
                                            rel="noopener noreferrer"
                                            target="_blank"
                                        >
                                            Read the paper{" "}
                                            <ArrowUpRight
                                                aria-hidden="true"
                                                className="size-4"
                                            />
                                        </a>
                                    )}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            <section className="border-t border-border/70 py-20 print:border-none print:py-8">
                <div className="mx-auto max-w-4xl px-6 lg:px-8">
                    <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
                        Certifications
                    </h2>
                    <div className="mt-8 grid gap-5 sm:grid-cols-2">
                        {certifications.map((cert) => (
                            <a
                                className="group flex items-center gap-4 rounded-2xl border border-border/70 bg-card/70 p-5 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5"
                                href={cert.href}
                                key={cert.title}
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                {cert.logo && (
                                    <Image
                                        alt={`${cert.title} logo`}
                                        className="size-14 shrink-0 rounded-lg object-contain"
                                        height={56}
                                        src={cert.logo}
                                        width={56}
                                    />
                                )}
                                <div>
                                    <p className="font-heading font-semibold tracking-tight group-hover:text-primary">
                                        {cert.title}
                                    </p>
                                    <p className="text-sm text-muted-foreground">
                                        {cert.issuer}
                                    </p>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-t border-border/70 py-20 print:border-none print:py-8">
                <div className="mx-auto max-w-4xl px-6 lg:px-8">
                    <div className="flex items-center gap-3">
                        <Trophy
                            aria-hidden="true"
                            className="size-6 text-primary"
                        />
                        <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
                            Awards & recognitions
                        </h2>
                    </div>
                    <ul className="mt-8 space-y-4">
                        {awards.map((award) => (
                            <li
                                className="rounded-xl border border-border/70 bg-card/60 p-5"
                                key={award.title + award.date}
                            >
                                <p className="font-heading font-semibold tracking-tight">
                                    {award.title}
                                </p>
                                <p className="text-xs text-muted-foreground">
                                    {award.date} · {award.issuer}
                                </p>
                                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                                    {award.description}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <div className="print:hidden">
                <SiteFooter />
            </div>
        </main>
    )
}
