import { Geist_Mono, Inter, Roboto } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"

export const metadata = {
    metadataBase: new URL("https://codewithram.dev"),
    title: {
        default: "Ram | Senior Software Engineer",
        template: "%s | Ram",
    },
    description:
        "Ram is a senior software engineer building thoughtful full-stack products, APIs, and open-source software.",
    alternates: {
        canonical: "https://codewithram.dev",
    },
    openGraph: {
        title: "Ram | Senior Software Engineer",
        description:
            "Explore Ram's full-stack products, APIs, and open-source projects.",
        url: "https://codewithram.dev",
        siteName: "Code with Ram",
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary",
        title: "Ram | Senior Software Engineer",
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
