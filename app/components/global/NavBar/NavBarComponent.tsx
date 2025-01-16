"use client";

import { motion } from "motion/react";
import { useNavBarContext } from './NavBarContext';
import useStickyNavBar from "@/app/hooks/useStickyNavBar";
import Logo from "../Logo";
import IconButton from "../IconButton";
import useAuth from "@/app/hooks/useAuth";

// MAIN COMPONENT
// ---------------------------------------------------- //
export const NavBarComponent = () => {
    const isSticky = useStickyNavBar();
    const { showOverlay } = useNavBarContext();

    return (
        <motion.nav 
            className={`
                sticky top-0
                w-full h-fit
                flex flex-row
                px-[24px] pt-[32px] pb-[16px]
                justify-between items-center
                bg-glass 
                backdrop-blur-md
                box-shadow-navBarShadow
                z-30
                ${showOverlay ? 'bg-glass' : ''}
            `}
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
                <Logo />
                <NavBarComponent.ButtonWrapper />
            </div>
        </motion.nav>
    );
};


// BUTTON WRAPPER
// ---------------------------------------------------- //
NavBarComponent.ButtonWrapper = function ButtonWrapper() {
    const { isLoggedIn, logOut } = useAuth();
    const { showOverlay, setShowOverlay } = useNavBarContext();

    return (
        <div className="
            flex flex-row
            items-center justify-end
            gap-[8px]
        ">
            {isLoggedIn ? (
                <>
                    <IconButton
                        name="settings-2"
                        title="Settings"
                        onClick={() => setShowOverlay(!showOverlay)}
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
                    href="/pages/auth/login"
                />
            )}
        </div>
    );
};

// SETTINGS OVERLAY
// ---------------------------------------------------- //
NavBarComponent.SettingsOverlay = function SettingsOverlay() {
    return (
        <div className="w-full h-full bg-primaryBG">
            <h1>Settings</h1>
        </div>
    );
};