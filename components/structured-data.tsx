export function StructuredData() {
    const structuredData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Person",
                "@id": "https://codewithram.dev/#person",
                name: "Ramachandran Nellaiyappan",
                url: "https://codewithram.dev/about",
                jobTitle: "Senior Software Engineer",
                image: "https://codewithram.dev/CodeWithRam-512x512.png",
                sameAs: [
                    "https://github.com/nramc",
                    "https://www.linkedin.com/in/ramachandran-nellaiyappan/",
                ],
                knowsAbout: [
                    "Java",
                    "Spring Boot",
                    "Angular",
                    "TypeScript",
                    "REST APIs",
                    "Open-source software",
                ],
            },
            {
                "@type": "WebSite",
                "@id": "https://codewithram.dev/#website",
                name: "Code With Ram",
                url: "https://codewithram.dev",
                description:
                    "Curiosity-driven engineering by Ram: thoughtful full-stack products, APIs, and open-source software.",
                publisher: { "@id": "https://codewithram.dev/#person" },
            },
        ],
    }

    return (
        <script
            dangerouslySetInnerHTML={{
                __html: JSON.stringify(structuredData),
            }}
            type="application/ld+json"
        />
    )
}
