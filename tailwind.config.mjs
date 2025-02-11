/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                background: '#373a3a',
                foreground: '#212323',
                text: '#f9efef',
                accent: '#a23939',
            },
            fontFamily: {
                main: ['Inter'],
            },
        },
    },
    plugins: [],
};
