"use client";

import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
};

export default function ScaleIn({
  children,
}: Props) {
  return (
    <motion.div
      initial={{
        scale: 0.95,
        opacity: 0,
      }}
      whileInView={{
        scale: 1,
        opacity: 1,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.5,
      }}
    >
      {children}
    </motion.div>
  );
}