"use client";

import Logo from "../global/Logo";
import { motion } from "motion/react";
import useStickyNavBar from "@/app/hooks/useStickyNavBar";
import IconButton from "./IconButton";
export default function NavBar() {    
    const isSticky = useStickyNavBar();

    return (
        <motion.nav 
            className="
                sticky top-0
                w-full h-fit
                flex flex-row
                px-[24px] pt-[32px] pb-[16px]
                justify-between items-center
                bg-glass 
                backdrop-blur-md
                box-shadow-navBarShadow
                z-30
            "
            animate={{
                borderBottom: isSticky ? '1px solid rgba(255, 255, 255, 0.16)' : '0px solid rgba(255, 255, 255, 0)',
            }}
            transition={{
                duration: 0.2,
                ease: "easeOut",
            }}
        >
             
            <div className="
                w-full h-fit max-w-[1400px] mx-auto
                flex flex-row
                justify-between items-center
            ">

                {/* Logo */}
                <Logo />
                    
                {/* LogIn or LogOut Icon */}
                <IconButton name="log-in"/>

            </div>

        </motion.nav>
    );
}