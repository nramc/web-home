import { ImageResponse } from "next/og"

export const alt = "Code With Ram - Curiosity Driven Engineering"
export const size = {
    width: 1200,
    height: 630,
}
export const contentType = "image/png"

export default function OpenGraphImage() {
    return new ImageResponse(
        <div
            style={{
                alignItems: "center",
                background: "#0b1220",
                color: "#f8fafc",
                display: "flex",
                height: "100%",
                justifyContent: "space-between",
                padding: "72px",
                width: "100%",
            }}
        >
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "24px",
                    maxWidth: "760px",
                }}
            >
                <div
                    style={{
                        color: "#6f8cff",
                        fontSize: "28px",
                        fontWeight: 600,
                        letterSpacing: "0.12em",
                    }}
                >
                    CODE WITH RAM
                </div>
                <div
                    style={{
                        fontSize: "72px",
                        fontWeight: 700,
                        letterSpacing: "-0.05em",
                        lineHeight: 1,
                    }}
                >
                    Curiosity-driven engineering.
                </div>
                <div
                    style={{
                        color: "#cbd5e1",
                        fontSize: "30px",
                    }}
                >
                    Full-stack products, APIs, and open-source software.
                </div>
            </div>
            <div
                style={{
                    background: "#3459e6",
                    borderRadius: "36px",
                    boxShadow: "0 24px 80px rgba(52, 89, 230, 0.4)",
                    display: "flex",
                    height: "160px",
                    width: "160px",
                }}
            />
        </div>,
        size
    )
}
