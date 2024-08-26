/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        fontFamily: {
            sans: ['"Source Serif 4"', "sans-serif"],
            serif: ['"Source Serif 4"', "serif"],
            body: ['"Source Serif 4"'],
        },
        extend: {},
    },
    plugins: [],
};
