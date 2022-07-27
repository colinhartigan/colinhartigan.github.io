/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        fontFamily: {
            sans: ['Lora', 'sans-serif'],
            serif: ['Lora', 'serif'],
        },
        extend: {
            animation: {
                title: 'titleTranslateIn 1s ease-out',
            },
            keyframes: {
                titleTranslateIn: {
                    '0%': { transform: "translateY(-110%)" },
                    '100%': { translateY: "translateY(0%)" },
                },
            },
        },
    },
    darkMode: 'class',
    plugins: [],
}
