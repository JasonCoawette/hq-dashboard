'use client';

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

type CellProps = {
  level: number;
};

const levelColors = [
  "bg-cellLow",
  "bg-cellMiddleLow",
  "bg-cellMiddle",
  "bg-cellMiddleHigh",
  "bg-cellHigh",
];

export default function Cell({ level }: CellProps) {
  return (
    <motion.div className={cn(
        "w-[8px] h-[8px] rounded-sm",
        levelColors[level]
      )}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    />
  );
}