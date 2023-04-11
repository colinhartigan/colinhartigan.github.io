/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: "jit",
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        fontFamily: {
            sans: ['Lora', 'sans-serif'],
            serif: ['Lora', 'serif'],
            display: ['DM Serif Display']
        },
    },
    darkMode: 'class',
    plugins: [],
}
