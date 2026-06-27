"use client";

import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
};

export default function FadeIn({
  children,
}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.8,
      }}
    >
      {children}
    </motion.div>
  );
}