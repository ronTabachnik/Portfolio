import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

export default function RonTabachnik() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

  return (
    <div
      ref={ref}
      className="w-full h-screen overflow-hidden relative grid place-items-center"
    >
      <motion.h1
        style={{ y: textY }}
        className="font-bold text-black text-7xl md:text-9xl relative z-10"
      >
        Ron Tabachnik
      </motion.h1>
      <motion.h4
        style={{ y: textY }}
        className="font-light text-black text-7xl md:text-7xl relative z-10"
      >
        iOS Developer
      </motion.h4>
    </div>
  );
}
