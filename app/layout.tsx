import { Geist_Mono, Inter, Roboto } from "next/font/google"
import type { Metadata } from "next"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
    metadataBase: new URL("https://codewithram.dev"),
    title: {
        default: "Code With Ram | Curiosity Driven Engineering",
        template: "%s | Code With Ram",
    },
    description:
        "Curiosity Driven Engineering by Ram: thoughtful full-stack products, APIs, and open-source software.",
    alternates: {
        canonical: "https://codewithram.dev",
    },
    icons: {
        icon: [
            { url: "/favicon.svg", type: "image/svg+xml" },
            { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
        ],
        shortcut: "/favicon.ico",
        apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    },
    manifest: "/site.webmanifest",
    openGraph: {
        title: "Code With Ram | Curiosity Driven Engineering",
        description:
            "Explore Ram's full-stack products, APIs, and open-source projects.",
        url: "https://codewithram.dev",
        siteName: "Code with Ram",
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary",
        title: "Code With Ram | Curiosity Driven Engineering",
        description:
            "Explore Ram's full-stack products, APIs, and open-source projects.",
    },
}

const robotoHeading = Roboto({ subsets: ["latin"], variable: "--font-heading" })

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" })

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html
            lang="en"
            suppressHydrationWarning
            className={cn(
                "antialiased",
                fontMono.variable,
                "font-sans",
                inter.variable,
                robotoHeading.variable
            )}
        >
            <body>
                <ThemeProvider>{children}</ThemeProvider>
            </body>
        </html>
    )
}
