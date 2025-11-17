/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // iOS System Colors
        ios: {
          blue: {
            DEFAULT: "#007AFF",
            dark: "#0A84FF",
          },
          green: {
            DEFAULT: "#34C759",
            dark: "#30D158",
          },
          orange: {
            DEFAULT: "#FF9500",
            dark: "#FF9F0A",
          },
          red: {
            DEFAULT: "#FF3B30",
            dark: "#FF453A",
          },
          purple: {
            DEFAULT: "#AF52DE",
            dark: "#BF5AF2",
          },
          pink: {
            DEFAULT: "#FF2D55",
            dark: "#FF375F",
          },
          teal: {
            DEFAULT: "#5AC8FA",
            dark: "#64D2FF",
          },
          indigo: {
            DEFAULT: "#5856D6",
            dark: "#5E5CE6",
          },
        },
        // System Backgrounds
        background: {
          DEFAULT: "hsl(0, 0%, 100%)",
          dark: "hsl(0, 0%, 0%)",
          secondary: {
            DEFAULT: "hsl(220, 13%, 95%)",
            dark: "hsl(0, 0%, 11%)",
          },
          tertiary: {
            DEFAULT: "hsl(0, 0%, 100%)",
            dark: "hsl(0, 0%, 17%)",
          },
        },
        // System Fills
        fill: {
          DEFAULT: "rgba(120, 120, 128, 0.2)",
          dark: "rgba(120, 120, 128, 0.36)",
          secondary: {
            DEFAULT: "rgba(120, 120, 128, 0.16)",
            dark: "rgba(120, 120, 128, 0.32)",
          },
          tertiary: {
            DEFAULT: "rgba(118, 118, 128, 0.12)",
            dark: "rgba(118, 118, 128, 0.24)",
          },
          quaternary: {
            DEFAULT: "rgba(116, 116, 128, 0.08)",
            dark: "rgba(116, 116, 128, 0.16)",
          },
        },
        // Labels
        label: {
          DEFAULT: "hsl(0, 0%, 0%)",
          dark: "hsl(0, 0%, 100%)",
          secondary: {
            DEFAULT: "rgba(60, 60, 67, 0.6)",
            dark: "rgba(235, 235, 245, 0.6)",
          },
          tertiary: {
            DEFAULT: "rgba(60, 60, 67, 0.3)",
            dark: "rgba(235, 235, 245, 0.3)",
          },
          quaternary: {
            DEFAULT: "rgba(60, 60, 67, 0.16)",
            dark: "rgba(235, 235, 245, 0.16)",
          },
        },
        // Separators
        separator: {
          DEFAULT: "rgba(60, 60, 67, 0.29)",
          dark: "rgba(84, 84, 88, 0.6)",
          opaque: {
            DEFAULT: "hsl(0, 0%, 78%)",
            dark: "hsl(0, 0%, 22%)",
          },
        },
        border: "hsl(214.3 31.8% 91.4%)",
        input: "hsl(214.3 31.8% 91.4%)",
        ring: "hsl(221.2 83.2% 53.3%)",
        foreground: "hsl(222.2 84% 4.9%)",
        primary: {
          DEFAULT: "hsl(221.2 83.2% 53.3%)",
          foreground: "hsl(210 40% 98%)",
        },
        secondary: {
          DEFAULT: "hsl(210 40% 96.1%)",
          foreground: "hsl(222.2 47.4% 11.2%)",
        },
        destructive: {
          DEFAULT: "hsl(0 84.2% 60.2%)",
          foreground: "hsl(210 40% 98%)",
        },
        muted: {
          DEFAULT: "hsl(210 40% 96.1%)",
          foreground: "hsl(215.4 16.3% 46.9%)",
        },
        accent: {
          DEFAULT: "hsl(210 40% 96.1%)",
          foreground: "hsl(222.2 47.4% 11.2%)",
        },
        popover: {
          DEFAULT: "hsl(0 0% 100%)",
          foreground: "hsl(222.2 84% 4.9%)",
        },
        card: {
          DEFAULT: "hsl(0 0% 100%)",
          foreground: "hsl(222.2 84% 4.9%)",
        },
      },
      borderRadius: {
        ios: {
          xs: "4px",
          sm: "8px",
          md: "10px",
          lg: "12px",
          xl: "16px",
          "2xl": "20px",
        },
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "'SF Pro Display'",
          "'SF Pro Text'",
          "'Helvetica Neue'",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
      fontSize: {
        "large-title": ["34px", { lineHeight: "41px", fontWeight: "700" }],
        "title-1": ["28px", { lineHeight: "34px", fontWeight: "700" }],
        "title-2": ["22px", { lineHeight: "28px", fontWeight: "700" }],
        "title-3": ["20px", { lineHeight: "25px", fontWeight: "600" }],
        headline: ["17px", { lineHeight: "22px", fontWeight: "600" }],
        body: ["17px", { lineHeight: "22px", fontWeight: "400" }],
        callout: ["16px", { lineHeight: "21px", fontWeight: "400" }],
        subheadline: ["15px", { lineHeight: "20px", fontWeight: "400" }],
        footnote: ["13px", { lineHeight: "18px", fontWeight: "400" }],
        "caption-1": ["12px", { lineHeight: "16px", fontWeight: "400" }],
        "caption-2": ["11px", { lineHeight: "13px", fontWeight: "400" }],
      },
      spacing: {
        ios: {
          xs: "4px",
          sm: "8px",
          md: "16px",
          lg: "24px",
          xl: "32px",
          "2xl": "40px",
          "3xl": "48px",
          "4xl": "64px",
        },
      },
      boxShadow: {
        ios: {
          sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
          md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
          lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
          xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        },
      },
      backdropBlur: {
        ios: "20px",
      },
      transitionTimingFunction: {
        "ios-spring": "cubic-bezier(0.4, 0.0, 0.2, 1)",
        "ios-ease-in": "cubic-bezier(0.4, 0.0, 1, 1)",
        "ios-ease-out": "cubic-bezier(0.0, 0.0, 0.2, 1)",
        "ios-ease-in-out": "cubic-bezier(0.4, 0.0, 0.2, 1)",
      },
      transitionDuration: {
        "ios-fast": "150ms",
        "ios-normal": "250ms",
        "ios-slow": "350ms",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

