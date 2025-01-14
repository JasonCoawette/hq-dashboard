"use client";

import { cn } from "@/utils/utils";
import { motion } from "motion/react";

type CTAProps = {
    link: string;
    label: string;
    className?: string;
    target?: "_blank" | "_self";
    rel?: string;
    onClick?: () => void;
}

export default function CTA({link, label, className, target, rel, onClick}: CTAProps) {
    return (
        <motion.a
            href={link}
            target={target}
            rel={rel}
            onClick={onClick}
            className={cn(`
                w-full h-fit
                flex 
                items-center justify-center
                ButtonText
                bg-buttonBG
            `, className)}
            whileHover={{
                scale: 1.02,
                backgroundColor: "rgba(255, 255, 255, 1)",
            }}
            whileTap={{
                scale: 0.98,
                backgroundColor: "rgba(255, 255, 255, 1)",
            }}
            transition={{ 
                duration: 0.2, 
                ease: "easeOut" 
            }}
        >
            {label}
        </motion.a>
    );
}
