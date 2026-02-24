"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

export function ParallaxOrbs() {
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const shiftY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const shiftYAlt = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const shiftX = useTransform(scrollYProgress, [0, 1], [0, 60]);

  if (shouldReduceMotion) {
    return (
      <>
        <div className="hero-orb -right-20 top-10 h-64 w-64 bg-[var(--color-glow)] opacity-40" />
        <div className="hero-orb -left-24 top-48 h-72 w-72 bg-accent/20 opacity-40" />
        <div className="hero-orb left-1/3 top-20 h-40 w-40 bg-[rgba(28,92,168,0.16)] opacity-40" />
      </>
    );
  }

  return (
    <>
      <motion.div
        className="hero-orb -right-20 top-10 h-64 w-64 bg-[var(--color-glow)]"
        style={{ y: shiftY }}
      />
      <motion.div
        className="hero-orb -left-24 top-48 h-72 w-72 bg-accent/20"
        style={{ y: shiftYAlt }}
      />
      <motion.div
        className="hero-orb left-1/3 top-20 h-40 w-40 bg-[rgba(28,92,168,0.16)]"
        style={{ y: shiftY, x: shiftX }}
        animate={{ scale: [1, 1.16, 1], opacity: [0.35, 0.55, 0.35] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[8%] top-[22%] h-20 w-20 rounded-full border border-[rgba(28,92,168,0.22)]"
        style={{ y: shiftYAlt }}
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
      />
    </>
  );
}
