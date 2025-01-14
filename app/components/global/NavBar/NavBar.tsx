"use client";

import Logo from "../Logo";
import { motion } from "motion/react";
import useStickyNavBar from "@/app/hooks/useStickyNavBar";
import IconButton from "../IconButton";
import useAuth from "@/app/hooks/useAuth";
import { NavBarProvider, useNavBarContext } from './NavBarContext';


export default function NavBar() {    
    const isSticky = useStickyNavBar();
    const { isLoggedIn, logOut } = useAuth();

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
                
                {/* Button Wrapper */}
                <div className="
                    flex flex-row
                    items-center justify-end
                    gap-[8px]
                ">

                    {/* Settings and Log Out or Log In */}

                    {isLoggedIn ? (
                        <>
                            <IconButton
                                name="settings-2"
                                title="Settings"
                                onClick={() => console.log('Settings')}
                            />
                            <IconButton
                                name="log-out"
                                title="Log Out"
                                onClick={logOut}
                            />
                        </>
                    ) : (
                        <IconButton
                            name="log-in"
                            title="Log In"
                            onClick={() => console.log('Log In')}
                        />
                    )}

                </div>

            </div>

        </motion.nav>
    );
}