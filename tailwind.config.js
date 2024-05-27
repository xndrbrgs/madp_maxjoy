/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "376px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1536px",
    },
    fontSize: {
      display: ["var(--fs-display)", { lineHeight: "var(--lh-display)" }],
      h1: ["var(--fs-h1)", { lineHeight: "var(--lh-h1)" }],
      h2: ["var(--fs-h2)", { lineHeight: "var(--lh-h2)" }],
      h3: ["var(--fs-h3)", { lineHeight: "var(--lh-h3)" }],
      base: ["var(--fs-base)", { lineHeight: "var(--lh-base)" }],
    },
    spacing: {
      sm: "var(--space-xs-s)",
      md: "var(--space-s-m)",
      lg: "var(--space-m-l)",
      xl: "var(--space-l-xl)",
      xxl: "var(--space-xl-2xl)",
      xxxl: "var(--space-2xl-3xl)",
      fxl: "var(--space-3xl-4xl)",
    },
    colors: {
      black: "var(--black)",
      gray: "var(--gray)",
      neon: "var(--neon)",
    },
    borderRadius: {
      none: "0",
      sm: "0.125rem",
      DEFAULT: "0.25rem",
      md: "0.375rem",
      lg: "0.5rem",
      full: "9999px",
    },
    variants: {
      extend: {
        display: ["group-hover"],
      },
    },
    extend: {
      fontFamily: {
        satoshi: ["var(--font-satoshi)"],
        anton: ["var(--font-anton)"],
      },
    },
  },
  plugins: [],
};
