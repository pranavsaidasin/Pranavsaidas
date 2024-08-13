/** @type {import('tailwindcss').Config} */
// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
      },
      backgroundImage: {
        "custom-bg": "url('/images/bg.png')",
      },
      colors: {
        "light-gray": "#D3D3D3",
        "dark-gray": "#9B9B9B",
        overlay: "rgba(0, 0, 0, 0.4)",
        buttonTextColor: "#CECACA",
        gainsboro: {
          100: "rgba(230, 230, 230, 0.15)",
          200: "rgba(217, 217, 217, 0.15)",
        },
        lightgray: {
          200: "#cecaca",
          300: "rgba(206, 202, 202, 0.2)",
          400: "rgba(206, 202, 202, 0.25)",
        },
        gray: "rgba(255, 255, 255, 0.15)",
        darkgray: {
          100: "#9b9b9b",
          200: "rgba(156, 150, 150, 0.2)",
          300: "rgba(156, 150, 150, 0.25)",
          500: "rgba(159, 159, 159, 0.45)",
        },
      },
      borderRadius: {
        xl: "20px",
        "2xl": "30px",
        "61xl": "80px",
        "11xl": "30px",
      },
      fontSize: {
        "7xl": "1.625rem",
        "2xl": "1.313rem",
        "12xl": "1.938rem",
        "23xl": "2.625rem",
        "33xl": "3.25rem",
        "32xl": "3.188rem",
        "15xl": "2.125rem",
        "36xl": "3.438rem",
        "14xl": "2.063rem",
        "25xl": "2.75rem",
        "3xl": "1.375rem",
        "11xl": "1.875rem",
        inherit: "inherit",
      },
      height: {
        'custom': 'calc(100vh - 188px)',
        'height-high': 'calc(100vh - 245px)',
        'height-4k':'calc(100vh - 285px)',
        'height-lg':'calc(100vh - 180px)'
      },
      container: {
        center: true, // Center the container horizontally
        padding: {
          DEFAULT: "1rem", // Set default padding
        },
      },
      screens: {
        sm: "640px", // Custom small breakpoint
        md: "768px", // Custom medium breakpoint
        lg: "1024px", // Custom large breakpoint
        xl: "1280px", // Custom extra-large breakpoint
        "2xl": "2560px",
        '4k':"3840px"
      },
      maxWidth: {
        custom: "65.5rem",
        '2xl':'130.625rem',
        '4k':'157.125rem'
      },
    },
  },
  plugins: [],
};
