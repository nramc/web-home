"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"

export function NavLink({
    href,
    children,
}: Readonly<{
    href: string
    children: React.ReactNode
}>) {
    const pathname = usePathname()
    const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href)

    return (
        <Link
            aria-current={isActive ? "page" : undefined}
            className={cn(
                "rounded-full px-3 py-1.5 transition-colors hover:text-foreground",
                isActive &&
                    "bg-background font-medium text-foreground shadow-sm"
            )}
            href={href}
        >
            {children}
        </Link>
    )
}
