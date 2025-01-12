"use client";

import { cn } from "@/utils/utils";
import { motion } from "motion/react";

type H1AnimatedProps = {
    className?: string;
    children: React.ReactNode;
};

export default function H1Animated({ className, children }: H1AnimatedProps) {
    return (
        <motion.h1
            className={cn("H1", className)}
            initial={{ y: 16, opacity: 0, filter: "blur(16px)" }}
            animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
            {children}
        </motion.h1>
    );
}