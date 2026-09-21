import { getExperienceLabel } from "@/lib/profile/career"

export type ExperienceEntry = {
    role: string
    company: string
    companyHref: string
    period: string
    highlights: string[]
}

export const experience: ExperienceEntry[] = [
    {
        role: "Senior Software Developer",
        company: "1&1 Mail & Media Development & Technology GmbH",
        companyHref: "https://www.mail-and-media.com/",
        period: "January 2021 – Present",
        highlights: [
            "Leading projects for Germany's top e-mail provider with 43M+ users",
            "Designed and developed applications using Java Spring frameworks and Apache Wicket",
            "Designing effective solutions for real-time problems and translating them into actionable, implementable plans",
            "Architected microservices-based solutions, ensuring modularity, reusability, and maintainability of the codebase",
            "Migrated legacy applications to modern Java architectures, reducing tech debt",
            "Integrated automation tools like Renovate and OpenRewrite to reduce technical debt",
            "Strengthened security with penetration testing and threat modeling",
            "Authored How-To procedures and documented processes, supporting team onboarding and best practices",
        ],
    },
    {
        role: "Assistant Consultant",
        company: "Tata Consultancy Services",
        companyHref: "https://www.tcs.com/",
        period: "January 2013 – December 2020",
        highlights: [
            "Developed enterprise-grade Java applications for international clients",
            "Developed RESTful web services to integrate with internal and external third-party systems",
            "Received Service & Commitment Awards for major database migrations",
            "Designed and migrated legacy applications to modern Java architectures, improving system security and performance",
            "Regularly conducted security auditing across projects, providing and receiving feedback to improve application security",
            "Created detailed delivery plans and oversaw progress to meet delivery milestones",
            "Facilitated delivery planning and stakeholder meetings",
            "Developed and optimized complex SQL queries, stored procedures, triggers, and views for efficient data access",
            "Analyzed and implemented indexing strategies, partitioning, and query optimizations to improve database performance",
        ],
    },
]

export type SkillGroup = {
    category: string
    skills: string[]
}

export const skillGroups: SkillGroup[] = [
    {
        category: "Backend",
        skills: [
            "Java",
            "Spring Framework",
            "Spring Boot",
            "Hibernate",
            "Kafka",
        ],
    },
    {
        category: "Frontend",
        skills: [
            "Apache Wicket",
            "TypeScript",
            "Angular",
            "SASS",
            "Tailwind CSS",
        ],
    },
    {
        category: "Databases",
        skills: ["PostgreSQL", "Oracle", "MongoDB", "SQL & PL/SQL"],
    },
    {
        category: "DevOps & Cloud",
        skills: ["Docker", "Kubernetes", "CI/CD", "Git", "GitLab", "GitHub"],
    },
    {
        category: "Security",
        skills: ["STRIDE Threat Modeling", "Penetration Testing", "OWASP ZAP"],
    },
    {
        category: "Testing",
        skills: ["JUnit 5", "Serenity", "Cucumber", "TestContainers"],
    },
    {
        category: "Methodologies",
        skills: ["Agile (Scrum)", "TDD", "BDD"],
    },
    {
        category: "Build & Docs",
        skills: ["Maven", "npm", "AsciiDoc", "MkDocs", "OpenAPI / Swagger"],
    },
]

export const softSkills = [
    "Enthusiastic",
    "Continuous learning & innovation",
    "Leadership & mentorship",
    "Effective communication",
    "Problem-solving & decision-making",
    "Productivity",
    "Planning & prioritization",
]

export type ToolGroup = {
    category: string
    tools: string[]
}

export const toolGroups: ToolGroup[] = [
    { category: "Agile", tools: ["JIRA", "Confluence", "MIRO"] },
    { category: "Project design", tools: ["Figma", "PlantUML"] },
    {
        category: "Development",
        tools: [
            "IntelliJ IDEA",
            "SonarQube",
            "JFrog",
            "Docker",
            "Git",
            "TestContainers",
        ],
    },
    { category: "CI/CD", tools: ["GitHub Actions", "Jenkins", "GitLab"] },
    {
        category: "Deployment",
        tools: [
            "Kubernetes",
            "Vercel (Serverless Functions)",
            "GitHub Pages",
            "Render.io",
        ],
    },
    { category: "Monitoring", tools: ["Kibana", "Grafana", "Prometheus"] },
]

export type EducationEntry = {
    degree: string
    institution: string
    period: string
    grade: string
    project?: {
        title: string
        description: string[]
        href?: string
    }
}

export const education: EducationEntry[] = [
    {
        degree: "Bachelor of Engineering in Computer Science and Engineering (B.E)",
        institution: "National Engineering College, Tamil Nadu, India",
        period: "2008 – 2012",
        grade: "First Class with a GPA of 8/10",
        project: {
            title: "Intelligent Traffic Control System with Radio Frequency Identification",
            description: [
                "Published and presented the paper in various colleges, receiving awards",
                "Developed a system using RFID technology for real-time traffic monitoring and AI-powered decision-making",
                "Aimed to improve traffic flow and reduce congestion by automating signal control based on real traffic patterns",
            ],
            href: "/education/intelligent-traffic-control-system-rfid.pdf",
        },
    },
]

export type Certification = {
    title: string
    issuer: string
    href: string
    logo?: string
}

export const certifications: Certification[] = [
    {
        title: "Oracle Certified Associate — PL/SQL Developer",
        issuer: "Oracle",
        href: "/certificates/oracle-oca-plsql-developer-certification.pdf",
        logo: "/certificates/oracle-oca-plsql-developer-logo.png",
    },
]

export type Award = {
    title: string
    date: string
    issuer: string
    description: string
}

export const awards: Award[] = [
    {
        title: "Certificate of Excellence",
        date: "December 2019",
        issuer: "Client Partner, Telefónica GmbH",
        description:
            "Awarded for successfully completing two major Java, WebLogic & database upgrades",
    },
    {
        title: "Star of the Month Award",
        date: "November 2019",
        issuer: "Tata Consultancy Services",
        description: "Awarded for successfully completing migration projects",
    },
    {
        title: "Service & Commitment Award",
        date: "January 2018",
        issuer: "Client Partner, British Telecom",
        description:
            "Awarded for successfully completing cloud transformation projects",
    },
    {
        title: "Service & Commitment Award",
        date: "January 2016",
        issuer: "Tata Consultancy Services",
        description:
            "Awarded for successfully completing a major Oracle database migration",
    },
]

export const languages = [
    { name: "English", level: "Fluent" },
    { name: "Deutsch", level: "A1 — Basic" },
    { name: "Tamil", level: "Native" },
]

export const resumePdfHref = "/resume/Ramachandran-Nellaiyappan-Resume.pdf"

export function getResumeSummary() {
    return `Senior software engineer with ${getExperienceLabel()} years of experience building scalable web applications and backend systems using Java, Spring, Angular, PostgreSQL, and Oracle. Passionate about secure modernisation, developer productivity, automation, and leading initiatives that improve how teams deliver software.`
}
