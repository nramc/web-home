"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function ThemeToggle() {
    const { resolvedTheme, setTheme } = useTheme()

    const isDark = resolvedTheme === "dark"

    return (
        <Button
            aria-label="Toggle theme"
            className="size-9"
            onClick={() => setTheme(isDark ? "light" : "dark")}
            size="icon"
            variant="ghost"
        >
            <span suppressHydrationWarning>{isDark ? <Sun /> : <Moon />}</span>
        </Button>
    )
}
