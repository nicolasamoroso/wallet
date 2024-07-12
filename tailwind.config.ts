import { bg } from "date-fns/locale"
import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "550px",
        "2xs": "475px",
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        "input-background": {
          DEFAULT: "hsl(var(--input-background))",
          foreground: "hsl(var(--input-background-foreground))",
        },
        "chart-1": {
          DEFAULT: "hsl(var(--chart-1))",
          foreground: "hsl(var(--chart-1-foreground))",
        },
        "chart-2": {
          DEFAULT: "hsl(var(--chart-2))",
          foreground: "hsl(var(--chart-2-foreground))",
        },
        "chart-3": {
          DEFAULT: "hsl(var(--chart-3))",
          foreground: "hsl(var(--chart-3-foreground))",
        },
        "chart-4": {
          DEFAULT: "hsl(var(--chart-4))",
          foreground: "hsl(var(--chart-4-foreground))",
        },
        "chart-5": {
          DEFAULT: "hsl(var(--chart-5))",
          foreground: "hsl(var(--chart-5-foreground))",
        },
        "chart-6": {
          DEFAULT: "hsl(var(--chart-6))",
          foreground: "hsl(var(--chart-6-foreground))",
        },
        "chart-7": {
          DEFAULT: "hsl(var(--chart-7))",
          foreground: "hsl(var(--chart-7-foreground))",
        },
        "chart-8": {
          DEFAULT: "hsl(var(--chart-8))",
          foreground: "hsl(var(--chart-8-foreground))",
        },
        "chart-9": {
          DEFAULT: "hsl(var(--chart-9))",
          foreground: "hsl(var(--chart-9-foreground))",
        },
        "chart-10": {
          DEFAULT: "hsl(var(--chart-10))",
          foreground: "hsl(var(--chart-10-foreground))",
        },
        "chart-11": {
          DEFAULT: "hsl(var(--chart-11))",
          foreground: "hsl(var(--chart-11-foreground))",
        },
        "chart-12": {
          DEFAULT: "hsl(var(--chart-12))",
          foreground: "hsl(var(--chart-12-foreground))",
        },
        "chart-13": {
          DEFAULT: "hsl(var(--chart-13))",
          foreground: "hsl(var(--chart-13-foreground))",
        },
        "chart-14": {
          DEFAULT: "hsl(var(--chart-14))",
          foreground: "hsl(var(--chart-14-foreground))",
        },
        "chart-15": {
          DEFAULT: "hsl(var(--chart-15))",
          foreground: "hsl(var(--chart-15-foreground))",
        },
        "chart-16": {
          DEFAULT: "hsl(var(--chart-16))",
          foreground: "hsl(var(--chart-16-foreground))",
        },
        "chart-17": {
          DEFAULT: "hsl(var(--chart-17))",
          foreground: "hsl(var(--chart-17-foreground))",
        },
        "chart-18": {
          DEFAULT: "hsl(var(--chart-18))",
          foreground: "hsl(var(--chart-18-foreground))",
        },
        "chart-19": {
          DEFAULT: "hsl(var(--chart-19))",
          foreground: "hsl(var(--chart-19-foreground))",
        },
        "chart-20": {
          DEFAULT: "hsl(var(--chart-20))",
          foreground: "hsl(var(--chart-20-foreground))",
        },
        "chart-21": {
          DEFAULT: "hsl(var(--chart-21))",
          foreground: "hsl(var(--chart-21-foreground))",
        },
        "chart-22": {
          DEFAULT: "hsl(var(--chart-22))",
          foreground: "hsl(var(--chart-22-foreground))",
        },
        "chart-23": {
          DEFAULT: "hsl(var(--chart-23))",
          foreground: "hsl(var(--chart-23-foreground))",
        },
        "chart-24": {
          DEFAULT: "hsl(var(--chart-24))",
          foreground: "hsl(var(--chart-24-foreground))",
        },
        "chart-25": {
          DEFAULT: "hsl(var(--chart-25))",
          foreground: "hsl(var(--chart-25-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.1s ease-out",
        "accordion-up": "accordion-up 0.1s ease-out",
      },
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
  },
  safelist: [
    {
      pattern:
        /^(stroke-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
    },
  ],
  plugins: [require("tailwindcss-animate")],
}
export default config
