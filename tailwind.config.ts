import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // color palette for app
      colors: {
        // primary and secondary colors
        primary: {
          "50": "#fcf3f6",
          "100": "#fbe8f0",
          "200": "#f8d2e1",
          "300": "#f4adc8",
          "400": "#ef94b4",
          "500": "#e15381",
          "600": "#cf335d",
          "700": "#b32346",
          "800": "#94203b",
          "900": "#7c1f34",
        },
        secondary: {
          "50": "#f0f8ff",
          "100": "#e0f0fe",
          "200": "#bae2fd",
          "300": "#7ccbfd",
          "400": "#37b1f9",
          "500": "#0d97ea",
          "600": "#016fb9",
          "700": "#025fa2",
          "800": "#065186",
          "900": "#0c446e",
        },

        // base colors
        dark: "#1f1f1f",
        white: "#ffffff",

        // Deafult Colors ["neutral", "gray" , "slate"]

        // Base Color themes
        heading: "#1f1f1f",
        desc: "#4b5563",
        label: "#1f1f1f",
        placeholder: "#9ca3af",
        borders: "#E5E7EB",
        inputBorders: "#d1d5db",
        iconsInside: "#6b7280",

        // for background
        tableHeader: colors.gray[900], // "#111827",
        backgroundDisabled: colors.gray[100], //"#F3F4F6",
      },

      //   Typography

      fontFamily: {}, //using next font
      fontSize: {
        sm: "0.8rem",
        base: "1rem",
        xl: "1.25rem",
        "2xl": "1.563rem",
        "3xl": "1.953rem",
        "4xl": "2.441rem",
        "5xl": "3.052rem",

        // custom font size
        h1: [
          "4rem",
          {
            lineHeight: "5rem",
            fontWeight: "bold",
            letterSpacing: "0.0375rem",
          },
        ],
        h2: [
          "3rem",
          {
            lineHeight: "2rem",
            fontWeight: "bold",
            letterSpacing: "0.035rem",
          },
        ],
        h3: [
          "2.5rem",
          {
            lineHeight: "3.5rem",
            fontWeight: "bold",
            letterSpacing: "0.05rem",
          },
        ],
        h4: [
          "2rem",
          {
            lineHeight: "2.75rem",
            fontWeight: "bold",
            letterSpacing: "0rem",
          },
        ],
        h5: [
          "1.5rem",
          {
            lineHeight: "2.5rem",
            fontWeight: "600",
            letterSpacing: "0rem",
          },
        ],
        h6: [
          "1.25rem",
          {
            lineHeight: "2rem",
            fontWeight: "600",
            letterSpacing: "0.0375rem",
          },
        ],

        p: [
          "1.25rem",
          {
            lineHeight: "2rem",
            fontWeight: "500",
            letterSpacing: "0rem",
          },
        ],
        div: [
          "1rem",
          {
            lineHeight: "1.5rem",
            fontWeight: "400",
            letterSpacing: "0rem",
          },
        ],
        span: [
          "0.75rem",
          {
            lineHeight: "1.5rem",
            fontWeight: "400",
            letterSpacing: "0rem",
          },
        ],
      },
      fontWeight: {
        thin: "100",
        hairline: "100",
        extralight: "200",
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
        "extra-bold": "800",
        black: "900",
      },
      // screen breakpoints for min width
      screens: {
        xs: "320px",
        // => @media (min-width: 320px) { ... }

        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1480px",
        // => @media (min-width: 1480px) { ... }

        "3xl": "1680px",
        // => @media (min-width: 1680px) { ... }

        "4xl": "1920px",
        // => @media (min-width: 1920px) { ... }
      },
      // container
      container: {
        center: true,
        // screens  max width
        screens: {
          xs: "320px",
          // => @media (max-width: 320px) { ... }

          sm: "575px",
          // => @media (max-width: 640px) { ... }

          md: "768px",
          // => @media (max-width: 768px) { ... }

          lg: "1024px",
          // => @media (max-width: 1024px) { ... }

          xl: "1280px",
          // => @media (max-width: 1280px) { ... }

          "2xl": "1480px",
          // => @media (max-width: 1480px) { ... }

          "3xl": "1680px",
          // => @media (max-width: 1680px) { ... }

          "4xl": "1920px",
          // => @media (max-width: 1920px) { ... }
        },

        padding: {
          DEFAULT: '0rem',
          sm: '0rem',
          lg: '0rem',
          xl: '0rem',
          '2xl': '0rem',
          '3xl': '2rem',
          '4xl': '2rem',
        },

      },
      // border radius
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("tailwindcss-animate")],
};
export default config;
