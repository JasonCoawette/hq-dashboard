'use client';

import { cn } from "@/lib/utils";
import { motion } from "motion/react";

type ButtonProps = {
    label: string;
    className?: string;
}

// TODO: Add an onclick event prop to the button

export default function Button({label, className }: ButtonProps) {
    return (
        <motion.button
            onClick={() => {console.log("clicked")}}
            className={cn(`
                w-fit h-fit
                flex 
                px-[72px] py-[12px]
                items-center justify-center
                ButtonText
                rounded-[8px]
                bg-buttonBG
            `, className)}
            transition={{
                ease: "easeInOut",
                duration: 0.2,
            }}
            whileHover={{ 
                scale: 1.02, 
                backgroundColor: "rgba(255, 255, 255, 1)",
            }}
            whileTap={{ scale: 0.98 }}
        >
            {label}
        </motion.button>
    );
}
