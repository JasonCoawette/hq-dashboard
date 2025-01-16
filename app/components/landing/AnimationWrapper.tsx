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
    animationType?: 'blurIn' | 'fadeInCenter';
};

export default function AnimationWrapper({
    className,
    children,
    delay = 0.4,
    initial,
    animate,
    transition,
    animationType = 'blurIn',
}: AnimationWrapperProps) {

    // Define animations
    const animations = {
        blurIn: {
            initial: { y: 16, opacity: 0, filter: "blur(8px)", ...initial },
            animate: { y: 0, opacity: 1, filter: "blur(0px)", ...animate },
            transition: { duration: 0.4, delay: delay, ease: "easeOut", ...transition },
        },
        fadeInCenter: {
            initial: { opacity: 0, ...initial },
            animate: { opacity: 1, ...animate },
            transition: { duration: 0.4, delay: delay, ease: "easeOut", ...transition },
        },
    };

    const selectedAnimation = animations[animationType];

    return (
        <motion.div
            className={cn("w-full h-fit items-center justify-center", className)}
            initial={selectedAnimation.initial}
            animate={selectedAnimation.animate}
            transition={selectedAnimation.transition}
        >
            {children}
        </motion.div>
    );
}