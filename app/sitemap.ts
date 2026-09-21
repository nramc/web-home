import type { MetadataRoute } from "next"

const siteUrl = "https://codewithram.dev"

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: siteUrl,
            changeFrequency: "monthly",
            priority: 1,
        },
        {
            url: `${siteUrl}/about`,
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${siteUrl}/projects`,
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: `${siteUrl}/resume`,
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${siteUrl}/contact`,
            changeFrequency: "yearly",
            priority: 0.6,
        },
    ]
}
