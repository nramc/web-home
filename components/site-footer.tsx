export function SiteFooter() {
    return (
        <footer className="border-t border-border/70 bg-muted/20">
            <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between lg:px-8">
                <p>
                    <span className="font-medium text-foreground">Ram</span> —
                    building with curiosity and care.
                </p>

                <div className="flex flex-col gap-1 sm:items-end">
                    <p className="font-mono text-xs text-muted-foreground/70">
                        codewithram.dev
                    </p>
                    <p className="text-xs text-muted-foreground/70">
                        © {new Date().getFullYear()} Ram. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}
