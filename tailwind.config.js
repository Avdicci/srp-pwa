/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                'brand-start': '#B5A04A',
                'brand-end': '#C4B36E',

                'Bright-start': '#C8B937',
                'Bright-end': '#C87037',

                'Test-start': '#C8B937',
                'Test-end': '#C87037'
            },
        },
    },
    plugins: [],
};