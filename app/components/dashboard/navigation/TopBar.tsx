'use client';
import { useState, useEffect } from 'react';
import Logo from "./Logo";
import IconButton from "./IconButton";
import { cn } from "@/lib/utils";

export default function TopBar() {
    const [hasScrolled, setHasScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setHasScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        
        // Initial check
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav
            className={cn(
                "sticky top-0 left-0 right-0 w-full h-fit flex flex-row px-[8px] pt-[40px] pb-[16px] justify-between items-center bg-glass backdrop-blur-[24px] transition-shadow duration-200",
                hasScrolled ? "shadow-md" : "shadow-none"
            )}
        >
            <Logo href="/" />
            <IconButton
                title="Settings"
                iconName="settings"
                onClick={() => { console.log("Settings") }}
            />
        </nav>
    );
}