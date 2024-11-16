   /** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.{js,jsx,ts,tsx}', // Note the addition of 'jsx', 'ts', and 'tsx'
    ],
    theme: {
        extend: {
            backgroundImage: {
            'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
            }
        }
    },
    plugins: ["responsive", "motion", "aos"],
}