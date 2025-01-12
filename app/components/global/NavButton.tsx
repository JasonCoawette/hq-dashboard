"use client";

import { cn } from "@/utils/utils";
import { motion } from "motion/react";

type ButtonProps = {
    link: string;
    label: string;
    className?: string;
    target?: "_blank" | "_self";
    rel?: string;
    onClick?: () => void;
}

export default function Button({link, label, className, target, rel, onClick}: ButtonProps) {
    return (
        <motion.a
            href={link}
            target={target}
            rel={rel}
            onClick={onClick}
            className={cn(`
                w-fit h-fit
                flex 
                items-center justify-center
                ButtonText
                bg-buttonBG
            `, className)}
            whileHover={{ 
                scale: 1.02, 
                backgroundColor: "rgba(255, 255, 255, 1)",
            }}
            whileTap={{ scale: 0.98 }}
        >
            {label}
        </motion.a>
    );
}
