'use client';

import Button from "./components/global/Button";
import { motion } from "motion/react";
import DecryptingText from "./components/landing/DecryptingText";
import GlassStatCardGroup from "./components/landing/GlassStatCardGroup";

//TODO figure out how to make the page not scrollable
//TODO make the phone image responsive

export default function LandingPage() {
    return (
        <section className="
            w-full h-[100vh] overflow-hidden
            flex flex-col
            justify-center items-center
        ">

            {/* Container */}
            <div className="
                w-full h-fit max-w-[360px] sm:max-w-[360px] md:max-w-none mx-auto
                pt-[104px] px-[40px] pb-[40px]
                flex flex-col
                items-center
                justify-center
                gap-[32px] sm:gap-[32px] md:gap-[48px] lg:gap-[64px]
                z-10
            ">

                {/* Hero text and CTA */}
                <div className="
                    w-full h-fit md:max-w-[376px] lg:max-w-[512px] mx-auto
                    flex flex-col
                    items-center
                    justify-center
                    gap-[24px] sm:gap-[24px] md:gap-[32px]
                ">

                    {/* Text wrapper */}
                    <div className="
                        w-full h-fit
                        flex flex-col
                        justify-center items-center
                        gap-[16px]
                    ">

                        {/* Encrypted Text Heading component */}
                        <DecryptingText text="[STRATUS VENTURES]" />
                        
                        {/* H1 */}
                        <h1 className="H1">
                            We build IOS apps
                        </h1>

                        {/* Subtitle */}
                        <p className="Subtitle">
                            Partner with our elite team that turns your idea into an App Store success story.
                        </p>

                    </div>

                    {/* Button */}
                    <Button label="Contact us" className="
                        px-[72px] py-[12px] rounded-[8px]
                        hover:bg-buttonBG
                    "/>

                </div>

                {/* Stats Cards */}
                <GlassStatCardGroup className="max-w-[340px] sm:max-w-none" />

            </div>

            {/* Absolute Phone Graphic */}
            <motion.div 
                className="
                    absolute
                    w-full h-fit
                    flex justify-center
                    top-0
                    pointer-events-none
                    z-0
                "
                initial={{ y: '100%' }}
                animate={{ y: '0%' }}
                transition={{
                    type: 'spring',
                    stiffness: 100,
                    damping: 20,
                    mass: 1
                }}
            >
                <img 
                    src="/images/phone.png" 
                    alt="Phone" 
                    className="
                        w-[360px] sm:w-[360px] md:[564] lg:w-[700px]
                        min-w-[360px]
                        object-contain
                        transition-all duration-300 ease-in-out
                    "
                />

            </motion.div>

        </section>
    ); 
}