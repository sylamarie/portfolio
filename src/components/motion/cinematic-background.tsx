"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect } from "react";

export function CinematicBackground() {
  const shouldReduceMotion = useReducedMotion();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 62, damping: 16, mass: 0.7 });
  const springY = useSpring(mouseY, { stiffness: 62, damping: 16, mass: 0.7 });

  const layerOneX = useTransform(springX, [-1, 1], [-130, 130]);
  const layerOneY = useTransform(springY, [-1, 1], [-100, 100]);
  const layerTwoX = useTransform(springX, [-1, 1], [115, -115]);
  const layerTwoY = useTransform(springY, [-1, 1], [80, -80]);
  const layerThreeX = useTransform(springX, [-1, 1], [-95, 95]);
  const layerThreeY = useTransform(springY, [-1, 1], [110, -110]);

  useEffect(() => {
    if (shouldReduceMotion) return;

    function handleMouseMove(event: MouseEvent) {
      const normalizedX = (event.clientX / window.innerWidth) * 2 - 1;
      const normalizedY = (event.clientY / window.innerHeight) * 2 - 1;
      mouseX.set(normalizedX);
      mouseY.set(normalizedY);
    }

    function handleLeave() {
      mouseX.set(0);
      mouseY.set(0);
    }

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseout", handleLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseout", handleLeave);
    };
  }, [mouseX, mouseY, shouldReduceMotion]);

  if (shouldReduceMotion) {
    return <div className="fixed inset-0 -z-10 bg-[var(--gradient-hero)]" aria-hidden />;
  }

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-[var(--gradient-hero)]" />

      <motion.div
        className="absolute -left-36 top-10 h-[28rem] w-[28rem] rounded-full bg-[rgba(38,108,205,0.26)] blur-[60px]"
        style={{ x: layerOneX, y: layerOneY }}
        animate={{ scale: [1, 1.12, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-32 top-1/4 h-[24rem] w-[24rem] rounded-full bg-[rgba(126,174,236,0.22)] blur-[56px]"
        style={{ x: layerTwoX, y: layerTwoY }}
        animate={{ scale: [1, 0.92, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
      />
      <motion.div
        className="absolute left-1/3 bottom-[-10rem] h-[26rem] w-[26rem] rounded-full bg-[rgba(15,62,130,0.16)] blur-[70px]"
        style={{ x: layerThreeX, y: layerThreeY }}
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
      />

      <div className="animated-dust" />
      <div className="animated-noise" />
    </div>
  );
}
