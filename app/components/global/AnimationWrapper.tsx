"use client";

import { cn } from "@/utils/utils";
import { motion } from "motion/react";

type AnimationWrapperProps = {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    initial?: any;
    animate?: any;
    transition?: any;
};

export default function AnimationWrapper({ className, children, delay = 0.4, initial, animate, transition }: AnimationWrapperProps) {

    return (
        <motion.div
            className={cn("w-fit h-fit items-center justify-center", className)}
            initial={{ y: 16, opacity: 0, filter: "blur(16px)", ...initial }}
            animate={{ y: 0, opacity: 1, filter: "blur(0px)", ...animate }}
            transition={{ duration: 0.4, delay: delay, ease: "easeOut", ...transition }}
        >
            {children}
        </motion.div>
    );
}