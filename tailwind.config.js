/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-bg": "url('./src/assets/hero-bg.png')",
      },
    },

    fontFamily: {
      sans: ["ui-sans-serif", "system-ui"],
      serif: ["ui-serif", "Georgia"],
      mono: ["ui-monospace", "monospace"],
    },

    fontWeight: {
      thin: "100",
      extralight: "200",
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
      black: "900",
    },

    animation: {
      loader: "loader 0.6s infinite alternate",
    },

    keyframes: {
      loader: {
        to: {
          opacity: 0.1,
          transform: "translate3d(0, -1rem, 0)",
        },
      },
    },
  },
  plugins: [require("daisyui")],
};
