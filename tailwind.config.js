/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: "jit",
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        fontFamily: {
            sans: ['Lora', 'sans-serif'],
            serif: ['Lora', 'serif'],
        },
        extend: {
            animation: {
                arrowPeriodic: 'arrowDown 5s linear infinite',
            },
            keyframes: {
                arrowDown: {
                    '0%': { transform: "translateY(-100%)" },
                    '70%, 100%': { transform: "translateY(100%)" },
                },
            },
        },
    },
    darkMode: 'class',
    plugins: [],
}
