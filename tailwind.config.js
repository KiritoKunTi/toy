/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                ivory: "#FBF7F0",
                cream: {
                    DEFAULT: "#F7F1E8",
                    warm: "#F3EBE0",
                    dark: "#E8DFD0",
                },
                champagne: {
                    DEFAULT: "#D4C4A8",
                    light: "#E6DCC8",
                    deep: "#B8A68A",
                },
                ink: {
                    DEFAULT: "#3F372F",
                    soft: "#6B6056",
                    muted: "#8A7F74",
                },
                sage: {
                    DEFAULT: "#9CAF88",
                    light: "#B7C4A8",
                    mist: "#C5D1B8",
                    deep: "#6F8162",
                    ink: "#4F5E45",
                },
                wax: {
                    DEFAULT: "#C45C3E",
                    dark: "#A84832",
                    light: "#D4785A",
                },
                blush: {
                    DEFAULT: "#D4787A",
                    light: "#E8A0A0",
                    deep: "#C45C5E",
                },
            },
            fontFamily: {
                script: ['"ALSFinlandiaScript"', "cursive"],
                serif: ['"Cormorant Garamond"', '"Playfair Display"', "serif"],
                sans: ['"DM Sans"', "Montserrat", "sans-serif"],
                kazak: ['"ALSFinlandiaScript"', "cursive"],
                playfair: ['"Cormorant Garamond"', '"Playfair Display"', "serif"],
                montserrat: ['"DM Sans"', "Montserrat", "sans-serif"],
            },
            boxShadow: {
                invite: "0 24px 60px rgba(63, 55, 47, 0.14)",
                soft: "0 8px 28px rgba(63, 55, 47, 0.08)",
                seal: "0 8px 18px rgba(168, 72, 50, 0.35), inset 0 2px 4px rgba(255,255,255,0.25)",
            },
            maxWidth: {
                phone: "430px",
            },
            transitionTimingFunction: {
                premium: "cubic-bezier(0.22, 1, 0.36, 1)",
            },
        },
    },
    plugins: [],
}
