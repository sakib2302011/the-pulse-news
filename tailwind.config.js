/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['"Poppins"', 'sans-serif'],
        unifraktur: ['"UnifrakturCook"', 'cursive'],
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: ["light", "dark", {
      "login-theme": {
        primary: "#d1d5db", // gray-300
        secondary: "#e5e7eb", // gray-200
        accent: "#f3f4f6", // gray-100
        neutral: "#111827", // dark gray
        "base-100": "#f3f4f6", // gray-100 background
        info: "#2563eb", // blue
        success: "#10b981", // green
        warning: "#f59e0b", // yellow
        error: "#ef4444", // red
      },
    },],
  },
}

