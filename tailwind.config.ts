import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui"],
        serif: ["var(--font-serif)", "ui-serif", "Georgia"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular"],
      },
      colors: {
        background: "var(--color-background)",
        foreground: "var(--color-foreground)",
        muted: "var(--color-muted)",
        subtle: "var(--color-subtle)",
        border: "var(--color-border)",
        accent: "var(--color-accent)",
        accent2: "var(--color-accent-2)",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(255,255,255,0.6), 0 20px 60px -30px rgba(28, 37, 54, 0.45)",
        soft: "0 12px 40px -20px rgba(11, 24, 45, 0.45)",
        subtle: "0 1px 0 rgba(255,255,255,0.7), 0 15px 35px -25px rgba(15, 23, 42, 0.5)",
      },
      backgroundImage: {
        "hero-radial": "radial-gradient(1200px 600px at 20% 20%, rgba(67, 198, 255, 0.18), transparent 55%), radial-gradient(900px 500px at 80% 10%, rgba(141, 115, 255, 0.18), transparent 60%)",
      },
      keyframes: {
        floaty: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        floaty: "floaty 6s ease-in-out infinite",
        shimmer: "shimmer 12s ease infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
