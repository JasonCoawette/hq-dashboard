"use client";

import Logo from "../global/Logo";
import { LogIn } from "lucide-react";
import { motion } from "motion/react";

export default function NavBar() {
    
    return (
        <nav className="
            w-full h-fit
            flex flex-row
            sticky
            px-[24px] pt-[32px] pb-[16px]
            justify-between items-center
            self-stretch
            z-10
        ">
            {/* Logo */}
            <Logo />
            
            {/* LogIn or LogOut Icon */}
            <motion.div>
                <LogIn size={28} color="white" />
            </motion.div>
        </nav>
    );
}