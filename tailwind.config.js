/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'elitesportLogo': "url(https://elitesportvendsyssel.dk/wp-content/uploads/2022/12/logo.png)",
        'ligLogo' : 'url(https://upload.wikimedia.org/wikipedia/en/c/c0/Herre_H%C3%A5ndbold_Ligaen_logo.png)'
      },
      colors : {
        'light-gray' : '#F8F8F8'
      }
    },
  },
  plugins: [],
}