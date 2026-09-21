import type { Metadata } from "next"

import { socialLinks } from "@/lib/profile/social"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"

export const metadata: Metadata = {
    title: "Contact",
    description:
        "Get in touch with Ram — open to professional collaboration, tech discussions, and open-source contributions.",
    alternates: { canonical: "https://codewithram.dev/contact" },
    openGraph: {
        title: "Contact | Code With Ram",
        description:
            "Get in touch with Ram — open to professional collaboration, tech discussions, and open-source contributions.",
        url: "https://codewithram.dev/contact",
        type: "website",
    },
}

export default function ContactPage() {
    return (
        <main className="overflow-hidden">
            <SiteHeader />

            <section className="mx-auto max-w-3xl px-6 pt-20 pb-28 lg:px-8 lg:pt-28">
                <p className="mb-3 text-sm font-semibold tracking-[0.18em] text-primary uppercase">
                    Contact
                </p>
                <h1 className="font-heading text-5xl font-semibold tracking-[-0.05em] sm:text-6xl">
                    Let&apos;s build something amazing together.
                </h1>
                <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
                    Thank you for taking the time to visit my portfolio.
                    I&apos;m always open to new opportunities — professional
                    collaboration, tech discussions, or contributions to
                    open-source projects. Feel free to reach out through any of
                    the channels below.
                </p>
                <div className="mt-8 rounded-2xl border border-primary/20 bg-primary/5 p-5 text-sm leading-6 text-foreground">
                    Open to thoughtful conversations about backend systems,
                    developer productivity, platform modernisation, and
                    open-source collaboration.
                </div>

                <div className="mt-10 grid gap-4 sm:grid-cols-2">
                    {socialLinks.map((social) => {
                        const Icon = social.icon
                        const isExternal = social.href.startsWith("http")
                        return (
                            <a
                                className="glass-panel group flex items-center gap-4 rounded-2xl p-5 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5"
                                href={social.href}
                                key={social.label}
                                rel={
                                    isExternal
                                        ? "noopener noreferrer"
                                        : undefined
                                }
                                target={isExternal ? "_blank" : undefined}
                            >
                                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                    <Icon
                                        aria-hidden="true"
                                        className="size-5"
                                    />
                                </div>
                                <div>
                                    <p className="text-xs font-semibold tracking-[0.14em] text-muted-foreground uppercase">
                                        {social.label}
                                    </p>
                                    <p className="font-medium text-foreground group-hover:text-primary">
                                        {social.value}
                                    </p>
                                </div>
                            </a>
                        )
                    })}
                </div>
            </section>

            <SiteFooter />
        </main>
    )
}
