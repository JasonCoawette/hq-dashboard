"use client";

import { AnimatePresence, motion } from "motion/react";

export default function PhoneGraphic() {
    return(
        <AnimatePresence>
            <motion.div 
                className="
                    absolute
                    w-full h-fit
                    flex justify-center
                    top-[64px] sm:top-[64px] md:top-0
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
                        w-380px sm:max-w-[464px] md:max-w-[564px] lg:max-w-[732px]
                        max-w-[464px]
                        min-w-[360px]
                        object-contain
                        transition-all duration-300 ease-in-out
                    "
                />

            </motion.div>
        </AnimatePresence>
    );
}