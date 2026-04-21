import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563EB",
        "primary-hover": "#1D4ED8",
        success: "#16A34A",
        error: "#DC2626",
        "error-light": "#FEF2F2",
        "drag-active": "#EFF6FF",
        surface: "#F9FAFB",
        border: "#E5E7EB",
        "text-main": "#111827",
        "text-muted": "#6B7280",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      screens: {
        xs: "375px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
      minHeight: {
        "ad-slot": "250px",
      },
      animation: {
        "pulse-slow": "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [],
}

export default config
