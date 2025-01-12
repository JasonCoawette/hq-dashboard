"use client";

import { AnimatePresence, motion } from "motion/react";

export default function PhoneGraphic() {
    return(
        <AnimatePresence>
            <motion.div 
                className="
                    relative
                    w-full h-fit
                    flex flex-col
                    justify-start items-center
                    px-[16px]
                    pointer-events-none
                    box-shadow-phoneGraphicShadow
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
                        w-full sm:max-w-[464px] md:max-w-[564px] lg:max-w-[664px]
                        max-w-[464px]
                        min-w-[360px]
                    "
                />

            </motion.div>
        </AnimatePresence>
    );
}