import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
        },
        sitemap: "https://codewithram.dev/sitemap.xml",
        host: "https://codewithram.dev",
    }
}
