import type { LucideIcon } from "lucide-react"
import { BookOpen, GitBranch, Layers3, Map, Sparkles } from "lucide-react"

export type ProjectStatus = "Live" | "Open Source" | "Proof of Concept"
export type ProjectCategory = "Products" | "Open source" | "Knowledge"

export type ProjectDetail = {
    title: string
    description: string
    longDescription: string
    href: string
    label: string
    status: ProjectStatus
    category: ProjectCategory
    stack: string[]
    icon: LucideIcon
    logo?: string
    links: { label: string; href: string }[]
}

export const projects: ProjectDetail[] = [
    {
        title: "Blog",
        description:
            "Technical writing, lessons learned, and practical notes from building software.",
        longDescription:
            "A collection of technical articles covering Java, Spring Boot, automation, and lessons learned from real-world projects.",
        href: "https://blog.codewithram.dev/",
        label: "Writing",
        status: "Live",
        category: "Knowledge",
        stack: ["MkDocs"],
        icon: BookOpen,
        links: [{ label: "Visit blog", href: "https://blog.codewithram.dev/" }],
    },
    {
        title: "Thirukkural",
        description:
            "A favorite Tamil Thirukkural experience backed by a REST API for exploring timeless wisdom.",
        longDescription:
            "Connecting ancient Tamil philosophy with today's digital landscape — a collection of 1330 couplets (Kural) offering wisdom on life, ethics, love, and governance, served through a serverless REST API.",
        href: "https://kural.codewithram.dev/",
        label: "Web app + API",
        status: "Live",
        category: "Products",
        stack: ["Java", "REST API", "Vercel"],
        icon: Layers3,
        logo: "/projects/thirukkural-api-logo.png",
        links: [
            { label: "Visit site", href: "https://kural.codewithram.dev/" },
            {
                label: "Source",
                href: "https://github.com/nramc/thirukkural-api",
            },
        ],
    },
    {
        title: "Journey",
        description:
            "A journey application bringing together a dedicated frontend and REST API backend.",
        longDescription:
            "Store and visualize travel memories with narration, geo data, images, and videos. Built with Spring Boot and Angular on MongoDB Atlas, integrating OpenStreetMap and MapTiler for geospatial visualization.",
        href: "https://journey.codewithram.dev/home",
        label: "Product + API",
        status: "Live",
        category: "Products",
        stack: ["Spring Boot", "Angular", "MongoDB Atlas", "OpenStreetMap"],
        icon: Map,
        logo: "/projects/journey-logo.png",
        links: [
            {
                label: "Visit site",
                href: "https://journey.codewithram.dev/home",
            },
            { label: "Frontend", href: "https://github.com/nramc/journeys" },
            { label: "API", href: "https://github.com/nramc/journey-api" },
        ],
    },
    {
        title: "geojson4j",
        description:
            "An open-source Java library for working with GeoJSON data and geospatial workflows.",
        longDescription:
            "A Java library implementing GeoJSON domain models based on RFC7946. GeoJSON is a format for encoding a variety of geographic data structures, designed for developers working with spatial data.",
        href: "https://github.com/nramc/geojson4j",
        label: "Open source",
        status: "Open Source",
        category: "Open source",
        stack: ["Java", "Maven Central"],
        icon: GitBranch,
        logo: "/projects/geojson4j-logo.png",
        links: [
            { label: "Source", href: "https://github.com/nramc/geojson4j" },
            {
                label: "Maven Central",
                href: "https://mvnrepository.com/artifact/io.github.nramc/geojson4j",
            },
        ],
    },
    {
        title: "Video Generator",
        description:
            "A proof-of-concept project exploring programmatic video generation and creative tooling.",
        longDescription:
            "An experimental project exploring programmatic video generation, combining automation and creative tooling to produce short-form video content.",
        href: "https://github.com/nramc/video-generator",
        label: "Proof of concept",
        status: "Proof of Concept",
        category: "Open source",
        stack: ["Java"],
        icon: Sparkles,
        links: [
            {
                label: "Source",
                href: "https://github.com/nramc/video-generator",
            },
        ],
    },
]
