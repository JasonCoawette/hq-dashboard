'use client';

import { cn } from "@/utils/utils";
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
        </motion.button>
    );
}
