import type { LucideIcon } from "lucide-react"
import {
    Code2,
    Compass,
    Lightbulb,
    Rocket,
    ShieldCheck,
    Sparkles,
} from "lucide-react"

export type Capability = {
    title: string
    description: string
    icon: LucideIcon
}

export const capabilities: Capability[] = [
    {
        title: "Backend Development",
        description:
            "Developing scalable, secure, and high-performance REST APIs using Java, Spring Boot, Hibernate, and microservices.",
        icon: Code2,
    },
    {
        title: "Application Architecture & Design",
        description:
            "Designing robust, scalable architectures to solve real-time business problems with best practices, design patterns, and domain-driven design.",
        icon: Compass,
    },
    {
        title: "Threat Modeling & Security",
        description:
            "Conducting threat modeling and penetration testing to identify vulnerabilities and enhance application security.",
        icon: ShieldCheck,
    },
    {
        title: "Automation",
        description:
            "Implementing CI/CD pipelines and integrating tools like OpenRewrite and Renovate to improve developer productivity and code quality.",
        icon: Rocket,
    },
    {
        title: "Frontend Development",
        description:
            "Building dynamic, responsive UI applications with Angular, integrating seamlessly with backend systems.",
        icon: Sparkles,
    },
    {
        title: "Continuous Learning & Innovation",
        description:
            "Staying up to date with emerging technologies, experimenting with new frameworks, and adopting industry best practices.",
        icon: Lightbulb,
    },
]

export const highlights = [
    "Oracle Certified Database Associate with strong expertise in SQL, database design, and performance tuning",
    "Continuous learner exploring new technologies, frameworks, and methodologies",
    "Problem solver skilled at analyzing complex challenges and architecting efficient solutions",
    "Open-source contributor passionate about developer tooling and modern best practices",
    "Advocate for code quality, CI/CD pipelines, DevSecOps, and automated testing",
    "Mentor active in knowledge sharing, technical blogs, and tech talks",
]

export const passions = [
    "Developer productivity, CI/CD and automation",
    "Security & best practices in Java",
    "Serverless architectures",
    "AI in Java",
]

export const hobbies = [
    "Cooking up some delicious meals",
    "Reading about the latest trends in AI & tech",
    "Playing chess",
    "Playing video games",
]

export type Inspiration = {
    name: string
    role: string
    quote: string
    image: string
    href: string
}

export const inspirations: Inspiration[] = [
    {
        name: "Dr. APJ Abdul Kalam",
        role: "Scientist and 11th President of India",
        quote: "Dream, dream, dream. Dreams transform into thoughts, and thoughts result in action.",
        image: "/about/apj-abdul-kalam.jpg",
        href: "https://en.wikipedia.org/wiki/A._P._J._Abdul_Kalam",
    },
    {
        name: "Sachin Tendulkar",
        role: "Indian former international cricketer",
        quote: "People throw stones at you, and you convert them into milestones.",
        image: "/about/sachin-tendulkar.webp",
        href: "https://en.wikipedia.org/wiki/Sachin_Tendulkar",
    },
]

export const aboutIntro = [
    "I'm Ramachandran Nellaiyappan, a passionate and results-driven senior web developer with 12+ years of experience in Java and full-stack development. I specialize in creating static and dynamic web applications.",
    "Expertise in Java, Spring Boot, Angular, CI/CD automation, microservices, and security best practices. Passionate about developer productivity, automation, and open-source contributions.",
    "My goal is to continue evolving as a developer while embracing cutting-edge technologies like AI, automation, and cloud computing — integrating AI-driven automation, security enhancements, and intelligent decision-making into modern applications.",
]
