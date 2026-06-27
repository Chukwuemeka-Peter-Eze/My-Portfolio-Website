"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export default function Button({
  href,
  children,
  variant = "primary",
}: ButtonProps) {
  const classes =
    variant === "primary"
      ? `
          bg-cyan-500
          text-white
          hover:bg-cyan-600
        `
      : `
          border
          border-cyan-500
          text-cyan-500
          hover:bg-cyan-500
          hover:text-white
        `;

  // If href exists, render a Link
  if (href) {
    return (
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
      >
        <Link
          href={href}
          className={`
            inline-flex
            items-center
            justify-center
            rounded-xl
            px-6
            py-3
            font-semibold
            transition-colors
            duration-300
            ${classes}
          `}
        >
          {children}
        </Link>
      </motion.div>
    );
  }

  // Otherwise render a normal button
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      className={`
        rounded-xl
        px-6
        py-3
        font-semibold
        transition-colors
        duration-300
        ${classes}
      `}
    >
      {children}
    </motion.button>
  );
}